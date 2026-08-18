const InsertOne = () => {
    return (
        <section className="w-full py-10">
            <div className="custom-container space-y-5">
                <div className="w-full">
                    <h2 className="mb-5 text-green-800 font-semibold text-2xl">insertOne()</h2>

                    <p className="pl-5">This command specifically used to insert one document to the particular collection.</p>
                </div>

                <div className="w-full">
                    <h3 className="mb-5 text-green-800 font-semibold">Command</h3>

                    <div className="code-block">
                        <p>db.{`<collection name>`}.insertOne{`({`}</p>
                        <p className="pl-5">field1 : "Value",</p>
                        <p className="pl-5">field2 : "Value",</p>
                        <p>{`})`}</p>
                    </div>
                </div>

                <div className="w-full">
                    <h3 className="mb-5 text-green-800 font-semibold">Example</h3>

                    <p className="pl-5">This command <span className="text-green-600 font-semibold text-xs">db.users.insertOne({`{ name: 'Ram', age: 23 }`})</span> used to insert the document to users collection.</p>

                    <div className="code-block">
                        <p>db.users.insertOne{`({`}</p>
                        <p className="pl-5">name : "Ram",</p>
                        <p className="pl-5">age : 23,</p>
                        <p>{`})`}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InsertOne;