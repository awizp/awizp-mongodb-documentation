const LogicalOperators = () => {
    return (
        <section className="w-full py-10">
            <div className="custom-container space-y-5">
                <div className="w-full">
                    <h2 className="mb-5 text-green-800 font-semibold text-2xl">Logical Operators</h2>

                    <p className="pl-5">Logical operators are used to combine multiple query conditions together.</p>
                </div>

                {/* $and operator */}
                <div>
                    <h3 className="mb-5 text-green-800 font-semibold">1. $and</h3>

                    <p className="pl-5 mb-5">This operator joins query clauses with a logical AND and returns all documents that match both conditions.</p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code> {`
    db.students.find({
        $and: [
            { "attendance": { $gte: 75 } },
            { "marks": { $gte: 50 } }
        ]
    })
                            `} </code>
                    </pre>

                    <p className="pl-5 mb-5">Here, the query returns only the students who have an attendance of 75 or more AND marks of 50 or more.</p>
                </div>

                {/* $or operator */}
                <div>
                    <h3 className="mb-5 text-green-800 font-semibold">2. $or</h3>

                    <p className="pl-5 mb-5">This operator joins query clauses with a logical OR and returns documents that match at least one of the conditions.</p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code> {`
    db.students.find({
        $or: [
            { "sportsQuota": true },
            { "marks": { $gte: 90 } }
        ]
    })
                            `} </code>
                    </pre>

                    <p className="pl-5 mb-5">Here, the query returns students who either have sportsQuota set to true OR have marks of 90 or more.</p>
                </div>

                {/* $not operator */}
                <div>
                    <h3 className="mb-5 text-green-800 font-semibold">3. $not</h3>

                    <p className="pl-5 mb-5">This operator inverts the effect of a query expression and returns documents that do not match the specified condition.</p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code> {`
    db.students.find({
        "marks": { $not: { $lt: 40 } }
    })
                            `} </code>
                    </pre>

                    <p className="pl-5 mb-5">Here, the query returns all students whose marks are NOT less than 40 (meaning they scored 40 or higher).</p>
                </div>

                {/* $nor operator */}
                <div>
                    <h3 className="mb-5 text-green-800 font-semibold">4. $nor</h3>

                    <p className="pl-5 mb-5">This operator joins query clauses with a logical NOR and returns documents that fail to match both of the conditions.</p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code> {`
    db.students.find({
        $nor: [
            { "isSuspended": true },
            { "hasDroppedOut": true }
        ]
    })
                            `} </code>
                    </pre>

                    <p className="pl-5 mb-5">Here, the query returns only active students who are NEITHER suspended NOR have dropped out of school.</p>
                </div>

            </div>
        </section>
    );
};

export default LogicalOperators;