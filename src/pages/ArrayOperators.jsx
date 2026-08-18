const ArrayOperators = () => {
    return (
        <section className="w-full py-10">
            <div className="custom-container space-y-5">
                <div className="w-full">
                    <h2 className="mb-5 text-green-800 font-semibold text-2xl">
                        Array Aggregation Operators
                    </h2>
                    <p className="pl-5 mb-2">
                        Array expression operators allow you to extract elements, slice subsets, sort, transform, filter, accumulate, and convert arrays to objects within aggregation pipelines.
                    </p>
                    <p className="pl-5 mb-5">
                        Let's imagine we have this <span className="font-semibold text-green-600">students</span> collection:
                    </p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code>{`
    db.students.insertMany([
        {
            _id: 1,
            name: "Arun Kumar",
            marks: [80, 90, 75, 85],
            subjects: ["Math", "Science", "English", "History"],
            hobbies: ["Reading", "Traveling", "Coding"]
        },
        {
            _id: 2,
            name: "Priya R",
            marks: [65, 70, 82, 91],
            subjects: ["Math", "Biology", "English", "Geography"],
            hobbies: ["Music", "Dance", "Yoga"]
        }
    ]);
        `}</code>
                    </pre>
                </div>

                {/* 1. Element Extraction & Boundary Operators */}
                <div>
                    <h3 className="mb-5 text-green-800 font-semibold text-xl">
                        1. Element Extraction: $arrayElemAt, $firstN, $lastN, $maxN & $minN
                    </h3>
                    <p className="pl-5 mb-5">
                        These operators pick single elements by positional index or extract the first, last, highest, and lowest <span className="font-semibold text-green-600">N</span> elements from an array.
                    </p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code>{`
    db.students.aggregate([
        {
            $project: {
            name: 1,
            firstSubject: { $arrayElemAt: ["$subjects", 0] },
            lastSubject: { $arrayElemAt: ["$subjects", -1] },
            first2Marks: { $firstN: { input: "$marks", n: 2 } },
            last2Marks: { $lastN: { input: "$marks", n: 2 } },
            top2Marks: { $maxN: { input: "$marks", n: 2 } },
            lowestMarks: { $minN: { input: "$marks", n: 2 } }
            }
        }
    ])
        `}</code>
                    </pre>

                    <p className="pl-5 mb-5">
                        Here:
                    </p>
                    <ul className="list-disc list-inside pl-10 mb-5 space-y-1">
                        <li><span className="text-sm text-green-600 font-semibold">$arrayElemAt</span> retrieves the element at index 0 (first) or -1 (last element counting backwards).</li>
                        <li><span className="text-sm text-green-600 font-semibold">$firstN / $lastN</span> returns a slice containing the first or last <span className="font-semibold text-green-600">n: 2</span> array items.</li>
                        <li><span className="text-sm text-green-600 font-semibold">$maxN / $minN</span> scans the array and returns the 2 highest or lowest numerical values.</li>
                    </ul>
                </div>

                {/* 2. Slicing & Reordering */}
                <div>
                    <h3 className="mb-5 text-green-800 font-semibold text-xl">
                        2. Array Slicing & Reordering: $slice, $sortArray & $reverseArray
                    </h3>
                    <p className="pl-5 mb-5">
                        Extract subsets by index range using <span className="font-semibold text-green-600">$slice</span>, sort array elements in-place with <span className="font-semibold text-green-600">$sortArray</span>, or invert order using <span className="font-semibold text-green-600">$reverseArray</span>.
                    </p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code>{`
    // Slicing arrays: [ <arrayField>, <n> ] or [ <arrayField>, <skip>, <limit> ]
    db.students.aggregate([
        {
            $project: {
            name: 1,
            marks: 1,
            first2Marks: { $slice: ["$marks", 2] },
            last2Marks: { $slice: ["$marks", -2] },
            index1to3element: { $slice: ["$marks", 1, 3] }
            }
        }
    ]);

    // Sorting and Reversing
    db.students.aggregate([
        {
            $project: {
            name: 1,
            marks: 1,
            sortedAscMarks: { $sortArray: { input: "$marks", sortBy: 1 } },
            sortedDscMarks: { $sortArray: { input: "$marks", sortBy: -1 } },
            reversedSubjects: { $reverseArray: "$subjects" }
            }
        }
    ]);
        `}</code>
                    </pre>

                    <p className="pl-5 mb-5">
                        Here, <span className="text-sm text-green-600 font-semibold">$slice</span> extracts elements using positive counts, negative offsets, or a <span className="text-sm text-green-600 font-semibold">[skip, limit]</span> window. <span className="text-sm text-green-600 font-semibold">$sortArray</span> reorders array entries ascending (<span className="font-semibold text-green-600">1</span>) or descending (<span className="font-semibold text-green-600">-1</span>).
                    </p>
                </div>

                {/* 3. Inspection & Membership */}
                <div>
                    <h3 className="mb-5 text-green-800 font-semibold text-xl">
                        3. Inspection & Membership: $size, $in, $indexOfArray & $isArray
                    </h3>
                    <p className="pl-5 mb-5">
                        These operators check element existence, locate element index positions, count array length, and verify data types.
                    </p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code>{`
    db.students.aggregate([
        {
            $project: {
            name: 1,
            subjects: 1,
            hobbiesCount: { $size: "$hobbies" },
            isGeographyAvailable: { $in: ["Geography", "$subjects"] },
            englishIndex: { $indexOfArray: ["$subjects", "English"] },
            isMarksAnArray: { $isArray: "$marks" }
            }
        }
    ])
        `}</code>
                    </pre>

                    <p className="pl-5 mb-5">
                        Here:
                    </p>
                    <ul className="list-disc list-inside pl-10 mb-5 space-y-1">
                        <li><span className="text-sm text-green-600 font-semibold">$size</span> returns the count of items in the array.</li>
                        <li><span className="text-sm text-green-600 font-semibold">$in</span> returns <span className="font-semibold text-green-600">true</span> if the specified value exists within the target array.</li>
                        <li><span className="text-sm text-green-600 font-semibold">$indexOfArray</span> returns the 0-based index of the target item (or <span className="font-semibold text-green-600">-1</span> if missing).</li>
                        <li><span className="text-sm text-green-600 font-semibold">$isArray</span> evaluates whether the field is an actual BSON Array.</li>
                    </ul>
                </div>

                {/* 4. Functional Operations: $map, $filter, $reduce */}
                <div>
                    <h3 className="mb-5 text-green-800 font-semibold text-xl">
                        4. Functional Operators: $map, $filter & $reduce
                    </h3>
                    <p className="pl-5 mb-5">
                        Apply transformations over each element with <span className="font-semibold text-green-600">$map</span>, filter items matching conditions with <span className="font-semibold text-green-600">$filter</span>, or fold an array into a single accumulated value with <span className="font-semibold text-green-600">$reduce</span>.
                    </p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code>{`
    // 1. $map: transforms every element in the array
    db.students.aggregate([
        {
            $project: {
            name: 1,
            marks: 1,
            updatedMarks: {
                $map: {
                input: "$marks",
                as: "m",
                in: { $add: ["$$m", 5] }
                }
            }
            }
        }
    ]);

    // 2. $filter: selects elements satisfying a condition
    db.students.aggregate([
        {
            $project: {
            name: 1,
            marks: 1,
            highestMarks: {
                $filter: {
                input: "$marks",
                as: "m",
                cond: {
                    $and: [
                    { $gte: ["$$m", 80] },
                    { $lte: ["$$m", 90] }
                    ]
                }
                }
            }
            }
        }
    ]);

    // 3. $reduce: accumulates values into a single result
    db.students.aggregate([
        {
            $project: {
            name: 1,
            marks: 1,
            total: {
                $reduce: {
                input: "$marks",
                initialValue: 0,
                in: { $add: ["$$value", "$$this"] }
                }
            }
            }
        }
    ]);
        `}</code>
                    </pre>

                    <p className="pl-5 mb-5">
                        Here, <span className="text-sm text-green-600 font-semibold">$map</span> adds 5 grace marks to every score, <span className="text-sm text-green-600 font-semibold">$filter</span> keeps only scores between 80 and 90, and <span className="text-sm text-green-600 font-semibold">$reduce</span> sums all marks using <span className="text-sm text-green-600 font-semibold">$$value</span> (the accumulator) and <span className="text-sm text-green-600 font-semibold">$$this</span> (the current element).
                    </p>
                </div>

                {/* 5. Combining & Conversions: $range, $concatArrays, $zip, $arrayToObject, $objectToArray */}
                <div>
                    <h3 className="mb-5 text-green-800 font-semibold text-xl">
                        5. Combining & Structural Conversions
                    </h3>
                    <p className="pl-5 mb-5">
                        Generate number sequences, concatenate arrays, merge multiple arrays element-wise with <span className="font-semibold text-green-600">$zip</span>, and convert between array pairs and object key-value formats.
                    </p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code>{`
    // 1. $range & $concatArrays
    db.students.aggregate([
        {
            $project: {
            numbers: { $range: [1, 8] },
            allActivities: { $concatArrays: ["$subjects", "$hobbies"] }
            }
        }
    ]);

    // 2. $zip: pairs elements across multiple arrays
    db.students.aggregate([
        {
            $project: {
            subjectPairs: { $zip: { inputs: ["$subjects", "$marks"] } }
            }
        }
    ]);

    // 3. $arrayToObject: converts [ [k, v], ... ] or [ {k, v}, ... ] into an object
    db.students.aggregate([
        {
            $project: {
            markObjects: {
                $arrayToObject: {
                $zip: { inputs: ["$subjects", "$marks"] }
                }
            }
            }
        }
    ]);

    // 4. $objectToArray: converts key-value documents into an array of { k, v } objects
    db.students.aggregate([
        {
            $project: {
            marksKeys: {
                $objectToArray: {
                Math: 80,
                Science: 90,
                English: 75
                }
            }
            }
        }
    ]);
        `}</code>
                    </pre>

                    <p className="pl-5 mb-5">
                        Here:
                    </p>
                    <ul className="list-disc list-inside pl-10 mb-5 space-y-1">
                        <li><span className="text-sm text-green-600 font-semibold">$range</span> generates an integer array from 1 up to (but not including) 8: <span className="text-sm text-green-600 font-semibold">[1, 2, 3, 4, 5, 6, 7]</span>.</li>
                        <li><span className="text-sm text-green-600 font-semibold">$concatArrays</span> joins subjects and hobbies into a single combined array.</li>
                        <li><span className="text-sm text-green-600 font-semibold">$zip</span> creates paired 2-element tuples: <span className="text-sm text-green-600 font-semibold">[["Math", 80], ["Science", 90], ...]</span>.</li>
                        <li><span className="text-sm text-green-600 font-semibold">$arrayToObject</span> turns the zipped pairs directly into a document: <span className="text-sm text-green-600 font-semibold">&#123; "Math": 80, "Science": 90 &#125;</span>.</li>
                        <li><span className="text-sm text-green-600 font-semibold">$objectToArray</span> converts key-value pairs back into an array structure: <span className="text-sm text-green-600 font-semibold">[ &#123; k: "Math", v: 80 &#125;, ... ]</span>.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default ArrayOperators;