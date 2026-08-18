const UpdateOne = () => {
    return (
        <section className="w-full py-10">
            <div className="custom-container space-y-5">
                <div className="w-full">
                    <div className="w-full">
                        <h2 className="mb-5 text-green-800 font-semibold text-2xl">updateOne()</h2>

                        <p className="pl-5 mb-3">This command specifically used to update one document already in collection.</p>
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

                        <p className="pl-5 mb-5">We can use update method with <span className="text-green-600 font-semibold text-sm">$set</span> opertaor to update marks.</p>

                        <pre className="code-block mb-5 custom-scroll">
                            <code> {`
    db.students.updateOne(
        {name:"Ram"},
        {$set:{marks:80}}
    )
                            `} </code>
                        </pre>
                    </div>

                    <div className="w-full">
                        <h3 className="mb-5 text-green-800 font-semibold text-lg">Upsert</h3>

                        <p className="pl-5 mb-5">If record can't be found in all of documents we can insert new one with <span className="text-green-600 font-semibold text-sm">{`{ upsert : true }`}</span> object.</p>

                        <pre className="code-block mb-5 custom-scroll">
                            <code> {`
    db.students.updateOne(
        {name: "Sita"},
        {$set: {age: 19, class: "11B", marks: 95}},
        {upsert: true}
    )
                            `} </code>
                        </pre>
                    </div>

                    <div className="w-full">
                        <h3 className="mb-5 text-green-800 font-semibold text-lg">Update Nested Objects</h3>

                        <p className="pl-5 mb-2">We can update the nested object keys by notation <span className="text-green-600 font-semibold text-sm">{`{ "obj.key" : "value" }`}</span> like this.</p>

                        <p className="pl-5 mb-5">We can see the example here,</p>

                        <pre className="code-block mb-5 custom-scroll">
                            <code> {`
    {
        name: { first: "Ram", last: "Kumar" },
        class: "12A",
        age: 18,
        address: {
          city: "Chennai",
          pincode: 600001
        }
    },
    {
        name: { first: "Sita", last: "Devi" },
        class: "11B",
        age: 17,
        address: {
          city: "Madurai",
          pincode: 625001
        }
    }
                            `} </code>
                        </pre>

                        <p className="pl-5 mb-5">If we want to update one of the document object like following, now we can change student first name here.</p>

                        <pre className="code-block mb-5 custom-scroll">
                            <code> {`
    db.students.updateOne(
        {"name.first":"Ram"},
        {$set:{"name.first":"Ram kumar"}}
    )
                            `} </code>
                        </pre>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UpdateOne;