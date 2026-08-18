const DeleteMany = () => {
    return (
        <section className="w-full py-10">
            <div className="custom-container space-y-5">
                <div className="w-full">
                    <h2 className="mb-5 text-green-800 font-semibold text-2xl">deleteMany()</h2>

                    <p className="pl-5 mb-2">If we want to delete many records has the same field values means this command comes in handy.</p>

                    <p className="pl-5">Imagine we have this collections,</p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code> {`
    [
        { name: "Arun", subjects: ["React", "MongoDb", "Javascript"] },
        { name: "Divya", subjects: ["HTML", "CSS"] },
        { name: "Rahul", subjects: ["React", "Javascript"] },
        { name: "Kavya", subjects: ["MongoDb", "Node.js"] },
        { name: "Ram", subjects: ["Node.js", "Javascript"] }
    ]
                `} </code>
                    </pre>
                </div>

                <div className="w-full">
                    <h3 className="mb-5 text-green-800 font-semibold">Command</h3>

                    <pre className="code-block mb-5 custom-scroll">
                        <code> {`
    db.students.deleteMany({
        subjects: { $in: ["Node.js"] }
    })
                `} </code>
                    </pre>

                    <p className="pl-5">This command will delete <span className="text-green-600 font-semibold text-xs">Node.js</span> subjects contained records from the collection.</p>
                </div>
            </div>
        </section>
    );
};

export default DeleteMany;