const TypeOperators = () => {
    return (
        <section className="w-full py-10">
            <div className="custom-container space-y-5">
                <div className="w-full">
                    <h2 className="mb-5 text-green-800 font-semibold text-2xl">
                        Type Conversion & Checking Operators
                    </h2>
                    <p className="pl-5 mb-2">
                        Type operators allow you to cast values between BSON data types, handle type conversion errors safely with fallbacks, inspect BSON type names, and verify if values are numeric.
                    </p>
                    <p className="pl-5 mb-5">
                        Let's imagine we have this <span className="font-semibold text-green-600">students</span> collection:
                    </p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code>{`
    db.students.insertMany([
        {
            name: "Arun",
            age: 22,
            yoe: "oo",
            pincode: "636007",
            score: "85.5",
            active: "true",
            joinDate: "2025-01-01",
            idStr: "671a3b6f5f9a8a5a6f1e45c2"
        }
    ]);
        `}</code>
                    </pre>
                </div>

                {/* 1. $toString */}
                <div>
                    <h3 className="mb-5 text-green-800 font-semibold text-xl">
                        1. Converting to String with $toString
                    </h3>
                    <p className="pl-5 mb-5">
                        The <span className="font-semibold text-green-600">$toString</span> operator converts a target value (such as a number, boolean, ObjectId, or date) into its string equivalent.
                    </p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code>{`
    db.students.aggregate([
        {
            $project: {
            name: 1,
            age: 1,
            ageStr: { $toString: "$age" }
            }
        }
    ])
        `}</code>
                    </pre>

                    <p className="pl-5 mb-5">
                        Here, numeric <span className="text-sm text-green-600 font-semibold">age: 22</span> is converted to the string <span className="text-sm text-green-600 font-semibold">"22"</span>.
                    </p>
                </div>

                {/* 2. $toInt & $toLong */}
                <div>
                    <h3 className="mb-5 text-green-800 font-semibold text-xl">
                        2. Converting to Integer and Long: $toInt & $toLong
                    </h3>
                    <p className="pl-5 mb-5">
                        <span className="font-semibold text-green-600">$toInt</span> converts values to a 32-bit integer, while <span className="font-semibold text-green-600">$toLong</span> converts values to a 64-bit integer.
                    </p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code>{`
    db.students.aggregate([
        {
            $project: {
            name: 1,
            pincode: 1,
            pinInt: { $toInt: "$pincode" },
            pinLong: { $toLong: "$pincode" }
            }
        }
    ])
        `}</code>
                    </pre>

                    <p className="pl-5 mb-5">
                        Here, the string pincode <span className="text-sm text-green-600 font-semibold">"636007"</span> is cast into standard numeric integer and 64-bit long integer representations.
                    </p>
                </div>

                {/* 3. $toDouble & $toDecimal */}
                <div>
                    <h3 className="mb-5 text-green-800 font-semibold text-xl">
                        3. Converting to Floating-Point: $toDouble & $toDecimal
                    </h3>
                    <p className="pl-5 mb-5">
                        <span className="font-semibold text-green-600">$toDouble</span> converts a value to a 64-bit IEEE floating-point number, whereas <span className="font-semibold text-green-600">$toDecimal</span> converts to a high-precision 128-bit decimal (ideal for monetary calculations).
                    </p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code>{`
    db.students.aggregate([
        {
            $project: {
            name: 1,
            score: 1,
            scoreDouble: { $toDouble: "$score" },
            scoreDecimal: { $toDecimal: "$score" }
            }
        }
    ])
        `}</code>
                    </pre>

                    <p className="pl-5 mb-5">
                        Here, the string score <span className="text-sm text-green-600 font-semibold">"85.5"</span> is converted into double precision and exact 128-bit Decimal128 values.
                    </p>
                </div>

                {/* 4. $toBool, $toDate & $toObjectId */}
                <div>
                    <h3 className="mb-5 text-green-800 font-semibold text-xl">
                        4. Converting to Boolean, Date & ObjectId: $toBool, $toDate & $toObjectId
                    </h3>
                    <p className="pl-5 mb-5">
                        These operators cast strings or numbers into native BSON Boolean, Date, and 24-character hex ObjectId types.
                    </p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code>{`
    db.students.aggregate([
        {
            $project: {
            name: 1,
            active: 1,
            activeBool: { $toBool: "$active" },
            joinDate: 1,
            dateType: { $toDate: "$joinDate" },
            idStr: 1,
            newId: { $toObjectId: "$idStr" }
            }
        }
    ])
        `}</code>
                    </pre>

                    <p className="pl-5 mb-5">
                        Here:
                    </p>
                    <ul className="list-disc list-inside pl-10 mb-5 space-y-1">
                        <li><span className="text-sm text-green-600 font-semibold">$toBool</span> turns <span className="font-semibold text-green-600">"true"</span> into the boolean literal <span className="font-semibold text-green-600">true</span>.</li>
                        <li><span className="text-sm text-green-600 font-semibold">$toDate</span> converts the string date <span className="font-semibold text-green-600">"2025-01-01"</span> into an ISODate object.</li>
                        <li><span className="text-sm text-green-600 font-semibold">$toObjectId</span> converts the 24-character hexadecimal string into a valid BSON <span className="font-semibold text-green-600">ObjectId</span>.</li>
                    </ul>
                </div>

                {/* 5. $convert with Error Handling */}
                <div>
                    <h3 className="mb-5 text-green-800 font-semibold text-xl">
                        5. Safe Conversions with $convert
                    </h3>
                    <p className="pl-5 mb-5">
                        The <span className="font-semibold text-green-600">$convert</span> operator converts a value to a specified type while offering custom fallbacks for conversion failures (<span className="font-semibold text-green-600">onError</span>) and missing/null fields (<span className="font-semibold text-green-600">onNull</span>).
                    </p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code>{`
    db.students.aggregate([
        {
            $project: {
            name: 1,
            yoe: 1,
            safeYoe: {
                $convert: {
                input: "$yoe",
                to: "int",
                onError: 0,
                onNull: -1
                }
            },
            safePin: {
                $convert: {
                input: "$pincode",
                to: "int",
                onError: 0,
                onNull: -1
                }
            }
            }
        }
    ])
        `}</code>
                    </pre>

                    <p className="pl-5 mb-5">
                        Here, converting non-numeric text <span className="text-sm text-green-600 font-semibold">yoe: "oo"</span> to an integer would ordinarily throw an error and crash the pipeline. With <span className="text-sm text-green-600 font-semibold">onError: 0</span>, it safely resolves to <span className="text-sm text-green-600 font-semibold">0</span>, whereas valid numbers like <span className="text-sm text-green-600 font-semibold">"636007"</span> parse cleanly to <span className="text-sm text-green-600 font-semibold">636007</span>.
                    </p>
                </div>

                {/* 6. $type & $isNumber */}
                <div>
                    <h3 className="mb-5 text-green-800 font-semibold text-xl">
                        6. Type Inspection: $type & $isNumber
                    </h3>
                    <p className="pl-5 mb-5">
                        <span className="font-semibold text-green-600">$type</span> returns the BSON type name of a field as a string, while <span className="font-semibold text-green-600">$isNumber</span> checks whether a field's underlying value is a numeric type (int, long, double, or decimal).
                    </p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code>{`
    db.students.aggregate([
        {
            $project: {
            fieldTypeScore: { $type: "$score" },
            fieldTypeAge: { $type: "$age" },
            isScoreNum: { $isNumber: "$score" },
            isAgeNum: { $isNumber: "$age" }
            }
        }
    ])
        `}</code>
                    </pre>

                    <p className="pl-5 mb-5">
                        Here, <span className="text-sm text-green-600 font-semibold">fieldTypeScore</span> returns <span className="text-sm text-green-600 font-semibold">"string"</span> and <span className="text-sm text-green-600 font-semibold">isScoreNum</span> returns <span className="text-sm text-green-600 font-semibold">false</span> because the score is stored in quotes. Meanwhile, <span className="text-sm text-green-600 font-semibold">fieldTypeAge</span> returns <span className="text-sm text-green-600 font-semibold">"int"</span> and <span className="text-sm text-green-600 font-semibold">isAgeNum</span> returns <span className="text-sm text-green-600 font-semibold">true</span>.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default TypeOperators;