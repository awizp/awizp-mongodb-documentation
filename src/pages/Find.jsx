const Find = () => {
    return (
        <section className="w-full py-10">
            <div className="custom-container space-y-5">
                <div className="w-full">
                    <h2 className="mb-5 text-green-800 font-semibold text-2xl">find()</h2>

                    <p className="pl-5">This command used to get all document fields from the collection</p>
                </div>

                <div className="w-full">
                    <h3 className="mb-5 text-green-800 font-semibold">Command</h3>

                    <div className="code-block">
                        <p>db.{`<collection name>`}.find{`()`}</p>
                    </div>
                </div>

                <div className="w-full">
                    <h3 className="mb-5 text-green-800 font-semibold">Example</h3>

                    <p className="pl-5">This command <span className="text-green-600 font-semibold text-sm">db.users.find()</span> used to get all users from the collection itself.</p>

                    <div className="code-block">
                        <p>db.users.find{`()`}</p>
                    </div>
                </div>

                <div className="w-full">
                    <p className="pl-5">Let's imagine we have these MongoDb collections</p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code> {`
    [
        { name: "Arun Kumar", age: 18, city: "Chennai", gender: "Male" },
        { name: "Divya Lakshmi", age: 19, city: "Coimbatore", gender: "Female" },
        { name: "Praveen Raj", age: 20, city: "Madurai", gender: "Male" },
        { name: "Sneha Ramesh", age: 21, city: "Trichy", gender: "Female" },
        { name: "Vignesh", age: 18, city: "Salem", gender: "Male" },
        { name: "Meena Kumari", age: 19, city: "Tirunelveli", gender: "Female" },
        { name: "Kiran Kumar", age: 20, city: "Bangalore", gender: "Male" },
        { name: "Anjali Nair", age: 18, city: "Kochi", gender: "Female" },
        { name: "Rahul Krishna", age: 21, city: "Thiruvananthapuram", gender: "Male" },
        { name: "Lakshmi Priya", age: 19, city: "Kozhikode", gender: "Female" },
        { name: "Santosh Babu", age: 18, city: "Hyderabad", gender: "Male" },
        { name: "Harini", age: 20, city: "Warangal", gender: "Female" },
        { name: "Ravi Teja", age: 21, city: "Vijayawada", gender: "Male" },
        { name: "Sowmya", age: 18, city: "Visakhapatnam", gender: "Female" },
        { name: "Ajith Kumar", age: 19, city: "Mysore", gender: "Male" },
        { name: "Kavya", age: 20, city: "Hubli", gender: "Female" },
        { name: "Manoj", age: 21, city: "Nellore", gender: "Male" },
        { name: "Revathi", age: 18, city: "Erode", gender: "Female" },
        { name: "Suresh", age: 20, city: "Tuticorin", gender: "Male" },
        { name: "Keerthana", age: 19, city: "Kurnool", gender: "Female" }
    ]
                            `} </code>
                    </pre>
                </div>

                <div className="w-full">
                    <h3 className="mb-5 text-green-800 font-semibold">Projection</h3>

                    <p className="pl-5">We have <span className="text-green-600 font-semibold text-sm">projection</span> to get only what records we want.</p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code> {`
    db.students.find({},{name:1,age:1,_id:0})
    db.students.find({}).projection({name:1,age:1,_id:0})
                            `} </code>
                    </pre>
                </div>

                <div className="w-full">
                    <h3 className="mb-5 text-green-800 font-semibold">Limit</h3>

                    <p className="pl-5">Limit is used to get only limited count records in collection.</p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code> {`
    db.students.find({},{name:1,age:1,_id:0}).limit(5)
                            `} </code>
                    </pre>
                </div>

                <div className="w-full">
                    <h3 className="mb-5 text-green-800 font-semibold">Skip</h3>

                    <p className="pl-5">Skip is used to skip those records with mentioned counts.</p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code> {`
    db.students.find({},{name:1,age:1,_id:0}).limit(5).skip(5)
                            `} </code>
                    </pre>
                </div>

                <div className="w-full">
                    <h3 className="mb-5 text-green-800 font-semibold">Sort</h3>

                    <p className="pl-5">Sort is used to organize the records by some field name.</p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code> {`
    db.students.find({},{name:1,age:1,_id:0}).sort({age:1})
                            `} </code>
                    </pre>

                    <p className="pl-5">Use <span className="text-green-700 font-semibold text-sm">-1</span> for descending order.</p>
                </div>

            </div>
        </section>
    );
};

export default Find;