const LookupOperators = () => {
    return (
        <section className="w-full py-10">
            <div className="custom-container space-y-5">
                <div className="w-full">
                    <h2 className="mb-5 text-green-800 font-semibold text-2xl">
                        $lookup Operator
                    </h2>
                    <p className="pl-5 mb-2">
                        The <span className="font-semibold text-green-600">$lookup</span> stage performs a left outer join to an unsharded collection in the same database to filter in documents from the "joined" collection for processing.
                    </p>
                    <p className="pl-5 mb-5">
                        Let's imagine we have these MongoDB collections: <span className="font-semibold text-green-600">students</span>, <span className="font-semibold text-green-600">library</span>, and <span className="font-semibold text-green-600">authors</span>.
                    </p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code>{`
    // 1. Students Collection
    [
      { _id: 1, name: "Rakesh", class: "BCA" },
      { _id: 2, name: "Sundar", class: "BTech" },
      { _id: 3, name: "Sara", class: "Bsc" },
      { _id: 4, name: "Tiya", class: "BCA" }
    ]

    // 2. Library Collection
    [
      { _id: 1, book: "Let Us C", student_id: 1, author_id: 101 },
      { _id: 2, book: "Java Programming", student_id: 3, author_id: 102 },
      { _id: 3, book: "C++ Guide", student_id: 4, author_id: 101 },
      { _id: 4, book: "Head First in C#", student_id: 1, author_id: 103 },
      { _id: 5, book: "Python The Monster", student_id: 3, author_id: 102 },
      { _id: 6, book: "JavaScript DSA", student_id: 1, author_id: 103 }
    ]

    // 3. Authors Collection
    [
      { _id: 101, author_name: "Yashavant Kanetkar" },
      { _id: 102, author_name: "Herbert Schildt" },
      { _id: 103, author_name: "Kyle Simpson" }
    ]
        `}</code>
                    </pre>
                </div>

                {/* $lookup */}
                <div>
                    <h3 className="mb-5 text-green-800 font-semibold text-xl">
                        1. $lookup Join
                    </h3>
                    <p className="pl-5 mb-5">
                        This query performs a left outer join between <span className="font-semibold text-green-600">students</span> and <span className="font-semibold text-green-600">library</span> where <span className="font-semibold text-green-600">students._id</span> matches <span className="font-semibold text-green-600">library.student_id</span>.
                    </p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code>{`
    db.students.aggregate([
      {
        $lookup: {
          from: "library",
          localField: "_id",
          foreignField: "student_id",
          as: "books"
        }
      }
    ])
        `}</code>
                    </pre>

                    <p className="pl-5 mb-5">
                        Here, each student document receives a new field named <span className="text-sm text-green-600 font-semibold">books</span>, which contains an array of all matching book records borrowed by that student.
                    </p>
                </div>

                {/* $lookup with $unwind */}
                <div>
                    <h3 className="mb-5 text-green-800 font-semibold text-xl">
                        2. Combining $lookup with $unwind
                    </h3>
                    <p className="pl-5 mb-5">
                        The <span className="font-semibold text-green-600">$unwind</span> stage deconstructs an array field from the input documents to output a document for each element in the array.
                    </p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code>{`
    db.students.aggregate([
      {
        $lookup: {
          from: "library",
          localField: "_id",
          foreignField: "student_id",
          as: "books"
        }
      },
      {
        $unwind: "$books"
      }
    ])
        `}</code>
                    </pre>

                    <p className="pl-5 mb-5">
                        Here, each student document is duplicated for every individual book in their <span className="text-sm text-green-600 font-semibold">books</span> array, turning array items into separate flat documents. <span className="font-medium text-amber-700">Note:</span> Students who haven't borrowed any books (like Sundar, _id: 2) will be completely excluded from the output because their array is empty.
                    </p>
                </div>

                {/* $unwind with preserveNullAndEmptyArrays */}
                <div>
                    <h3 className="mb-5 text-green-800 font-semibold text-xl">
                        3. $unwind with preserveNullAndEmptyArrays
                    </h3>
                    <p className="pl-5 mb-5">
                        To retain documents that have missing, null, or empty arrays during an <span className="font-semibold text-green-600">$unwind</span> stage, set <span className="font-semibold text-green-600">preserveNullAndEmptyArrays: true</span>.
                    </p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code>{`
    db.students.aggregate([
      {
        $lookup: {
          from: "library",
          localField: "_id",
          foreignField: "student_id",
          as: "books"
        }
      },
      {
        $unwind: {
          path: "$books",
          preserveNullAndEmptyArrays: true
        }
      }
    ])
        `}</code>
                    </pre>

                    <p className="pl-5 mb-5">
                        Here, student records without any matched books in the library (e.g., Sundar) are still preserved in the final output, with their <span className="text-sm text-green-600 font-semibold">books</span> field evaluating to null or omitted.
                    </p>
                </div>

                {/* multiple $lookup stages */}
                <div>
                    <h3 className="mb-5 text-green-800 font-semibold text-xl">
                        4. Chaining Multiple $lookup Stages
                    </h3>
                    <p className="pl-5 mb-5">
                        You can chain multiple <span className="font-semibold text-green-600">$lookup</span> stages to join documents across three or more collections. Here we first join <span className="font-semibold text-green-600">students</span> to <span className="font-semibold text-green-600">library</span>, unwind the array, and then perform a second lookup to pull in details from <span className="font-semibold text-green-600">authors</span>.
                    </p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code>{`
    db.students.aggregate([
      {
        $lookup: {
          from: "library",
          localField: "_id",
          foreignField: "student_id",
          as: "books"
        }
      },
      {
        $unwind: {
          path: "$books",
          preserveNullAndEmptyArrays: true
        }
      },
      {
        $lookup: {
          from: "authors",
          localField: "books.author_id",
          foreignField: "_id",
          as: "author_details"
        }
      }
    ])
        `}</code>
                    </pre>

                    <p className="pl-5 mb-5">
                        Here, the first <span className="text-sm text-green-600 font-semibold">$lookup</span> retrieves borrowed books, the <span className="text-sm text-green-600 font-semibold">$unwind</span> flattens each book into its own record while preserving students with zero books, and the second <span className="text-sm text-green-600 font-semibold">$lookup</span> joins each book's <span className="text-sm text-green-600 font-semibold">author_id</span> to the <span className="text-sm text-green-600 font-semibold">authors</span> collection to attach author details.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default LookupOperators;