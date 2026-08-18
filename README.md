# 🍃 Complete MongoDB Mastery & Interactive Documentation

This repository documents a complete, practical deep-dive into MongoDB executed directly through the MongoDB Shell (mongosh) and the terminal.

---

## 🚀 Overview

This repository contains fully documented, interactive examples designed for developers learning or referencing MongoDB. Built with **React** and **Tailwind CSS**, the UI renders interactive documentation code blocks, practical aggregate queries, real-world schemas, and visual feedback for every command.

---

## 📚 Key Modules Covered

### 1. CRUD & Query Operators
* **Insert / Update / Delete:** `insertOne`, `insertMany`, `updateOne`, `updateMany`, `deleteOne`, `deleteMany`.
* **Field Modifiers:** `$set`, `$unset`, `$inc`, `$mul`, `$min`, `$max`, `$rename`.
* **Comparison & Logical:** `$eq`, `$ne`, `$gt`, `$gte`, `$lt`, `$lte`, `$in`, `$nin`, `$and`, `$or`, `$not`, `$nor`.
* **Element & Evaluation:** `$exists`, `$type`, `$regex`, `$expr`.

### 2. Aggregation Pipeline Stages
* **Pipeline Structure:** `$match`, `$project`, `$addFields`, `$sort`, `$limit`, `$skip`, `$count`.
* **Relational Joins:** `$lookup` (single join, nested joins, multi-collection chained lookups).
* **Deconstruction:** `$unwind` (including `preserveNullAndEmptyArrays`).
* **Bucketing:** `$bucket` (custom boundary definitions) and `$bucketAuto` (dynamic quantile distribution).
* **Multi-Pipeline Analytics:** `$facet` (running multiple sub-pipelines concurrently).
* **Data Imputation:** `$fill` (fixed fallback values, `locf` carry-forward, and linear interpolation).

### 3. Accumulator & Group Operators
* **Grouping & Aggregations:** `$group`, `_id` partitioning, distinct key extraction.
* **Aggregators:** `$sum`, `$count`, `$avg`, `$median`, `$min`, `$max`.
* **Set & Array Accumulation:** `$push`, `$addToSet`, `$$ROOT`.
* **Positional & Windowed Selection:** `$first`, `$last`, `$top`, `$bottom`, `$topN`, `$bottomN`.

### 4. Arithmetic & Precision Operators
* **Basic Math:** `$add`, `$subtract`, `$multiply`, `$divide`, `$mod`, `$abs`, `$pow`, `$sqrt`.
* **Rounding & Precision:** `$floor`, `$ceil`, `$round`, `$trunc`.

### 5. String Expression Operators
* **Case & Length:** `$toUpper`, `$toLower`, `$strLenBytes`, `$strLenCP`, `$strcasecmp`.
* **Extraction & Replacement:** `$substrBytes`, `$substrCP`, `$replaceOne`, `$replaceAll`, `$indexOfBytes`, `$indexOfCP`.
* **Parsing & Formatting:** `$split`, `$concat`, `$trim`, `$ltrim`, `$rtrim`, `$toString`.
* **Pattern Matching:** `$regexMatch`, `$regexFind`, `$regexFindAll`.

### 6. Date & Time Operators (ISO-Compliant)
* **Date Part Extraction:** `$year`, `$month`, `$dayOfMonth`, `$dayOfWeek`, `$week`, `$hour`, `$minute`, `$second`, `$millisecond`.
* **ISO Calendar Support:** `$isoDayOfWeek`, `$isoWeek`, `$isoWeekYear`.
* **Date Math & Ranges:** `$dateAdd`, `$dateSubtract`, `$dateDiff`, `$dateTrunc`.
* **Parsing & Formatting:** `$dateToString`, `$dateFromString`, `$toDate`, `$dateFromParts`, `$dateToParts`.

### 7. Array Manipulation & Functional Pipeline
* **Element Lookup & Subsets:** `$arrayElemAt`, `$firstN`, `$lastN`, `$maxN`, `$minN`, `$slice`.
* **Sorting & Ordering:** `$sortArray`, `$reverseArray`.
* **Inspection & Predicates:** `$size`, `$in`, `$indexOfArray`, `$isArray`.
* **Functional Operators:** 
  * `$map` (item transformation)
  * `$filter` (element filtering)
  * `$reduce` (iterative accumulator folding using `$$this` and `$$value`)
* **Array Transformations:** `$range`, `$concatArrays`, `$zip`, `$arrayToObject`, `$objectToArray`.

### 8. Conditional & Control Flow Operators
* **Branching:** `$cond` (ternary & deeply nested conditional evaluation).
* **Multi-Condition Switches:** `$switch` (case branches with fallback default).
* **Null Safety:** `$ifNull` (fallback chains & `$$REMOVE` cleanup).

### 9. Type Conversion & Checking
* **Casting Expressions:** `$toString`, `$toInt`, `$toLong`, `$toDouble`, `$toDecimal`, `$toBool`, `$toDate`, `$toObjectId`.
* **Safe Error-Handling Conversions:** `$convert` with custom `onError` and `onNull` handling.
* **Inspection:** `$type`, `$isNumber`.

### 10. Capped Collections & Circular Buffers
* **Creation & Limits:** Setting `capped: true`, byte `size`, and `max` document constraints.
* **Natural Order Traversal:** Querying with `sort({ $natural: 1 })` and `sort({ $natural: -1 })`.
* **Runtime Management:** Checking with `isCapped()`, expanding limits with `collMod`, and converting standard collections with `convertToCapped`.

### 11. Indexing, Performance & DB Administration
* **Index Strategies:** Single-field, Compound, Multikey (Arrays), Text, TTL (Time-To-Live), Unique, and Partial indexes.
* **Query Optimization:** Analyzing query plans with `explain("executionStats")`.
* **Backup & Migration:** `mongoexport`, `mongoimport`, `mongodump`, `mongorestore`.

---

## 🛠 Tech Stack

* **Database Engine:** MongoDB 6.0+ / 7.0+
* **Frontend UI:** React 18+
* **Styling & Design System:** Tailwind CSS
* **Icons & Syntax Highlighting:** Custom Code Blocks

---

## ⚡ Project Setup

### Prerequisites
* [Node.js](https://nodejs.org/) (v18.0 or higher)
* [MongoDB Community Server](https://www.mongodb.com/try/download/community) or [MongoDB Atlas](https://www.mongodb.com/atlas)
* [MongoDB Shell (`mongosh`)](https://www.mongodb.com/docs/mongodb-shell/)
