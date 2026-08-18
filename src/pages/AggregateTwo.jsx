const AggregateTwo = () => {
    return (
        <section className="w-full py-10">
            <div className="custom-container space-y-5">
                <div className="w-full">
                    <h2 className="mb-5 text-green-800 font-semibold text-2xl">Aggregate | Stage 2</h2>

                    <p className="pl-5">In stage 2, we can use <span className="text-green-600 font-semibold">two level of queries</span> to filter the data from our collection</p>
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
                    <h3 className="mb-5 text-green-800 font-semibold">Count</h3>

                    <p className="pl-5">Second level filter using <span className="text-green-600 font-semibold">$count</span> operator.</p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code> {`
    db.users.aggregate([
        { $match: { age: {$gt: 16 }}},
        { $count: "names" }
    ])
                            `} </code>
                    </pre>

                    <p className="pl-5">Here, <span className="text-green-600 font-semibold">$count</span> operator used to give new field called <span className="text-green-600 font-semibold">names</span> to show counted numbers in collection.</p>
                </div>

                <div className="w-full">
                    <h3 className="mb-5 text-green-800 font-semibold">Sort</h3>

                    <p className="pl-5">Second level filter using <span className="text-green-600 font-semibold">$sort</span> operator.</p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code> {`
    db.users.aggregate([
        { $match: { age: { $gt: 15 }}},
        { $sort: { age :-1}}
    ])


    db.users.aggregate([
        { $match: { 
          $and:[
              { age: { $gt: 15 }},
              { "class": "11th" }
          ]}},
        { $sort: {age: -1}}
    ])
                            `} </code>
                    </pre>
                </div>

            </div>
        </section>
    );
};

export default AggregateTwo;