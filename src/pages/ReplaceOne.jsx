const ReplaceOne = () => {
    return (
        <section className="w-full py-10">
            <div className="custom-container space-y-5">
                <div className="w-full">
                    <div className="w-full">
                        <h2 className="mb-5 text-green-800 font-semibold text-2xl">replaceOne()</h2>

                        <p className="pl-5 mb-3">This command used to replace fileds and entire document with other fields.</p>
                        <p className="pl-5 mb-5">Imagine we already we have this students collection.</p>

                        <pre className="code-block mb-5 custom-scroll">
                            <code> {`
    { name: "Ram", age: 18, class: "12A", marks: 75 },
    { name: "Shyam", age: 17, class: "11B", marks: 85 },
    { name: "Radha", age: 18, class: "12A", marks: 92 },
    { name: "Mohan", age: 16, class: "10C", marks: 65 }
                            `} </code>
                        </pre>
                    </div>

                    <div className="w-full">
                        <h3 className="mb-5 text-green-800 font-semibold">Command</h3>

                        <p className="pl-5 mb-5">We can use replace one method to replace<span className="text-green-600 font-semibold text-sm">Ram student</span> document entirely.</p>

                        <pre className="code-block mb-5 custom-scroll">
                            <code> {`
    db.students.replaceOne(
        {name:"Ram"},
        {$set:{name:"Ram Kumar",age:18,class:"11B",marks:95}}
    )
                            `} </code>
                        </pre>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReplaceOne;