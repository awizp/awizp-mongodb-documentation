const Operators = () => {
    return (
        <section className="w-full py-10">
            <div className="custom-container space-y-5">
                <div className="w-full">
                    <h2 className="mb-5 text-green-800 font-semibold text-2xl">Basic Operators</h2>

                    <p className="pl-5">In MongoDB, we have some operators to assign values in fields of collection.</p>
                </div>

                {/* $set operator */}
                <div>
                    <h3 className="mb-5 text-green-800 font-semibold">1. $set</h3>

                    <p className="pl-5 mb-5">This operator used to assign updated values in collection. It is also used to set new fileds in document.</p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code> {`
    db.students.updateOne(
        {name:"Ram"},
        {$set:{marks:80, isPassed: true}}
    )
                            `} </code>
                    </pre>

                    <p className="pl-5 mb-5">Here, <span className="text-sm text-green-600 font-semibold">isPassed</span> field is new to document and can insert into that by this operator.</p>
                </div>

                {/* $inc operator */}
                <div>
                    <h3 className="mb-5 text-green-800 font-semibold">2. $inc</h3>

                    <p className="pl-5 mb-5">This operator used to increase amount of value by giving some values to that.</p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code> {`
    db.students.updateOne(
        {name:"Ram"},
        {$inc:{marks:5}}
    )
                            `} </code>
                    </pre>

                    <p className="pl-5 mb-5">Here, Ram marks increased by 5 points by this operator.</p>
                </div>

                {/* $unset operator */}
                <div>
                    <h3 className="mb-5 text-green-800 font-semibold">3. $unset</h3>

                    <p className="pl-5 mb-5">If you want to remove entire field from the document means you can use this operator.</p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code> {`
    db.students.updateOne(
        {"name.first":"Ram"},
        {$unset:{"address.pincode":""}}
    )
                            `} </code>
                    </pre>

                    <p className="pl-5 mb-5">Here, Ram's address object pincode field entirely removed.</p>
                </div>

                {/* $mul operator */}
                <div>
                    <h3 className="mb-5 text-green-800 font-semibold">4. $mul</h3>

                    <p className="pl-5 mb-5">If you want to multiply the value of a field by a specific number, you can use this operator.</p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code> {`
    db.products.updateOne(
        { "item": "Notebook" },
        { $mul: { "price": 1.10 } }
    )
                            `} </code>
                    </pre>

                    <p className="pl-5 mb-5">Here, the Notebook's price field value is multiplied by 1.10, increasing it by 10%.</p>
                </div>

                {/* $min operator */}
                <div>
                    <h3 className="mb-5 text-green-800 font-semibold">5. $min</h3>

                    <p className="pl-5 mb-5">This operator updates the field value to a specified value only if the specified value is less than the current field value.</p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code> {`
    db.scores.updateOne(
        { "name": "Ram" },
        { $min: { "lowScore": 50 } }
    )
                            `} </code>
                    </pre>

                    <p className="pl-5 mb-5">Here, Ram's lowScore field will update to 50 only if his current score is greater than 50.</p>
                </div>

                {/* $max operator */}
                <div>
                    <h3 className="mb-5 text-green-800 font-semibold">6. $max</h3>

                    <p className="pl-5 mb-5">This operator updates the field value to a specified value only if the specified value is greater than the current field value.</p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code> {`
    db.scores.updateOne(
        { "name": "Ram" },
        { $max: { "highScore": 95 } }
    )
                            `} </code>
                    </pre>

                    <p className="pl-5 mb-5">Here, Ram's highScore field will update to 95 only if his current score is less than 95.</p>
                </div>

                {/* $exists operator */}
                <div>
                    <h3 className="mb-5 text-green-800 font-semibold">7. $exists</h3>

                    <p className="pl-5 mb-5">This operator matches documents that contain the specified field, even if the field value is null.</p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code> {`
    db.students.find({
        "extracurricular": { $exists: true }
    })
                            `} </code>
                    </pre>

                    <p className="pl-5 mb-5">Here, the query returns only the students who have an extracurricular field present in their document layout.</p>
                </div>

                {/* $type operator */}
                <div>
                    <h3 className="mb-5 text-green-800 font-semibold">8. $type</h3>

                    <p className="pl-5 mb-5">This operator selects documents where the data type of the field matches the specified BSON type helper identifier.</p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code> {`
    db.students.find({
        "phone": { $type: "string" }
    })
                            `} </code>
                    </pre>

                    <p className="pl-5 mb-5">Here, the query returns students whose phone field is saved as a plain text string instead of a numerical value.</p>
                </div>

                {/* $regex operator */}
                <div>
                    <h3 className="mb-5 text-green-800 font-semibold">9. $regex</h3>

                    <p className="pl-5 mb-5">This operator provides regular expression capabilities for pattern matching strings in queries.</p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code> {`
    db.students.find({
        "name.first": { $regex: "^Ra", $options: "i" }
    })
                            `} </code>
                    </pre>

                    <p className="pl-5 mb-5">Here, the query returns students whose first name starts with "Ra" (like Ram or Rahul), ignoring case sensitivity by options.</p>
                </div>

                {/* $expr operator */}
                <div>
                    <h3 className="mb-5 text-green-800 font-semibold">10. $expr</h3>

                    <p className="pl-5 mb-5">This operator allows you to use aggregation expressions within the regular query language, useful for comparing two fields in the same document.</p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code> {`
    db.students.find({
        $expr: { $gt: [ "$examScore", "$quizScore" ] }
    })
                            `} </code>
                    </pre>

                    <p className="pl-5 mb-5">Here, the query returns students whose examScore value is strictly greater than their own quizScore value.</p>
                </div>

            </div>
        </section>
    );
};

export default Operators;