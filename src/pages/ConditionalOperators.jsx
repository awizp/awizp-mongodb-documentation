const ConditionalOperators = () => {
    return (
        <section className="w-full py-10">
            <div className="custom-container space-y-5">
                <div className="w-full">
                    <h2 className="mb-5 text-green-800 font-semibold text-2xl">
                        Conditional Operators
                    </h2>
                    <p className="pl-5 mb-2">
                        Conditional operators allow you to evaluate logic, handle fallbacks, and branch values dynamically during pipeline execution.
                    </p>
                    <p className="pl-5 mb-5">
                        Let's imagine we have this <span className="font-semibold text-green-600">students</span> collection:
                    </p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code>{`
    db.students.insertMany([
        { _id: 1, name: "Aarav", marks: 95 },
        { _id: 2, name: "Diya", marks: 82 },
        { _id: 3, name: "Rohan", marks: 67 },
        { _id: 4, name: "Sneha", marks: 45 },
        { _id: 5, name: "Vikram", marks: 30 },
        { _id: 6, name: "Priya", marks: null }
    ]);
        `}</code>
                    </pre>
                </div>

                {/* 1. Basic $cond */}
                <div>
                    <h3 className="mb-5 text-green-800 font-semibold text-xl">
                        1. Basic $cond (If-Else)
                    </h3>
                    <p className="pl-5 mb-5">
                        The <span className="font-semibold text-green-600">$cond</span> operator evaluates a boolean expression and returns the <span className="font-semibold text-green-600">then</span> value if true, or the <span className="font-semibold text-green-600">else</span> value if false.
                    </p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code>{`
    db.students.aggregate([
        {
            $project: {
            name: 1,
            marks: 1,
            result: {
                $cond: { if: { $gte: ["$marks", 40] }, then: "Passed", else: "Failed" }
            }
            }
        }
    ])
        `}</code>
                    </pre>

                    <p className="pl-5 mb-5">
                        Here, any student with marks greater than or equal to 40 gets marked as <span className="text-sm text-green-600 font-semibold">"Passed"</span>, while anyone below 40 (or with null marks) receives <span className="text-sm text-green-600 font-semibold">"Failed"</span>.
                    </p>
                </div>

                {/* 2. Nested $cond */}
                <div>
                    <h3 className="mb-5 text-green-800 font-semibold text-xl">
                        2. Nested $cond Expressions
                    </h3>
                    <p className="pl-5 mb-5">
                        You can nest <span className="font-semibold text-green-600">$cond</span> operators inside the <span className="font-semibold text-green-600">else</span> branch to handle multi-tiered conditional checks.
                    </p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code>{`
    db.students.aggregate([
        {
            $project: {
            name: 1,
            marks: 1,
            performance: {
                $cond: {
                if: { $gte: ["$marks", 90] },
                then: "Excellent",
                else: {
                    $cond: {
                    if: { $gte: ["$marks", 50] },
                    then: "Good",
                    else: "Bad"
                    }
                }
                }
            }
            }
        }
    ])
        `}</code>
                    </pre>

                    <p className="pl-5 mb-5">
                        Here, marks $\ge$ 90 are labeled <span className="text-sm text-green-600 font-semibold">"Excellent"</span>, marks between 50 and 89 are labeled <span className="text-sm text-green-600 font-semibold">"Good"</span>, and all remaining scores fall into <span className="text-sm text-green-600 font-semibold">"Bad"</span>.
                    </p>
                </div>

                {/* 3. $switch */}
                <div>
                    <h3 className="mb-5 text-green-800 font-semibold text-xl">
                        3. Multi-Branch Logic with $switch
                    </h3>
                    <p className="pl-5 mb-5">
                        The <span className="font-semibold text-green-600">$switch</span> operator provides a cleaner alternative to deeply nested <span className="font-semibold text-green-600">$cond</span> statements by evaluating an array of case branches sequentially.
                    </p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code>{`
    db.students.aggregate([
        {
            $project: {
            name: 1,
            marks: 1,
            grade: {
                $switch: {
                branches: [
                    { case: { $gte: ["$marks", 90] }, then: "A" },
                    { case: { $gte: ["$marks", 75] }, then: "B" },
                    { case: { $gte: ["$marks", 50] }, then: "C" }
                ],
                default: "Fail"
                }
            }
            }
        }
    ])
        `}</code>
                    </pre>

                    <p className="pl-5 mb-5">
                        Here, MongoDB evaluates each branch in order and assigns the matching grade (<span className="text-sm text-green-600 font-semibold">A</span>, <span className="text-sm text-green-600 font-semibold">B</span>, or <span className="text-sm text-green-600 font-semibold">C</span>). If no condition is met, it falls back to the <span className="text-sm text-green-600 font-semibold">default: "Fail"</span> value.
                    </p>
                </div>

                {/* 4. Basic $ifNull */}
                <div className="w-full pt-5">
                    <h3 className="mb-5 text-green-800 font-semibold text-xl">
                        4. Fallback Values with $ifNull
                    </h3>
                    <p className="pl-5 mb-5">
                        The <span className="font-semibold text-green-600">$ifNull</span> operator returns a fallback replacement value whenever a target expression evaluates to <span className="font-semibold text-green-600">null</span> or is completely undefined/missing.
                    </p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code>{`
    // Dataset
    db.users.insertMany([
        { _id: 1, name: "Rahul", email: "rahul@gmail.com" },
        { _id: 2, name: "Ananya" },
        { _id: 3, name: "Manoj", email: null },
        { _id: 4, name: "Kavya", email: "kavya@mail.com" }
    ]);

    // Aggregation
    db.users.aggregate([
        {
            $project: {
            name: 1,
            email: { $ifNull: ["$email", "no-email@domain.in"] }
            }
        }
    ]);
        `}</code>
                    </pre>

                    <p className="pl-5 mb-5">
                        Here, users with an undefined email field (Ananya) or a null email value (Manoj) have their email field automatically replaced with <span className="text-sm text-green-600 font-semibold">"no-email@domain.in"</span>.
                    </p>
                </div>

                {/* 5. Nested $ifNull for Prioritized Fallbacks */}
                <div>
                    <h3 className="mb-5 text-green-800 font-semibold text-xl">
                        5. Prioritized Fallbacks with Nested $ifNull
                    </h3>
                    <p className="pl-5 mb-5">
                        You can chain multiple <span className="font-semibold text-green-600">$ifNull</span> operators together to build a prioritized fallback chain across several candidate fields.
                    </p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code>{`
    // Dataset
    db.contacts.insertMany([
        { name: "Arjun", mobile: "9876543210", phone: null, email: "arjun@gmail.com" },
        { name: "Meera", phone: "022-2345678" },
        { name: "Kiran", email: "kiran@yahoo.com" },
        { name: "Lakshmi" }
    ]);

    // Aggregation
    db.contacts.aggregate([
        {
            $project: {
            name: 1,
            primaryContact: {
                $ifNull: [
                "$mobile",
                {
                    $ifNull: [
                    "$phone",
                    { $ifNull: ["$email", "No Contact Available"] }
                    ]
                }
                ]
            }
            }
        }
    ]);
        `}</code>
                    </pre>

                    <p className="pl-5 mb-5">
                        Here, <span className="text-sm text-green-600 font-semibold">primaryContact</span> checks for <span className="font-semibold text-green-600">mobile</span> first. If unavailable, it checks for landline <span className="font-semibold text-green-600">phone</span>, then falls back to <span className="font-semibold text-green-600">email</span>, and finally assigns <span className="text-sm text-green-600 font-semibold">"No Contact Available"</span> if no contact detail exists.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ConditionalOperators;