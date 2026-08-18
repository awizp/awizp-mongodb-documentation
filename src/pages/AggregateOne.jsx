const AggregateOne = () => {
    return (
        <section className="w-full py-10">
            <div className="custom-container space-y-5">
                <div className="w-full">
                    <h2 className="mb-5 text-green-800 font-semibold text-2xl">Aggregate</h2>

                    <p className="pl-5 mb-2">Aggregate methods are used to multilevel filteration in our database to get precise data.</p>
                    <p className="pl-5 mb-2">Aggregate method has <span className='font-semibold text-green-600'>three level of stages</span> to get a document,</p>

                    <ul className='list-disc list-inside pl-10'>
                        <li>Stage 1</li>
                        <li>Stage 2</li>
                        <li>Stage 3</li>
                    </ul>
                </div>

                <div className="w-full">
                    <h2 className="mb-5 text-green-800 font-semibold text-2xl">Aggregate | Stage 1</h2>

                    <p className="pl-5">In stage 1 only one level of filteration used to get documents based on that.</p>
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
                    <h3 className="mb-5 text-green-800 font-semibold">Example</h3>

                    <p className="pl-5">We can extract data with these methods. <span className="text-green-600 font-semibold">$match</span> operator is destined to get those matched field documents from the collection.</p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code> {`
    /* get class 11th students */

    db.users.aggregate([
        { $match: { "class": "11th" }}
    ])

    /* get age 16 students */

    db.users.aggregate([
      { $match: {"age": 16}}
    ])

    /* get class 11th and above 16 aged students */

    db.users.aggregate([
      { $match: {
        $and: [
          { age: { $gt: 16} },
          { "class": "11th"}
        ]
      }}
    ])
                            `} </code>
                    </pre>

                    <p className="pl-5">We can assign this stages like how much query objects we are giving in aggregate method</p>
                </div>

                <div className="w-full">
                    <h3 className="mb-5 text-green-800 font-semibold">Sort By Count</h3>

                    <p className="pl-5">We can use <span className="text-green-600 font-semibold">$sortByCount</span> operator to sort by some fields and count how many documents in that group.</p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code> {`
    db.users.aggregate([
        { $sortByCount: "$class" }
    ])
                            `} </code>
                    </pre>

                    <p className="pl-5">Here, by this operator documents sorted by class field and how many documents grouped by this sorting will be updated.</p>
                </div>

                <div className="w-full">
                    <h3 className="mb-5 text-green-800 font-semibold">Skip and Limit</h3>

                    <p className="pl-5">We can use <span className="text-green-600 font-semibold">$skip and $limit</span> operators to skip documents by count and limit how many documents to show by following.</p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code> {`
    db.users.aggregate([
        { $match: { age: { $gt: 1 }}},
        { $skip: 0 },
        { $limit: 5 }
    ])
                            `} </code>
                    </pre>

                    <p className="pl-5">Here, using these operators to create pagination easy in client documents.</p>
                </div>

                <div className="w-full">
                    <h3 className="mb-5 text-green-800 font-semibold">Sample</h3>

                    <p className="pl-5">We can use <span className="text-green-600 font-semibold">$sample</span> operator to get random documents and can get how many documents in there by giving the size.</p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code> {`
    db.users.aggregate( [{ $sample: { size: 2 } }] )
                            `} </code>
                    </pre>

                    <p className="pl-5">Here, randomly get two students by this operator.</p>
                </div>

            </div>
        </section>
    );
};

export default AggregateOne;