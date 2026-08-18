const FillOperator = () => {
    return (
        <section className="w-full py-10">
            <div className="custom-container space-y-5">
                <div className="w-full">
                    <h2 className="mb-5 text-green-800 font-semibold text-2xl">
                        Populating Missing Data with $fill
                    </h2>
                    <p className="pl-5 mb-2">
                        The <span className="font-semibold text-green-600">$fill</span> stage populates <span className="font-semibold text-green-600">null</span> and missing field values in documents using either static values, the last observed value, or linear interpolation.
                    </p>
                    <p className="pl-5 mb-5">
                        Let's imagine we have this <span className="font-semibold text-green-600">students</span> collection (notice Arun has a <span className="text-sm font-semibold text-amber-700">null</span> score and Suresh is missing the <span className="text-sm font-semibold text-amber-700">score</span> field completely):
                    </p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code>{`
    [
      { _id: 1, name: "Karthik", score: 87, class: "A", attendance: 91, subject: "Math" },
      { _id: 2, name: "Priya", score: 94, class: "A", attendance: 96, subject: "Science" },
      { _id: 3, name: "Arun", score: null, class: "B", attendance: 86, subject: "Math" },
      { _id: 4, name: "Divya", score: 97, class: "B", attendance: 89, subject: "Science" },
      { _id: 5, name: "Suresh", class: "A", attendance: 93, subject: "Math" },
      { _id: 6, name: "Lakshmi", score: 78, class: "C", attendance: 81, subject: "Science" }
    ]
        `}</code>
                    </pre>
                </div>

                {/* Static Value Fill */}
                <div>
                    <h3 className="mb-5 text-green-800 font-semibold text-xl">
                        1. Fill with a Fixed Value
                    </h3>
                    <p className="pl-5 mb-5">
                        You can replace any null or missing values across target fields with a static constant using <span className="font-semibold text-green-600">value</span>.
                    </p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code>{`
    db.students.aggregate([
      {
        $fill: {
          output: {
            "score": { value: 0 }
          }
        }
      }
    ])
        `}</code>
                    </pre>

                    <p className="pl-5 mb-5">
                        Here, any document where <span className="text-sm text-green-600 font-semibold">score</span> is <span className="text-sm text-green-600 font-semibold">null</span> (Arun) or missing (Suresh) is automatically assigned a default value of <span className="text-sm text-green-600 font-semibold">0</span>.
                    </p>
                </div>

                {/* LOCF (Last Observation Carried Forward) */}
                <div>
                    <h3 className="mb-5 text-green-800 font-semibold text-xl">
                        2. Fill with LOCF (Last Observation Carried Forward)
                    </h3>
                    <p className="pl-5 mb-5">
                        The <span className="font-semibold text-green-600">"locf"</span> method populates null or missing fields by copying the value from the last previous non-null document encountered in the sequence.
                    </p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code>{`
    db.students.aggregate([
      {
        $fill: {
          output: {
            "score": { method: "locf" }
          }
        }
      }
    ])
        `}</code>
                    </pre>

                    <p className="pl-5 mb-5">
                        Here, Arun's null score is populated using Priya's score (<span className="text-sm text-green-600 font-semibold">94</span>), and Suresh's missing score is populated using Divya's score (<span className="text-sm text-green-600 font-semibold">97</span>).
                    </p>
                </div>

                {/* Linear Interpolation */}
                <div>
                    <h3 className="mb-5 text-green-800 font-semibold text-xl">
                        3. Fill with Linear Interpolation
                    </h3>
                    <p className="pl-5 mb-5">
                        The <span className="font-semibold text-green-600">"linear"</span> method estimates missing numerical values by calculating a linear progression between the preceding and succeeding non-null values. A <span className="font-semibold text-green-600">sortBy</span> field is required to define the progression order.
                    </p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code>{`
    db.students.aggregate([
      {
        $fill: {
          sortBy: { _id: 1 },
          output: {
            "score": { method: "linear" }
          }
        }
      }
    ])
        `}</code>
                    </pre>

                    <p className="pl-5 mb-5">
                        Here, documents are ordered by <span className="text-sm text-green-600 font-semibold">_id</span>. Arun's missing score (_id: 3) sits between Priya (_id: 2, score: 94) and Divya (_id: 4, score: 97), so linear interpolation calculates and fills his score as <span className="text-sm text-green-600 font-semibold">95.5</span>. Suresh's missing score (_id: 5) between Divya (97) and Lakshmi (_id: 6, score: 78) is interpolated as <span className="text-sm text-green-600 font-semibold">87.5</span>.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default FillOperator;