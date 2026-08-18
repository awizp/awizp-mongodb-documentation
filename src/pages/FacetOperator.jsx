const FacetOperator = () => {
    return (
        <section className="w-full py-10">
            <div className="custom-container space-y-5">
                <div className="w-full">
                    <h2 className="mb-5 text-green-800 font-semibold text-2xl">
                        Multi Faceted Aggregation with $facet
                    </h2>
                    <p className="pl-5 mb-2">
                        The <span className="font-semibold text-green-600">$facet</span> stage allows you to execute multiple aggregation sub-pipelines within a single stage on the same set of input documents.
                    </p>
                    <p className="pl-5 mb-5">
                        Let's imagine we have this <span className="font-semibold text-green-600">sales</span> collection:
                    </p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code>{`
    [
      { _id: 1, product: 'Mobile', price: 100, quantity: 10, region: 'North' },
      { _id: 2, product: 'Laptop', price: 200, quantity: 5, region: 'South' },
      { _id: 3, product: 'Mobile', price: 100, quantity: 15, region: 'North' },
      { _id: 4, product: 'Tablet', price: 50, quantity: 20, region: 'East' },
      { _id: 5, product: 'Desktop', price: 125, quantity: 10, region: 'South' },
      { _id: 6, product: 'Laptop', price: 200, quantity: 10, region: 'West' }
    ]
        `}</code>
                    </pre>
                </div>

                {/* without $facet */}
                <div>
                    <h3 className="mb-5 text-green-800 font-semibold text-xl">
                        Separate Pipelines (Without $facet)
                    </h3>
                    <p className="pl-5 mb-5">
                        Without <span className="font-semibold text-green-600">$facet</span>, calculating different metrics (like top-selling products vs. total revenue) requires sending multiple independent queries to the database.
                    </p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code>{`
    // Query 1: Top 3 selling products
    db.sales.aggregate([
      {
        $group: {
          _id: "$product",
          totalSales: { $sum: { $multiply: ["$price", "$quantity"] } }
        }
      },
      { $sort: { totalSales: -1 } },
      { $limit: 3 }
    ]);

    // Query 2: Overall total revenue
    db.sales.aggregate([
      {
        $group: {
          _id: null,
          totalRevenue: { $sum: { $multiply: ["$price", "$quantity"] } }
        }
      }
    ]);
        `}</code>
                    </pre>

                    <p className="pl-5 mb-5">
                        Here, MongoDB has to scan and process the <span className="text-sm text-green-600 font-semibold">sales</span> collection separately for each aggregation call.
                    </p>
                </div>

                {/* with $facet */}
                <div>
                    <h3 className="mb-5 text-green-800 font-semibold text-xl">
                        Combining Multiple Pipelines with $facet
                    </h3>
                    <p className="pl-5 mb-5">
                        The <span className="font-semibold text-green-600">$facet</span> stage processes multiple parallel sub-pipelines in one query and outputs a single document containing an array of results for each facet.
                    </p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code>{`
    db.sales.aggregate([
      {
        $facet: {
          // Sub-pipeline 1: Top 3 products by sales
          topProducts: [
            {
              $group: {
                _id: "$product",
                totalSales: { $sum: { $multiply: ["$price", "$quantity"] } }
              }
            },
            { $sort: { totalSales: -1 } },
            { $limit: 3 }
          ],
          // Sub-pipeline 2: Overall revenue
          totalRevenue: [
            {
              $group: {
                _id: null,
                totalRevenue: { $sum: { $multiply: ["$price", "$quantity"] } }
              }
            }
          ],
          // Sub-pipeline 3: Order count by region
          salesByRegion: [
            {
              $group: {
                _id: "$region",
                count: { $sum: 1 }
              }
            },
            { $sort: { count: -1 } }
          ]
        }
      }
    ]);
        `}</code>
                    </pre>

                    <p className="pl-5 mb-5">
                        Here, all three analytical operations <span className="text-sm text-green-600 font-semibold">topProducts</span>, <span className="text-sm text-green-600 font-semibold">totalRevenue</span>, and <span className="text-sm text-green-600 font-semibold">salesByRegion</span> run concurrently across the collection in a single round-trip database query.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default FacetOperator;