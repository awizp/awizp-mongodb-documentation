const DeleteOne = () => {
    return (
        <section className="w-full py-10">
            <div className="custom-container space-y-5">
                <div className="w-full">
                    <h2 className="mb-5 text-green-800 font-semibold text-2xl">deleteOne()</h2>

                    <p className="pl-5 mb-2">This function used to delete one record from the collection.</p>

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
    db.students.deleteOne({
        name: "Ram"
    })
                `} </code>
                    </pre>

                    <p className="pl-5">This command will automatically delete <span className="text-green-600 font-semibold text-xs">Ram student</span> record from the collection.</p>
                </div>
            </div>
        </section>
    );
};

export default DeleteOne;