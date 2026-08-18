const Validation = () => {
    return (
        <section className="w-full py-10">
            <div className="custom-container space-y-5">
                <div className="w-full">
                    <h2 className="mb-5 text-green-800 font-semibold text-2xl">Validation</h2>

                    <p className="pl-5 mb-2">Before creating any collections in our dbs, validations is must to align our data.</p>
                    <p className="pl-5 mb-2">So we have to assign what type of data we are going to give in our document fields beforehand while creating collections avoid any type of future errors.</p>
                </div>

                {/* string and integers */}
                <div className="w-full">
                    <div className="w-full">
                        <h3 className="mb-5 text-green-800 font-semibold">1. String and Integer</h3>

                        <p className="pl-5 mb-2">While creating our collections we can use <span className="text-green-600 font-semibold text-sm">$jsonSchema</span> to assign data types in our collection.</p>

                        <pre className="code-block mb-5 custom-scroll">
                            <code> {`
    db.createCollection("students", {
        validator: {
            $jsonSchema: {
            required: ["name", "age"],
            title: "Student Record Validation",
            properties: {
                name: {
                    bsonType: "string",
                    description: "Name must be a string and is required",
                },
                age: {
                    bsonType: "int",
                    minimum: 5,
                    maximum: 20,
                    description: "Age must be an integer between 5 and 20",
                },
            },
            },
        },
    });
                            `} </code>
                        </pre>

                        <p className="pl-5 mb-2">Here, if you are giving requires properties you must give <span className="text-green-600 font-semibold text-sm">name and age</span> in your collection.</p>

                    </div>

                    <div className="w-full">
                        <h3 className="mb-5 text-green-800 font-semibold">Collection</h3>

                        <p className="pl-5">Here is the example of we give collection for this required collection</p>

                        <pre className="code-block mb-5">
                            <code> {`
    db.students.insertOne({
        name: 'Ram Kumar',
        age: 24
    });
                            `} </code>
                        </pre>
                    </div>
                </div>

                {/* enums */}
                <div className="w-full mt-10">
                    <div className="w-full">
                        <h3 className="mb-5 text-green-800 font-semibold">2. Enums</h3>

                        <p className="pl-5 mb-2">We can give enums to get only required data for our collections.</p>

                        <pre className="code-block mb-5 custom-scroll">
                            <code> {`
    db.createCollection("students", {
        validator: {
            $jsonSchema: {
            required: ["course"],
            title: "Student Record Validation",
            properties: {
                course: {
                    bsonType: "string",
                    enum: ["C", "C++", "Java", "Python"],
                    description: "Course must be on of the follwing values C, C++, Java, Python",
                },
            },
            },
        },
    });
                            `} </code>
                        </pre>

                        <p className="pl-5 mb-2">Here, if you are giving requires properties you must give <span className="text-green-600 font-semibold text-sm">name and age</span> in your collection.</p>

                    </div>

                    <div className="w-full">
                        <h3 className="mb-5 text-green-800 font-semibold">Collection</h3>

                        <p className="pl-5">Here is the example of we give collection for this required collection</p>

                        <pre className="code-block mb-5">
                            <code> {`
    db.students.insertOne({
        course: 'C++'
    });
                            `} </code>
                        </pre>
                    </div>
                </div>

                {/* object */}
                <div className="w-full mt-10">
                    <div className="w-full">
                        <h3 className="mb-5 text-green-800 font-semibold">3. Object</h3>

                        <p className="pl-5 mb-2">Object types is easy to give like other properties like above.</p>

                        <pre className="code-block mb-5 custom-scroll">
                            <code> {`
    db.runCommand({
        collMod: 'students',
        validator: {
            $jsonSchema: {
            required: ["address"],
            title: "Student Record Validation",
            properties: {
                address: {
                    bsonType: "object",
                    required: ["city", "zip"],
                    properties: {
                      city: {
                        bsonType: "string",
                      },
                      zip: {
                        bsonType: "string",
                        pattern: "^[0-9]{6}$",
                    },
                }
            },
            },
        },
    });
                            `} </code>
                        </pre>

                        <p className="pl-5 mb-2">Here, we are using <span className="text-green-600 text-sm font-semibold">runCommand()</span> to modify already existing collection and we set <span className="text-green-600 text-sm font-semibold">Collection modifier (collMod)</span> to select which collection to modify.</p>

                    </div>

                    <div className="w-full">
                        <h3 className="mb-5 text-green-800 font-semibold">Collection</h3>

                        <p className="pl-5">Here is the example of we give collection for this required collection</p>

                        <pre className="code-block mb-5">
                            <code> {`
    db.students.insertOne({
        address: {
            city: 'chennai',
            zip: '600028'
        }
    });
                            `} </code>
                        </pre>
                    </div>
                </div>

                {/* array */}
                <div className="w-full mt-10">
                    <div className="w-full">
                        <h3 className="mb-5 text-green-800 font-semibold">4. Array</h3>

                        <p className="pl-5 mb-2">Array type of data can give as values and we can assign what type of array can be assigned as well.</p>

                        <pre className="code-block mb-5 custom-scroll">
                            <code> {`
    db.runCommand({
        collMod: 'students',
        validator: {
            $jsonSchema: {
            required: ["skills"],
            title: "Student Record Validation",
            properties: {
                skills: {
                    bsonType: "array",
                    items: {
                      bsonType: "string",
                },
            },
            },
        },
    });
                            `} </code>
                        </pre>

                        <p className="pl-5 mb-2">Here, we are assigned in <span className="text-green-600 text-sm font-semibold">items</span> what type of array can be required in our filed of collection.</p>

                    </div>

                    <div className="w-full">
                        <h3 className="mb-5 text-green-800 font-semibold">Collection</h3>

                        <p className="pl-5">Here is the example of we give collection for this required collection</p>

                        <pre className="code-block mb-5">
                            <code> {`
    db.students.insertOne({
        skils: ['Frontend','Deployment']
    });
                            `} </code>
                        </pre>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Validation;