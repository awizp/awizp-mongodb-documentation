const ComparisonOperators = () => {
    return (
        <section className="w-full py-10">
            <div className="custom-container space-y-5">
                <div className="w-full">
                    <h2 className="mb-5 text-green-800 font-semibold text-2xl">Comparison Operators</h2>

                    <p className="pl-5">These are used to compare values in between all same fields and get particular values.</p>
                </div>

                {/* $gt operator */}
                <div>
                    <h3 className="mb-5 text-green-800 font-semibold">1. $gt</h3>

                    <p className="pl-5 mb-5">This operator selects documents where the value of the field is greater than the specified value.</p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code> {`
    db.students.find({
        "marks": { $gt: 80 }
    })
                            `} </code>
                    </pre>

                    <p className="pl-5 mb-5">Here, the query returns all students who scored strictly more than 80 marks (excluding exactly 80).</p>
                </div>

                {/* $gte operator */}
                <div>
                    <h3 className="mb-5 text-green-800 font-semibold">2. $gte</h3>

                    <p className="pl-5 mb-5">This operator selects documents where the value of the field is greater than or equal to the specified value.</p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code> {`
    db.students.find({
        "marks": { $gte: 80 }
    })
                            `} </code>
                    </pre>

                    <p className="pl-5 mb-5">Here, the query returns all students who scored 80 marks or higher (including exactly 80).</p>
                </div>

                {/* $lt operator */}
                <div>
                    <h3 className="mb-5 text-green-800 font-semibold">3. $lt</h3>

                    <p className="pl-5 mb-5">This operator selects documents where the value of the field is less than the specified value.</p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code> {`
    db.students.find({
        "attendance": { $lt: 75 }
    })
                            `} </code>
                    </pre>

                    <p className="pl-5 mb-5">Here, the query returns all students whose attendance is strictly less than 75 percent.</p>
                </div>

                {/* $lte operator */}
                <div>
                    <h3 className="mb-5 text-green-800 font-semibold">4. $lte</h3>

                    <p className="pl-5 mb-5">This operator selects documents where the value of the field is less than or equal to the specified value.</p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code> {`
    db.students.find({
        "attendance": { $lte: 75 }
    })
                            `} </code>
                    </pre>

                    <p className="pl-5 mb-5">Here, the query returns all students whose attendance is 75 percent or lower (including exactly 75).</p>
                </div>

                {/* $eq operator */}
                <div>
                    <h3 className="mb-5 text-green-800 font-semibold">5. $eq</h3>

                    <p className="pl-5 mb-5">This operator matches documents where the value of a field equals the specified value exactly.</p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code> {`
    db.students.find({
        "grade": { $eq: "A" }
    })
                            `} </code>
                    </pre>

                    <p className="pl-5 mb-5">Here, the query returns all students whose grade field matches the letter "A" exactly.</p>
                </div>

                {/* $ne operator */}
                <div>
                    <h3 className="mb-5 text-green-800 font-semibold">6. $ne</h3>

                    <p className="pl-5 mb-5">This operator matches documents where the value of the field is not equal to the specified value, including documents that do not contain the field.</p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code> {`
    db.students.find({
        "status": { $ne: "Dropped" }
    })
                            `} </code>
                    </pre>

                    <p className="pl-5 mb-5">Here, the query returns all students whose status is anything other than "Dropped".</p>
                </div>

            </div>
        </section>
    );
};

export default ComparisonOperators;