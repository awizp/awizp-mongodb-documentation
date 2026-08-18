const DateOperators = () => {
    return (
        <section className="w-full py-10">
            <div className="custom-container space-y-5">
                <div className="w-full">
                    <h2 className="mb-5 text-green-800 font-semibold text-2xl">
                        Date Operators
                    </h2>
                    <p className="pl-5 mb-2">
                        Date operators allow you to extract individual calendar and clock components, perform date arithmetic, decompose and rebuild date parts, format dates into readable strings, and handle ISO calendar standards.
                    </p>
                    <p className="pl-5 mb-5">
                        Let's imagine we have this <span className="font-semibold text-green-600">orders</span> collection:
                    </p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code>{`
    db.orders.insertMany([
        {
            _id: 1,
            customer: "Arun Kumar",
            totalAmount: 1200,
            orderDate: ISODate("2024-01-10T10:30:00Z")
        },
        {
            _id: 2,
            customer: "Priya R",
            totalAmount: 850,
            orderDate: ISODate("2024-03-22T15:45:30Z")
        },
        {
            _id: 3,
            customer: "Vijay S",
            totalAmount: 2000,
            orderDate: ISODate("2024-07-18T07:15:00Z")
        }
    ]);
        `}</code>
                    </pre>
                </div>

                {/* 1. Extracting Date & Time Components */}
                <div>
                    <h3 className="mb-5 text-green-800 font-semibold text-xl">
                        1. Extracting Date & Time Components
                    </h3>
                    <p className="pl-5 mb-5">
                        These operators break down a BSON Date field into individual numerical parts like year, month, day, and time units.
                    </p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code>{`
    db.orders.aggregate([
        {
            $project: {
            customer: 1,
            year: { $year: "$orderDate" },
            month: { $month: "$orderDate" },
            day: { $dayOfMonth: "$orderDate" },
            dayOfWeek: { $dayOfWeek: "$orderDate" }, // Returns 1 (Sunday) through 7 (Saturday)
            weekNumber: { $week: "$orderDate" },
            hour: { $hour: "$orderDate" },
            minute: { $minute: "$orderDate" },
            second: { $second: "$orderDate" },
            millisecond: { $millisecond: "$orderDate" }
            }
        }
    ])
        `}</code>
                    </pre>

                    <p className="pl-5 mb-5">
                        Here:
                    </p>
                    <ul className="list-disc list-inside pl-10 mb-5 space-y-1">
                        <li><span className="text-sm text-green-600 font-semibold">$year, $month, $dayOfMonth</span> extract the calendar year (e.g., 2024), 1-based month (1–12), and day of the month (1–31).</li>
                        <li><span className="text-sm text-green-600 font-semibold">$dayOfWeek</span> returns an integer from 1 to 7, where 1 represents Sunday and 7 represents Saturday.</li>
                        <li><span className="text-sm text-green-600 font-semibold">$week</span> returns the 0-based week number of the year (0–53).</li>
                        <li><span className="text-sm text-green-600 font-semibold">$hour, $minute, $second, $millisecond</span> extract the time units in UTC.</li>
                    </ul>
                </div>

                {/* 2. Date Arithmetic */}
                <div>
                    <h3 className="mb-5 text-green-800 font-semibold text-xl">
                        2. Date Arithmetic: $dateAdd, $dateSubtract & $dateDiff
                    </h3>
                    <p className="pl-5 mb-5">
                        Perform calendar arithmetic by adding/subtracting defined intervals or computing the difference between two timestamps. Units include <span className="font-semibold text-green-600">year</span>, <span className="font-semibold text-green-600">quarter</span>, <span className="font-semibold text-green-600">month</span>, <span className="font-semibold text-green-600">week</span>, <span className="font-semibold text-green-600">day</span>, <span className="font-semibold text-green-600">hour</span>, <span className="font-semibold text-green-600">minute</span>, <span className="font-semibold text-green-600">second</span>, and <span className="font-semibold text-green-600">millisecond</span>.
                    </p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code>{`
    db.orders.aggregate([
        {
            $project: {
            customer: 1,
            orderDate: 1,
            delivery: {
                $dateAdd: { startDate: "$orderDate", unit: "day", amount: 3 }
            },
            subtract: {
                $dateSubtract: { startDate: "$orderDate", unit: "day", amount: 3 }
            },
            dateDifference: {
                $dateDiff: {
                startDate: "$orderDate",
                endDate: ISODate("2025-01-01T00:00:00Z"),
                unit: "day"
                }
            }
            }
        }
    ])
        `}</code>
                    </pre>

                    <p className="pl-5 mb-5">
                        Here, <span className="text-sm text-green-600 font-semibold">delivery</span> calculates an estimated arrival date 3 days into the future, <span className="text-sm text-green-600 font-semibold">subtract</span> steps back 3 days, and <span className="text-sm text-green-600 font-semibold">dateDifference</span> measures the total elapsed days between the order date and New Year 2025.
                    </p>
                </div>

                {/* 3. Rebuilding & Deconstructing Dates */}
                <div>
                    <h3 className="mb-5 text-green-800 font-semibold text-xl">
                        3. Composing and Decomposing Dates: $dateFromParts & $dateToParts
                    </h3>
                    <p className="pl-5 mb-5">
                        <span className="font-semibold text-green-600">$dateFromParts</span> constructs a BSON Date from separate numeric components, while <span className="font-semibold text-green-600">$dateToParts</span> converts an existing date into a structured document of its constituent units. Both support timezone specification.
                    </p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code>{`
    db.orders.aggregate([
        {
            $project: {
            customer: 1,
            createDate: {
                $dateFromParts: {
                year: 2025,
                month: 2,
                day: 7,
                hour: 15,
                minute: 30,
                second: 15,
                millisecond: 253,
                timezone: "Asia/Kolkata"
                }
            },
            constructDate: {
                $dateToParts: {
                date: "$orderDate",
                timezone: "Asia/Kolkata"
                }
            }
            }
        }
    ])
        `}</code>
                    </pre>

                    <p className="pl-5 mb-5">
                        Here, <span className="text-sm text-green-600 font-semibold">createDate</span> builds a concrete ISODate instance adjusted for the Indian Standard Time (IST) offset, and <span className="text-sm text-green-600 font-semibold">constructDate</span> breaks down <span className="text-sm text-green-600 font-semibold">orderDate</span> into a nested document <span className="text-sm text-green-600 font-semibold">&#123; year, month, day, hour, minute, second, millisecond, timezone &#125;</span>.
                    </p>
                </div>

                {/* 4. $dateTrunc */}
                <div>
                    <h3 className="mb-5 text-green-800 font-semibold text-xl">
                        4. Truncating Dates with $dateTrunc
                    </h3>
                    <p className="pl-5 mb-5">
                        The <span className="font-semibold text-green-600">$dateTrunc</span> operator truncates a date to the start of a specified unit (such as year, month, day, or hour).
                    </p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code>{`
    db.orders.aggregate([
        {
            $project: {
            customer: 1,
            orderDate: 1,
            truncate: {
                $dateTrunc: {
                date: "$orderDate",
                unit: "year"
                }
            }
            }
        }
    ])
        `}</code>
                    </pre>

                    <p className="pl-5 mb-5">
                        Here, any date occurring in 2024 is rounded back to the beginning of the year: <span className="text-sm text-green-600 font-semibold">ISODate("2024-01-01T00:00:00Z")</span>.
                    </p>
                </div>

                {/* 5. Formatting & Conversion */}
                <div>
                    <h3 className="mb-5 text-green-800 font-semibold text-xl">
                        5. Formatting & Conversions: $dateToString & $toDate
                    </h3>
                    <p className="pl-5 mb-5">
                        <span className="font-semibold text-green-600">$dateToString</span> converts a Date object into a formatted string according to format specifiers (%Y, %m, %d, %B, etc.), while <span className="font-semibold text-green-600">$toDate</span> converts timestamps (milliseconds) or date strings into actual BSON Date objects.
                    </p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code>{`
    db.orders.aggregate([
        {
            $project: {
            customer: 1,
            orderDate: 1,
            newDate: {
                $dateToString: { date: "$orderDate", format: "%Y-%m-%d" }
            },
            newDate2: {
                $dateToString: { date: "$orderDate", format: "%m %B %Y" }
            },
            millisecondToDate: {
                $toDate: 1740787200000
            },
            stringToDate: {
                $toDate: "2019-04-20"
            }
            }
        }
    ])
        `}</code>
                    </pre>

                    <p className="pl-5 mb-5">
                        Here, <span className="text-sm text-green-600 font-semibold">newDate</span> formats the date as <span className="text-sm text-green-600 font-semibold">"2024-01-10"</span>, <span className="text-sm text-green-600 font-semibold">newDate2</span> renders <span className="text-sm text-green-600 font-semibold">"01 January 2024"</span>, and <span className="text-sm text-green-600 font-semibold">$toDate</span> parses epochs and strings into valid BSON Date instances.
                    </p>
                </div>

                {/* 6. ISO Date Operators */}
                <div>
                    <h3 className="mb-5 text-green-800 font-semibold text-xl">
                        6. ISO 8601 Calendar: $isoDayOfWeek, $isoWeek & $isoWeekYear
                    </h3>
                    <p className="pl-5 mb-5">
                        These operators follow the ISO 8601 standard, where weeks begin on Monday (1) and end on Sunday (7).
                    </p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code>{`
    db.orders.aggregate([
        {
            $project: {
            customer: 1,
            orderDate: 1,
            isoDayOfWeek: { $isoDayOfWeek: "$orderDate" }, // Returns 1 (Monday) through 7 (Sunday)
            isoWeek: { $isoWeek: "$orderDate" },           // Returns ISO week number (1–53)
            isoWeekYear: { $isoWeekYear: "$orderDate" }     // Returns ISO week-numbering year
            }
        }
    ])
        `}</code>
                    </pre>

                    <p className="pl-5 mb-5">
                        Here, <span className="text-sm text-green-600 font-semibold">$isoDayOfWeek</span> returns 1 for Monday through 7 for Sunday (unlike <span className="text-sm text-green-600 font-semibold">$dayOfWeek</span> where Sunday is 1), and <span className="text-sm text-green-600 font-semibold">$isoWeekYear</span> ensures dates falling into the first/last week belonging to another calendar year are attributed to the correct ISO week-year.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default DateOperators;