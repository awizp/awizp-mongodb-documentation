const FindOneAndUpdate = () => {
    return (
        <section className="w-full py-10">
            <div className="custom-container space-y-5">
                <div className="w-full">
                    <h2 className="mb-5 text-green-800 font-semibold text-2xl">findOneAndUpdate()</h2>

                    <p className="pl-5">This command used to get a document and update in database.</p>
                </div>

                <div className="w-full">
                    <h3 className="mb-5 text-green-800 font-semibold">Syntax</h3>

                    <pre className="code-block mb-5 custom-scroll">
                        <code> {`
    db.collection.findOneAndUpdate(
        <filter>, /* Query to match a document */
        <update>, /* Update operation */
        <options> /* Optional settings */
    )
                            `} </code>
                    </pre>
                </div>

                <div className="w-full">
                    <p className="pl-5">Let's imagine we have these MongoDb collections</p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code> {`
    [
        { _id: 1, name: "Aarav Nair", age: 20, grade: "A", subjects: ["Math", "Physics"], gpa: 3.8, lastUpdated: ISODate("2025-01-01"), status: "active", address: { city: "Chennai", state: "Tamil Nadu" } },
        { _id: 2, name: "Bhavana Reddy", age: 19, grade: "B", subjects: ["Chemistry", "Biology"], gpa: 3.2, lastUpdated: ISODate("2025-02-01"), status: "active", address: { city: "Hyderabad", state: "Telangana" } },
        { _id: 3, name: "Chetan Kumar", age: 21, grade: "A", subjects: ["Math", "English"], gpa: 3.9, lastUpdated: ISODate("2025-03-01"), status: "inactive", address: { city: "Bengaluru", state: "Karnataka" } },
        { _id: 4, name: "Deepika Menon", age: 22, grade: "C", subjects: ["History", "Art"], gpa: 2.8, lastUpdated: ISODate("2025-01-15"), status: "active", address: { city: "Kochi", state: "Kerala" } },
        { _id: 5, name: "Eshwar Rao", age: 20, grade: "B", subjects: ["Physics", "Chemistry"], gpa: 3.4, lastUpdated: ISODate("2025-02-15"), status: "active", address: { city: "Visakhapatnam", state: "Andhra Pradesh" } }
    ]
                            `} </code>
                    </pre>
                </div>

                <div className="w-full">
                    <h3 className="mb-5 text-green-800 font-semibold">Example</h3>

                    <p className="pl-5">We have to find first id and update it's grade. Here, <span className="text-green-600 font-semibold">returnDocument</span> is an optional object to get updated document in our collection after updation.</p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code> {`
    db.students.findOneAndUpdate(
        { "_id":1 },
        { 
            $set: { grade:"A" },
            $unset: { age:"" },
            $addToSet: { subjects:"Tamil" }
        },
        { returnDocument: "after" }
    );
                            `} </code>
                    </pre>

                    <p className="pl-5">We can also add multiple update objects in one query.</p>
                </div>

                <div className="w-full">
                    <h3 className="mb-5 text-green-800 font-semibold">upsert</h3>

                    <p className="pl-5">Upsert is used to if the document didn't find in our collection to add new one.</p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code> {`
    db.students.findOneAndUpdate(
        { name: "Magha" },
        { $set: { age: 21,grade: "B" }},
        { upsert: true, returnDocument: "after" }
    )
                            `} </code>
                    </pre>
                </div>

                <div className="w-full">
                    <h3 className="mb-5 text-green-800 font-semibold">Sort</h3>

                    <p className="pl-5">Sort is used to organize the records by some field name.</p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code> {`
    db.students.findOneAndUpdate(
        { "address.state": "Tamil Nadu" },
        { $set: { status:"Good" }},
        { sort: { gpa:-1 }, returnDocument:"after" }
    )
                            `} </code>
                    </pre>

                    <p className="pl-5">Use <span className="text-green-700 font-semibold text-sm">-1</span> for descending order.</p>
                </div>

                <div className="w-full">
                    <h3 className="mb-5 text-green-800 font-semibold">Projection</h3>

                    <p className="pl-5">Projection is an optional one to get only fields what we want in documents of collections</p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code> {`
    db.students.findOneAndUpdate(
        { "address.state": "Tamil Nadu" },
        { $set: { status:"Good" }},
        { sort: { gpa:1 }, returnDocument: "after", projection: { name: 1, gpa: 1 }}
    )
                            `} </code>
                    </pre>
                </div>

            </div>
        </section>
    );
};

export default FindOneAndUpdate;