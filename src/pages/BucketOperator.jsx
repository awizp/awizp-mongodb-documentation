const BucketOperator = () => {
    return (
        <section className="w-full py-10">
            <div className="custom-container space-y-5">
                <div className="w-full">
                    <h2 className="mb-5 text-green-800 font-semibold text-2xl">
                        Bucket Operators
                    </h2>
                    <p className="pl-5 mb-2">
                        Bucket operators categorize incoming documents into groups, called buckets, based on specified boundaries or automatically determined ranges.
                    </p>
                    <p className="pl-5 mb-5">
                        Let's imagine we have this <span className="font-semibold text-green-600">products</span> collection:
                    </p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code>{`
    [
      { name: "Pen", price: 5 },
      { name: "Notebook", price: 20 },
      { name: "Bag", price: 50 },
      { name: "Laptop", price: 1000 },
      { name: "Mouse", price: 25 },
      { name: "Keyboard", price: 80 },
      { name: "Headphones", price: 150 }
    ]
        `}</code>
                    </pre>
                </div>

                {/* 1. $bucket Operator */}
                <div>
                    <h3 className="mb-5 text-green-800 font-semibold text-xl">
                        1. $bucket
                    </h3>
                    <p className="pl-5 mb-5">
                        The <span className="font-semibold text-green-600">$bucket</span> operator categorizes incoming documents into specific groups based on custom user-defined boundary ranges.
                    </p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code>{`
    db.products.aggregate([
      {
        $bucket: {
          groupBy: "$price",
          boundaries: [10, 50, 200, Infinity], 
          default: "Other",
          output: {
            count: { $sum: 1 }
          }  
        }
      }
    ])
        `}</code>
                    </pre>

                    <p className="pl-5 mb-5">
                        Here, documents are evaluated by <span className="text-sm text-green-600 font-semibold">groupBy: "$price"</span> into discrete ranges: <span className="text-sm text-green-600 font-semibold">[10, 50)</span>, <span className="text-sm text-green-600 font-semibold">[50, 200)</span>, and <span className="text-sm text-green-600 font-semibold">[200, Infinity)</span>. Any product priced below 10 (like Pen at $5) falls into the <span className="text-sm text-green-600 font-semibold">default: "Other"</span> bucket.
                    </p>
                </div>

                {/* 2. $bucketAuto Operator */}
                <div>
                    <h3 className="mb-5 text-green-800 font-semibold text-xl">
                        2. $bucketAuto
                    </h3>
                    <p className="pl-5 mb-5">
                        The <span className="font-semibold text-green-600">$bucketAuto</span> operator automatically calculates dynamic boundary ranges to evenly distribute documents into a specified number of buckets.
                    </p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code>{`
    db.products.aggregate([
      {
        $bucketAuto: {
          groupBy: "$price",
          buckets: 3,
          output: {
            count: { $sum: 1 }
          }  
        }
      }
    ])
        `}</code>
                    </pre>

                    <p className="pl-5 mb-5">
                        Here, setting <span className="text-sm text-green-600 font-semibold">buckets: 3</span> directs MongoDB to inspect the range of product prices and automatically compute balanced min/max boundaries across 3 generated buckets.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default BucketOperator;