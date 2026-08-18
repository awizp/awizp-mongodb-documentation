const AggregateThree = () => {
    return (
        <section className="w-full py-10">
            <div className="custom-container space-y-5">
                <div className="w-full">
                    <h2 className="mb-5 text-green-800 font-semibold text-2xl">Aggregate | Stage 3</h2>

                    <p className="pl-5">In stage 3, we can use <span className="text-green-600 font-semibold">three level of queries</span> to filter the data from our collection</p>
                </div>

                <div className="w-full">
                    <p className="pl-5">Let's imagine we have these MongoDb collections</p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code> {`
    [
        { "_id": 1, "name": "Arjun Reddy", "age": 15, "class": "10th" },
        { "_id": 2, "name": "Sai Kumar", "age": 16, "class": "11th" },
        { "_id": 3, "name": "Vishnu Nair", "age": 17, "class": "11th" },
        { "_id": 4, "name": "Karthik Raj", "age": 18, "class": "12th" },
        { "_id": 5, "name": "Anjali Menon", "age": 16, "class": "11th" },
        { "_id": 6, "name": "Ravi Shankar", "age": 14, "class": "10th" },
        { "_id": 7, "name": "Priya Varghese", "age": 15, "class": "10th" },
        { "_id": 8, "name": "Siddharth Rao", "age": 17, "class": "11th" },
        { "_id": 9, "name": "Lakshmi Suresh", "age": 16, "class": "11th" },
        { "_id": 10, "name": "Vignesh Pillai", "age": 18, "class": "12th" },
        { "_id": 11, "name": "Meena Iyer", "age": 15, "class": "10th" },
        { "_id": 12, "name": "Naveen Kumar", "age": 16, "class": "11th" },
        { "_id": 13, "name": "Shalini Nambiar", "age": 17, "class": "11th" },
        { "_id": 14, "name": "Ramesh Goud", "age": 18, "class": "12th" },
        { "_id": 15, "name": "Divya Krishna", "age": 14, "class": "10th" },
        { "_id": 16, "name": "Srinivas Rao", "age": 16, "class": "11th" },
        { "_id": 17, "name": "Aishwarya Nair", "age": 15, "class": "10th" },
        { "_id": 18, "name": "Mohan Raju", "age": 17, "class": "11th" },
        { "_id": 19, "name": "Kavya Shetty", "age": 16, "class": "11th" },
        { "_id": 20, "name": "Aditya Menon", "age": 18, "class": "12th" }
    ]
                            `} </code>
                    </pre>
                </div>

                <div className="w-full">
                    <h3 className="mb-5 text-green-800 font-semibold">Projection</h3>

                    <p className="pl-5">Stage 3 has <span className="text-green-600 font-semibold">$project</span> operator to use projection.</p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code> {`
    b.users.aggregate([
        { $match: { 
            $and: [
                { age: { $gt: 15 }},
                { "class": "11th" }
            ]}},
        { $sort: { age: -1 }},
        { $project: { name: 1, class: 1, age: 1, _id: 0 }}
])
                            `} </code>
                    </pre>
                </div>

                <div className="w-full">
                    <h3 className="mb-5 text-green-800 font-semibold">Custom Field</h3>

                    <p className="pl-5">We can use <span className="text-green-600 font-semibold">$project</span> operator to create custom field if filter condition satisfied.</p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code> {`
    db.users.aggregate([
        { $match: { 
            $and: [
                { age: { $gt: 15 }},
                { "class": "11th" }
            ]}},
        { $sort: { age: -1 }},
        { $project: { name: 1, class: 1, age: 1, _id: 0, isEligible: { $gt: [ "$age", 17 ] }}}
    ])
                            `} </code>
                    </pre>

                    <p className="pl-5">Here, if the user age is greater than 15 and in class 11, the new field <span className="text-green-600 font-semibold">isEligible</span> added to all documents by projection.</p>
                </div>

            </div>
        </section>
    );
};

export default AggregateThree;