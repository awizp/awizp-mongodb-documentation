const GroupOperators = () => {
    return (
        <section className="w-full py-10">
            <div className="custom-container space-y-5">
                <div className="w-full">
                    <h2 className="mb-5 text-green-800 font-semibold text-2xl">
                        Aggregate Group Operators
                    </h2>
                    <p className="pl-5 mb-2">
                        The <span className="font-semibold text-green-600">$group</span> stage
                        separates documents into groups according to a group key. The output is
                        one document for each unique group key.
                    </p>
                    <p className="pl-5 mb-5">
                        Let's imagine we have this <span className="font-semibold text-green-600">students</span> collection:
                    </p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code>{`
    [
      { "_id": 1, "name": "Arun Kumar", "age": 23, "class": "BCA" },
      { "_id": 2, "name": "Karthik Selvam", "age": 24, "class": "Btech" },
      { "_id": 3, "name": "Lakshmi Priya", "age": 20, "class": "BSc" },
      { "_id": 4, "name": "Manoj Raj", "age": 19, "class": "BCA" },
      { "_id": 5, "name": "Suresh Nair", "age": 24, "class": "Btech" },
      { "_id": 6, "name": "Deepa Rani", "age": 21, "class": "BSc" },
      { "_id": 7, "name": "Vijay Anand", "age": 22, "class": "BCA" },
      { "_id": 8, "name": "Ramesh Kannan", "age": 20, "class": "Btech" }
    ]
        `}</code>
                    </pre>
                </div>

                {/* $group */}
                <div>
                    <h3 className="mb-5 text-green-800 font-semibold text-xl">
                        1. Distinct Values with $group
                    </h3>
                    <p className="pl-5 mb-5">
                        Using <span className="font-semibold text-green-600">$group</span> with only an <span className="font-semibold text-green-600">_id</span> field groups documents by that field and eliminates duplicates, effectively returning distinct course names.
                    </p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code>{`
    db.students.aggregate([
        { $group: { _id: "$class" } }
    ])
        `}</code>
                    </pre>

                    <p className="pl-5 mb-5">
                        Here, MongoDB groups all records by their <span className="text-sm text-green-600 font-semibold">class</span> field, returning unique class names like BCA, Btech, and BSc.
                    </p>
                </div>

                {/* sum */}
                <div>
                    <h3 className="mb-5 text-green-800 font-semibold text-xl">2. $sum</h3>
                    <p className="pl-5 mb-5">
                        This accumulator operator calculates and returns the collective sum of numeric values. When passed <span className="font-semibold text-green-600">1</span>, it acts as a counter for the number of documents in each group.
                    </p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code>{`
    db.students.aggregate([
        {
            $group: {
                _id: "$class",
                student_count: { $sum: 1 }
            }
        }
    ])
        `}</code>
                    </pre>

                    <p className="pl-5 mb-5">
                        Here, <span className="text-sm text-green-600 font-semibold">student_count</span> increments by 1 for every document found in each course, calculating total student strength per class.
                    </p>

                    {/* $match and sum */}
                    <p className="pl-5 mb-5">
                        You can also combine <span className="font-semibold text-green-600">$match</span> before <span className="font-semibold text-green-600">$group</span> to filter documents before aggregation:
                    </p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code>{`
    db.students.aggregate([
        {
            $match: { age: { $gt: 20 } }
        },
        {
            $group: {
                _id: "$class",
                student_count: { $sum: 1 }
            }
        }
    ])
        `}</code>
                    </pre>

                    <p className="pl-5 mb-5">
                        Here, only students older than 20 are passed to the grouping stage, giving the course-wise student count for older students.
                    </p>
                </div>

                {/* count */}
                <div>
                    <h3 className="mb-5 text-green-800 font-semibold text-xl">3. $count</h3>
                    <p className="pl-5 mb-5">
                        This operator returns the total count of documents in a group. It is an efficient alternative to using <span className="font-semibold text-green-600">$sum: 1</span> inside aggregation stages.
                    </p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code>{`
    db.students.aggregate([
        {
            $match: { age: { $gt: 20 } }
        },
        {
            $group: {
                _id: "$class",
                student_count: { $count: {} }
            }
        }
    ])
        `}</code>
                    </pre>

                    <p className="pl-5 mb-5">
                        Here, <span className="text-sm text-green-600 font-semibold">$count: &#123;&#125;</span> explicitly counts how many students over age 20 belong to each class.
                    </p>

                    <p className="pl-5 mb-5">
                        You can chain a <span className="font-semibold text-green-600">$sort</span> stage after the count to order the output:
                    </p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code>{`
    db.students.aggregate([
        {
            $group: {
                _id: "$class",
                student_count: { $count: {} }
            }
        },
        {
            $sort: { student_count: -1 }
        }
    ])
        `}</code>
                    </pre>

                    <p className="pl-5 mb-5">
                        Here, results are sorted in descending order (-1) based on the total student count of each class.
                    </p>
                </div>

                {/* push */}
                <div>
                    <h3 className="mb-5 text-green-800 font-semibold text-xl">4. $push</h3>
                    <p className="pl-5 mb-5">
                        This operator returns an array of values resulting from applying an expression to each document in a group.
                    </p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code>{`
    db.students.aggregate([
        {
            $group: {
                _id: "$class",
                students: { $push: "$name" }
            }
        }
    ])
        `}</code>
                    </pre>

                    <p className="pl-5 mb-5">
                        Here, <span className="text-sm text-green-600 font-semibold">students</span> will be an array containing all student names belonging to that class.
                    </p>

                    <p className="pl-5 mb-5">
                        You can also push the entire document using the system variable <span className="font-semibold text-green-600">$$ROOT</span>:
                    </p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code>{`
    db.students.aggregate([
        {
            $group: {
                _id: "$class",
                students: { $push: "$$ROOT" }
            }
        }
    ])
        `}</code>
                    </pre>

                    <p className="pl-5 mb-5">
                        Here, <span className="text-sm text-green-600 font-semibold">$$ROOT</span> captures and pushes every complete student document into the array for each class.
                    </p>
                </div>

                {/* addToSet */}
                <div>
                    <h3 className="mb-5 text-green-800 font-semibold text-xl">5. $addToSet</h3>
                    <p className="pl-5 mb-5">
                        Similar to <span className="font-semibold text-green-600">$push</span>, this operator returns an array of values, but it excludes duplicate values from the resulting array.
                    </p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code>{`
    db.students.aggregate([
        {
            $group: {
                _id: "$class",
                students: { $addToSet: "$name" }
            }
        }
    ])
        `}</code>
                    </pre>

                    <p className="pl-5 mb-5">
                        Here, duplicate student names inside the same class (if any exist) are automatically removed, keeping only unique names in the output array.
                    </p>
                </div>

                {/* max */}
                <div>
                    <h3 className="mb-5 text-green-800 font-semibold text-xl">6. $max</h3>
                    <p className="pl-5 mb-5">
                        This operator inspects all specified values across documents within a group and returns the maximum (highest) value.
                    </p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code>{`
    db.students.aggregate([
        {
            $group: {
                _id: "$class",
                max_age: { $max: "$age" }
            }
        }
    ])
        `}</code>
                    </pre>

                    <p className="pl-5 mb-5">
                        Here, <span className="text-sm text-green-600 font-semibold">max_age</span> evaluates all student ages in a class and picks the oldest student's age.
                    </p>
                </div>

                {/* min */}
                <div>
                    <h3 className="mb-5 text-green-800 font-semibold text-xl">7. $min</h3>
                    <p className="pl-5 mb-5">
                        This operator inspects all specified values across documents within a group and returns the minimum (lowest) value.
                    </p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code>{`
    db.students.aggregate([
        {
            $group: {
                _id: "$class",
                min_age: { $min: "$age" }
            }
        }
    ])
        `}</code>
                    </pre>

                    <p className="pl-5 mb-5">
                        Here, <span className="text-sm text-green-600 font-semibold">min_age</span> identifies the lowest age among students enrolled in each class.
                    </p>
                </div>

                {/* avg */}
                <div>
                    <h3 className="mb-5 text-green-800 font-semibold text-xl">8. $avg</h3>
                    <p className="pl-5 mb-5">
                        This operator calculates and returns the numerical average value of a field across all grouped documents.
                    </p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code>{`
    db.students.aggregate([
        {
            $group: {
                _id: null,
                avg_age: { $avg: "$age" }
            }
        }
    ])
        `}</code>
                    </pre>

                    <p className="pl-5 mb-5">
                        Here, setting <span className="text-sm text-green-600 font-semibold">_id: null</span> groups all documents in the collection into a single bucket to calculate the overall average student age.
                    </p>
                </div>

                {/* median */}
                <div>
                    <h3 className="mb-5 text-green-800 font-semibold text-xl">9. $median</h3>
                    <p className="pl-5 mb-5">
                        This window/group accumulator calculates the statistical median value for an input numerical expression.
                    </p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code>{`
    db.students.aggregate([
        {
            $group: {
                _id: null,
                median_age: {
                    $median: {
                        input: "$age",
                        method: "approximate"
                    }
                }
            }
        }
    ])
        `}</code>
                    </pre>

                    <p className="pl-5 mb-5">
                        Here, <span className="text-sm text-green-600 font-semibold">median_age</span> computes the approximate middle age value across the entire student body.
                    </p>
                </div>

                {/* first */}
                <div>
                    <h3 className="mb-5 text-green-800 font-semibold text-xl">10. $first</h3>
                    <p className="pl-5 mb-5">
                        This operator returns the value resulting from an expression applied to the very first document in a group.
                    </p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code>{`
    db.students.aggregate([
        {
            $group: {
                _id: "$class",
                first_student: { $first: "$$ROOT" }
            }
        }
    ])
        `}</code>
                    </pre>

                    <p className="pl-5 mb-5">
                        Here, <span className="text-sm text-green-600 font-semibold">first_student</span> captures the full record of the first student encountered for each course group.
                    </p>
                </div>

                {/* last */}
                <div>
                    <h3 className="mb-5 text-green-800 font-semibold text-xl">11. $last</h3>
                    <p className="pl-5 mb-5">
                        This operator returns the value resulting from an expression applied to the final document in a group.
                    </p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code>{`
    db.students.aggregate([
        {
            $group: {
                _id: "$class",
                last_student: { $last: "$$ROOT" }
            }
        }
    ])
        `}</code>
                    </pre>

                    <p className="pl-5 mb-5">
                        Here, <span className="text-sm text-green-600 font-semibold">last_student</span> extracts the final student record processed within each class group.
                    </p>
                </div>

                {/* top */}
                <div>
                    <h3 className="mb-5 text-green-800 font-semibold text-xl">12. $top</h3>
                    <p className="pl-5 mb-5">
                        This operator returns the top element in a group according to a specified sort order.
                    </p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code>{`
    db.students.aggregate([
        {
            $group: {
                _id: "$class",
                top_student: {
                    $top: {
                        output: ["$name", "$class", "$age"],
                        sortBy: { "age": -1 }
                    }
                }
            }
        }
    ])
        `}</code>
                    </pre>

                    <p className="pl-5 mb-5">
                        Here, students are sorted by age in descending order (<span className="text-sm text-green-600 font-semibold">-1</span>), returning specified fields for the single oldest student in each class.
                    </p>
                </div>

                {/* bottom */}
                <div>
                    <h3 className="mb-5 text-green-800 font-semibold text-xl">13. $bottom</h3>
                    <p className="pl-5 mb-5">
                        This operator returns the bottom element in a group according to a specified sort order.
                    </p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code>{`
    db.students.aggregate([
        {
            $group: {
                _id: "$class",
                bottom_student: {
                    $bottom: {
                        output: ["$name", "$class", "$age"],
                        sortBy: { "age": -1 }
                    }
                }
            }
        }
    ])
        `}</code>
                    </pre>

                    <p className="pl-5 mb-5">
                        Here, sorting by age descending causes the bottom position to return the youngest student's details in each class.
                    </p>
                </div>

                {/* topN */}
                <div>
                    <h3 className="mb-5 text-green-800 font-semibold text-xl">14. $topN</h3>
                    <p className="pl-5 mb-5">
                        This operator returns an array of the top <span className="font-semibold text-green-600">N</span> elements in a group according to a specified sort order.
                    </p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code>{`
    db.students.aggregate([
        {
            $group: {
                _id: "$class",
                top_student: {
                    $topN: {
                        output: ["$name", "$class", "$age"],
                        sortBy: { "age": -1 },
                        n: 3
                    }
                }
            }
        }
    ])
            `}</code>
                    </pre>

                    <p className="pl-5 mb-5">
                        Here, <span className="text-sm text-green-600 font-semibold">n: 3</span> retrieves an array containing the details of the top 3 oldest students in each class.
                    </p>
                </div>

                {/* bottomN */}
                <div>
                    <h3 className="mb-5 text-green-800 font-semibold text-xl">15. $bottomN</h3>
                    <p className="pl-5 mb-5">
                        This operator returns an array of the bottom <span className="font-semibold text-green-600">N</span> elements in a group according to a specified sort order.
                    </p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code>{`
    db.students.aggregate([
        {
            $group: {
                _id: "$class",
                bottom_student: {
                    $bottomN: {
                        output: ["$name", "$class", "$age"],
                        sortBy: { "age": -1 },
                        n: 3
                    }
                }
            }
        }
    ])
        `}</code>
                    </pre>

                    <p className="pl-5 mb-5">
                        Here, <span className="text-sm text-green-600 font-semibold">n: 3</span> retrieves an array of the 3 youngest students per class (when sorted by age in descending order).
                    </p>
                </div>
            </div>
        </section>
    );
};

export default GroupOperators;