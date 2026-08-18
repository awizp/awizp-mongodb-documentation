const StringOperators = () => {
    return (
        <section className="w-full py-10">
            <div className="custom-container space-y-5">
                <div className="w-full">
                    <h2 className="mb-5 text-green-800 font-semibold text-2xl">
                        String Aggregation Operators
                    </h2>
                    <p className="pl-5 mb-2">
                        String expression operators transform, parse, format, and search through text data within aggregation pipeline stages.
                    </p>
                    <p className="pl-5 mb-5">
                        Let's imagine we have this <span className="font-semibold text-green-600">actors</span> collection:
                    </p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code>{`
db.actors.insertMany([
  { _id: 1, name: 'Arun Kumar', dob: 'jan 10 2010', age: 25, city: "Salem" },
  { _id: 2, name: 'Vijay Sethupathi', dob: '2010-02-03', age: 22, city: "Chennai" },
  { _id: 3, name: 'Nithya Menen', dob: 'june 15 2010', age: 35, city: "Coimbatore" },
  { _id: 4, name: 'Dulquer Salmaan', dob: 'WED jan 31 12:05:28 +03:30 2010', age: 27, city: "Banglore" },
  { _id: 5, name: 'Keerthy Suresh', dob: 'dec 22 2010', age: 36, city: "Salem" },
  { _id: 6, name: " Test " },
  { _id: 7, name: "தமிழ்" }
]);
        `}</code>
                    </pre>
                </div>

                {/* 1. Case, Length & Substrings */}
                <div>
                    <h3 className="mb-5 text-green-800 font-semibold text-xl">
                        1. Case Conversion, Length & Substrings
                    </h3>
                    <p className="pl-5 mb-5">
                        Basic text operations allow converting case, measuring character/byte length, case-insensitive comparison, and extracting substrings.
                    </p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code>{`
db.actors.aggregate([
  {
    $project: {
      name: 1,
      uppercase: { $toUpper: "$name" },
      lowercase: { $toLower: "$name" },
      lengthInBytes: { $strLenBytes: "$name" },
      lengthInCodePoint: { $strLenCP: "$name" },
      compareCase: { $strcasecmp: ["$name", "arun kumar"] },
      substring: { $substrBytes: ["$name", 0, 4] },
      substringCP: { $substrCP: ["$name", 0, 4] }
    }
  }
])
        `}</code>
                    </pre>

                    <p className="pl-5 mb-5">
                        Here:
                    </p>
                    <ul className="list-disc list-inside pl-10 mb-5 space-y-1">
                        <li><span className="text-sm text-green-600 font-semibold">$toUpper / $toLower</span> converts strings to all-uppercase or all-lowercase.</li>
                        <li><span className="text-sm text-green-600 font-semibold">$strLenBytes / $strLenCP</span> measures length in raw UTF-8 bytes versus UTF-8 code points (characters). For multi-byte strings like <span className="font-semibold text-green-600">"தமிழ்"</span>, bytes and code points will differ.</li>
                        <li><span className="text-sm text-green-600 font-semibold">$strcasecmp</span> performs case-insensitive comparison, returning <span className="font-semibold text-green-600">0</span> if strings match, <span className="font-semibold text-green-600">-1</span> if the first is less, and <span className="font-semibold text-green-600">1</span> if greater.</li>
                        <li><span className="text-sm text-green-600 font-semibold">$substrBytes / $substrCP</span> extracts a substring starting from index 0 with a length of 4 units.</li>
                    </ul>
                </div>

                {/* 2. $replaceOne & $replaceAll */}
                <div>
                    <h3 className="mb-5 text-green-800 font-semibold text-xl">
                        2. $replaceOne & $replaceAll
                    </h3>
                    <p className="pl-5 mb-5">
                        These operators replace occurrences of a search string within an input text.
                    </p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code>{`
// 1. replaceOne: replaces only the first matching occurrence
db.actors.aggregate([
  {
    $project: {
      updatedString: {
        $replaceOne: {
          input: "My name is Kumar and his name is Kumar",
          find: "Kumar",
          replacement: "Prakesh"
        }
      }
    }
  }
]);

// 2. replaceAll: replaces every matching occurrence
db.actors.aggregate([
  {
    $project: {
      updatedString: {
        $replaceAll: {
          input: "My name is Kumar and his name is Kumar",
          find: "Kumar",
          replacement: "Prakesh"
        }
      }
    }
  }
]);
        `}</code>
                    </pre>

                    <p className="pl-5 mb-5">
                        Here, <span className="text-sm text-green-600 font-semibold">$replaceOne</span> updates only the first instance of "Kumar" to "Prakesh", while <span className="text-sm text-green-600 font-semibold">$replaceAll</span> updates both instances across the full string.
                    </p>
                </div>

                {/* 3. $split, $concat & $toString */}
                <div>
                    <h3 className="mb-5 text-green-800 font-semibold text-xl">
                        3. $split, $concat & $toString
                    </h3>
                    <p className="pl-5 mb-5">
                        These operators split strings into arrays, join multiple strings together, and cast other data types into string representations.
                    </p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code>{`
db.actors.aggregate([
  {
    $project: {
      name: 1,
      fullname: { $split: ["$name", " "] },
      concat: { $concat: ["$name", " - ", "$city"] }
    }
  }
]);

db.actors.aggregate([
  {
    $project: {
      age: 1,
      stringField: { $toString: "$age" }
    }
  }
]);
        `}</code>
                    </pre>

                    <p className="pl-5 mb-5">
                        Here, <span className="text-sm text-green-600 font-semibold">$split</span> breaks "Arun Kumar" into an array <span className="text-sm text-green-600 font-semibold">["Arun", "Kumar"]</span>, <span className="text-sm text-green-600 font-semibold">$concat</span> joins the actor's name and city with a delimiter, and <span className="text-sm text-green-600 font-semibold">$toString</span> converts the numeric age into a string.
                    </p>
                </div>

                {/* 4. Trimming Operators */}
                <div>
                    <h3 className="mb-5 text-green-800 font-semibold text-xl">
                        4. Trimming with $ltrim, $rtrim & $trim
                    </h3>
                    <p className="pl-5 mb-5">
                        These operators remove whitespace or specified characters from the beginning, end, or both ends of a string.
                    </p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code>{`
db.actors.aggregate([
  {
    $project: {
      name: 1,
      ltrim: { $ltrim: { input: "$name", chars: " " } },
      rtrim: { $rtrim: { input: "$name", chars: " " } },
      trim: { $trim: { input: "$name", chars: " " } }
    }
  }
])
        `}</code>
                    </pre>

                    <p className="pl-5 mb-5">
                        Here, for document <span className="text-sm text-green-600 font-semibold">" Test "</span>: <span className="text-sm text-green-600 font-semibold">$ltrim</span> removes leading spaces ("Test "), <span className="text-sm text-green-600 font-semibold">$rtrim</span> removes trailing spaces (" Test"), and <span className="text-sm text-green-600 font-semibold">$trim</span> strips spaces from both ends ("Test").
                    </p>
                </div>

                {/* 5. $dateFromString */}
                <div>
                    <h3 className="mb-5 text-green-800 font-semibold text-xl">
                        5. Parsing Dates with $dateFromString
                    </h3>
                    <p className="pl-5 mb-5">
                        The <span className="font-semibold text-green-600">$dateFromString</span> operator converts a date/time string into a true MongoDB ISODate object.
                    </p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code>{`
db.actors.aggregate([
  {
    $project: {
      dob: 1,
      dateString: { $dateFromString: { dateString: "$dob" } }
    }
  }
])
        `}</code>
                    </pre>

                    <p className="pl-5 mb-5">
                        Here, standard date strings like <span className="text-sm text-green-600 font-semibold">"2010-02-03"</span> or RFC-style formatted strings are parsed into queryable BSON Date objects.
                    </p>
                </div>

                {/* 6. Regular Expressions ($regexMatch, $regexFind, $regexFindAll) */}
                <div>
                    <h3 className="mb-5 text-green-800 font-semibold text-xl">
                        6. Regular Expressions: $regexMatch, $regexFind & $regexFindAll
                    </h3>
                    <p className="pl-5 mb-5">
                        These operators provide pattern matching capabilities directly within aggregation expressions.
                    </p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code>{`
// Matching and finding first match
db.actors.aggregate([
  {
    $project: {
      name: 1,
      isMatch: { $regexMatch: { input: "$name", regex: "^A" } },
      isEndMatch: { $regexMatch: { input: "$name", regex: "n$" } },
      isMatchFind: { $regexFind: { input: "$name", regex: "Arun" } }
    }
  }
]);

// Finding all pattern matches
db.actors.aggregate([
  {
    $project: {
      name: 1,
      isMatchFind: { $regexFindAll: { input: "$name", regex: "a" } }
    }
  }
]);
        `}</code>
                    </pre>

                    <p className="pl-5 mb-5">
                        Here:
                    </p>
                    <ul className="list-disc list-inside pl-10 mb-5 space-y-1">
                        <li><span className="text-sm text-green-600 font-semibold">$regexMatch</span> returns a boolean (<span className="font-semibold text-green-600">true</span> or <span className="font-semibold text-green-600">false</span>) indicating whether the pattern was found.</li>
                        <li><span className="text-sm text-green-600 font-semibold">$regexFind</span> returns an object with match details (match string, index, captures) for the first occurrence.</li>
                        <li><span className="text-sm text-green-600 font-semibold">$regexFindAll</span> returns an array of objects for every occurrence of the matched pattern.</li>
                    </ul>
                </div>

                {/* 7. $indexOfBytes & $indexOfCP */}
                <div>
                    <h3 className="mb-5 text-green-800 font-semibold text-xl">
                        7. Finding Substring Positions: $indexOfBytes & $indexOfCP
                    </h3>
                    <p className="pl-5 mb-5">
                        These operators search a string for an occurrence of a substring and return the 0-based index of the first occurrence. Optional parameters specify the start and end search boundaries.
                    </p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code>{`
db.actors.aggregate([
  {
    $project: {
      name: 1,
      index_1: { $indexOfBytes: ["$name", "a"] },
      index_2: { $indexOfBytes: ["$name", "a", 4] }, // starts search from index 4
      index_3: { $indexOfBytes: ["$name", "a", 4, 8] }, // search within index range 4 to 8
      index_4: { $indexOfCP: ["$name", "a"] }
    }
  }
])
        `}</code>
                    </pre>

                    <p className="pl-5 mb-5">
                        Here, searching "Arun Kumar":
                    </p>
                    <ul className="list-disc list-inside pl-10 mb-5 space-y-1">
                        <li><span className="text-sm text-green-600 font-semibold">index_1</span> finds the first "a" in "Kumar" at index position 8.</li>
                        <li><span className="text-sm text-green-600 font-semibold">index_2</span> starts looking at index 4 (skipping "Arun"), finding "a" at index 8.</li>
                        <li><span className="text-sm text-green-600 font-semibold">index_3</span> limits the search to indices 4 through 8. If not found within that window, it returns <span className="font-semibold text-green-600">-1</span>.</li>
                        <li><span className="text-sm text-green-600 font-semibold">$indexOfCP</span> returns character index position rather than raw byte position.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default StringOperators;