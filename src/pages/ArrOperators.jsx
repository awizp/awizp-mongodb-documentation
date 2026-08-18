const ArrOperators = () => {
    return (
        <section className="w-full py-10">
            <div className="custom-container space-y-5">
                <div className="w-full">
                    <h2 className="mb-5 text-green-800 font-semibold text-2xl">Array Operators</h2>

                    <p className="pl-5">Array operators are exclusively used in array functionalities and operations.</p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code> {`
    [
        { name: "Arun", skills: ["React", "MongoDb", "Javascript"] },
        { name: "Divya", skills: ["HTML", "CSS"] },
        { name: "Rahul", skills: ["React", "Javascript"] },
        { name: "Kavya", skills: ["MongoDb", "Node.js"] },
        { name: "Ram", skills: ["Node.js", "Javascript"] }
    ]
                `} </code>
                    </pre>
                </div>

                <div>
                    {/* 1. $push operator */}
                    <div className="mb-10">
                        <h3 className="mb-5 text-green-800 font-semibold">1. $push</h3>
                        <p className="pl-5 mb-5">Use this operator to add a specified value to the end of an array field.</p>
                        <pre className="code-block mb-5 custom-scroll">
                            <code> {`
    db.students.updateOne(
        {"name.first": "Ram"},
        {$push: {"skills": "MongoDB"}}
    )
                `} </code>
                        </pre>
                        <p className="pl-5 mb-5">Here, "MongoDB" is appended to the end of Ram's skills array.</p>
                    </div>

                    {/* 2. $pop operator */}
                    <div className="mb-10">
                        <h3 className="mb-5 text-green-800 font-semibold">2. $pop</h3>
                        <p className="pl-5 mb-5">Use this operator to remove the first or last element of an array (use 1 for last element, -1 for first).</p>
                        <pre className="code-block mb-5 custom-scroll">
                            <code> {`
    db.students.updateOne(
        {"name.first": "Ram"},
        {$pop: {"skills": 1}}
    )
                `} </code>
                        </pre>
                        <p className="pl-5 mb-5">Here, the last element from Ram's skills array is removed.</p>
                    </div>

                    {/* 3. $addToSet operator */}
                    <div className="mb-10">
                        <h3 className="mb-5 text-green-800 font-semibold">3. $addToSet</h3>
                        <p className="pl-5 mb-5">This operator adds a value to an array only if the value does not already exist, preventing duplicates.</p>
                        <pre className="code-block mb-5 custom-scroll">
                            <code> {`
    db.students.updateOne(
        {"name.first": "Ram"},
        {$addToSet: {"skills": "React"}}
    )
                `} </code>
                        </pre>
                        <p className="pl-5 mb-5">Here, "React" is added to Ram's skills array only if it is not already present.</p>
                    </div>

                    {/* 4. $all operator */}
                    <div className="mb-10">
                        <h3 className="mb-5 text-green-800 font-semibold">4. $all</h3>
                        <p className="pl-5 mb-5">This operator matches documents where an array field contains all the specified elements, regardless of order.</p>
                        <pre className="code-block mb-5 custom-scroll">
                            <code> {`
    db.students.find(
        {"skills": {$all: ["MongoDB", "React"]}}
    )
                `} </code>
                        </pre>
                        <p className="pl-5 mb-5">Here, it finds all students who have both "MongoDB" and "React" in their skills array.</p>
                    </div>

                    {/* 5. $in operator */}
                    <div className="mb-10">
                        <h3 className="mb-5 text-green-800 font-semibold">5. $in</h3>
                        <p className="pl-5 mb-5">This operator matches documents where at least one value in the query array matches a value in the document's field.</p>
                        <pre className="code-block mb-5 custom-scroll">
                            <code> {`
    db.students.find(
        {"skills": {$in: ["Node.js", "Python"]}}
    )
                `} </code>
                        </pre>
                        <p className="pl-5 mb-5">Here, it finds students who have either "Node.js" or "Python" (or both) in their skills array.</p>
                    </div>

                    {/* 6. $size operator */}
                    <div className="mb-10">
                        <h3 className="mb-5 text-green-800 font-semibold">6. $size</h3>
                        <p className="pl-5 mb-5">This operator matches documents where an array field has exactly the specified number of elements.</p>
                        <pre className="code-block mb-5 custom-scroll">
                            <code> {`
    db.students.find(
        {"skills": {$size: 3}}
    )
                `} </code>
                        </pre>
                        <p className="pl-5 mb-5">Here, it fetches all student documents where the skills array contains exactly 3 elements.</p>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default ArrOperators;