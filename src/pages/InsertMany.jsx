const InsertMany = () => {
    return (
        <section className="w-full py-10">
            <div className="custom-container space-y-5">
                <div className="w-full">
                    <h2 className="mb-5 text-green-800 font-semibold text-2xl">insertMany()</h2>

                    <p className="pl-5">This command used to insert many document fields to the particular collection.</p>
                </div>

                <div className="w-full">
                    <h3 className="mb-5 text-green-800 font-semibold">Command</h3>

                    <div className="code-block">
                        <p>db.{`<collection name>`}.insertMany{`([`}</p>
                        <p className="pl-5">{`{`}</p>
                        <p className="pl-10">field1 : "value",</p>
                        <p className="pl-10">field2 : "value",</p>
                        <p className="pl-5">{`},`}</p>
                        <p className="pl-5">{`{`}</p>
                        <p className="pl-10">field1 : "value",</p>
                        <p className="pl-10">field2 : "value",</p>
                        <p className="pl-5">{`}`}</p>
                        <p>{`])`}</p>
                    </div>
                </div>

                <div className="w-full">
                    <h3 className="mb-5 text-green-800 font-semibold">Example</h3>

                    <p className="pl-5">This command used to insert the document fields to users collection.</p>

                    <div className="code-block">
                        <p>db.users.insertMany{`([`}</p>
                        <p className="pl-5">{`{`}</p>
                        <p className="pl-10">name : "Ram",</p>
                        <p className="pl-10">age : 23,</p>
                        <p className="pl-5">{`},`}</p>
                        <p className="pl-5">{`{`}</p>
                        <p className="pl-10">name : "Sam",</p>
                        <p className="pl-10">age : 25,</p>
                        <p className="pl-5">{`}`}</p>
                        <p>{`])`}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InsertMany;