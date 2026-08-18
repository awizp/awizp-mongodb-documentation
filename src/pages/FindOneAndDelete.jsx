const FindOneAndDelete = () => {
    return (
        <section className="w-full py-10">
            <div className="custom-container space-y-5">
                <div className="w-full">
                    <h2 className="mb-5 text-green-800 font-semibold text-2xl">findOneAndDelete()</h2>

                    <p className="pl-5">This command used to find and delete a document in our collection.</p>
                </div>

                <div className="w-full">
                    <h3 className="mb-5 text-green-800 font-semibold">Syntax</h3>

                    <pre className="code-block mb-5 custom-scroll">
                        <code> {`
    db.collection.findOneAndDelete(
        <filter>, /* Query to match a document */
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

                    <p className="pl-5">We have to find fourth id and delete that.</p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code> {`
    db.students.findOneAndDelete( { _id: 4 } )
                            `} </code>
                    </pre>
                </div>

            </div>
        </section>
    );
};

export default FindOneAndDelete;