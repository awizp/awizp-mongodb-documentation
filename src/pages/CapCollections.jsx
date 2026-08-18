const CapCollections = () => {
    return (
        <section className="w-full py-10">
            <div className="custom-container space-y-5">
                <div className="w-full">
                    <h2 className="mb-5 text-green-800 font-semibold text-2xl">
                        Capped Collections
                    </h2>
                    <p className="pl-5 mb-2">
                        A <span className="font-semibold text-green-600">capped collection</span> is a fixed-size collection that guarantees insertion order and automatically overwrites the oldest documents once it reaches its allocated size or document count limit (like a circular FIFO buffer).
                    </p>

                    {/* Key Features */}
                    <h3 className="text-lg font-semibold text-green-800 pl-5 mt-4 mb-2">
                        Key Features:
                    </h3>
                    <ul className="list-disc list-inside pl-10 mb-5 space-y-1">
                        <li><span className="font-semibold text-green-600">Fixed Size:</span> Configured with a maximum capacity in bytes. Oldest records are automatically dropped when full.</li>
                        <li><span className="font-semibold text-green-600">Insertion Order:</span> Documents are saved in natural insertion order, allowing fast retrieval without requiring extra indexes.</li>
                        <li><span className="font-semibold text-green-600">High Throughput:</span> Optimized for high-volume write and sequential read speeds.</li>
                        <li><span className="font-semibold text-green-600">No Individual Deletions:</span> Single documents cannot be deleted with <span className="font-semibold text-green-600">deleteOne()</span> or <span className="font-semibold text-green-600">deleteMany()</span>—only the whole collection can be dropped.</li>
                    </ul>

                    {/* Common Use Cases */}
                    <h3 className="text-lg font-semibold text-green-800 pl-5 mt-4 mb-2">
                        Common Use Cases:
                    </h3>
                    <ul className="list-disc list-inside pl-10 mb-5 space-y-1">
                        <li>Application activity and server logging</li>
                        <li>Real-time telemetry and monitoring systems</li>
                        <li>Event streaming and message queues</li>
                        <li>Sensor / IoT time-series data buffering</li>
                        <li>Temporary caching buffers</li>
                    </ul>
                </div>

                {/* 1. Creating a Capped Collection */}
                <div>
                    <h3 className="mb-5 text-green-800 font-semibold text-xl">
                        1. Creating a Capped Collection
                    </h3>
                    <p className="pl-5 mb-5">
                        Use <span className="font-semibold text-green-600">db.createCollection()</span> with <span className="font-semibold text-green-600">capped: true</span>, a required <span className="font-semibold text-green-600">size</span> (in bytes), and an optional <span className="font-semibold text-green-600">max</span> document limit.
                    </p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code>{`
    db.createCollection("logs", {
        capped: true,
        size: 1024, // maximum size in bytes (required)
        max: 3      // maximum document limit (optional)
    });

    // Insert initial 3 documents
    db.logs.insertMany([
        { level: "info", message: "Server started" },
        { level: "warn", message: "High memory usage" },
        { level: "error", message: "Connection lost" }
    ]);

    // Inserting a 4th document overwrites the oldest record ("Server started")
    db.logs.insertOne({ level: "info", message: "Server Reconnected" });
        `}</code>
                    </pre>

                    <p className="pl-5 mb-5">
                        Here, because <span className="text-sm text-green-600 font-semibold">max: 3</span> is set, adding the 4th log document automatically drops the oldest document (<span className="text-sm text-green-600 font-semibold">"Server started"</span>) to keep the total count at 3.
                    </p>
                </div>

                {/* 2. Verification & Sorting */}
                <div>
                    <h3 className="mb-5 text-green-800 font-semibold text-xl">
                        2. Inspecting and Querying Natural Order
                    </h3>
                    <p className="pl-5 mb-5">
                        Check if a collection is capped using <span className="font-semibold text-green-600">isCapped()</span>, or sort by <span className="font-semibold text-green-600">$natural</span> order to read records based on their exact physical disk insertion order.
                    </p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code>{`
    // 1. Check if a collection is capped (returns true/false)
    db.logs.isCapped();

    // 2. Query in natural insertion order (optimal for capped collections)
    db.logs.find().sort({ $natural: 1 });  // Ascending (oldest first)
    db.logs.find().sort({ $natural: -1 }); // Descending (newest first)

    // 3. Sorting by standard fields or _id
    db.logs.find().sort({ _id: 1 });
    db.logs.find().sort({ _id: -1 });
    db.logs.find().sort({ time: 1 });
    db.logs.find().sort({ time: -1 });
        `}</code>
                    </pre>

                    <p className="pl-5 mb-5">
                        Here, using <span className="text-sm text-green-600 font-semibold">&#123; $natural: -1 &#125;</span> returns the newest logs first with minimal query overhead, without needing an index on timestamp or <span className="text-sm text-green-600 font-semibold">_id</span>.
                    </p>
                </div>

                {/* 3. Modifying Capped Collection Limits */}
                <div>
                    <h3 className="mb-5 text-green-800 font-semibold text-xl">
                        3. Modifying Limits with collMod
                    </h3>
                    <p className="pl-5 mb-5">
                        You can increase the size (<span className="font-semibold text-green-600">cappedSize</span>) or max document count (<span className="font-semibold text-green-600">cappedMax</span>) of an existing capped collection using the <span className="font-semibold text-green-600">collMod</span> command.
                    </p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code>{`
    db.runCommand({
        collMod: "logs",
        cappedSize: 20480, // increase size to 20 KB
        cappedMax: 5       // increase max document limit to 5
    });

    // Now you can insert additional documents within the expanded threshold
    db.logs.insertOne({ level: "error", message: "Server ShutDown" });
        `}</code>
                    </pre>

                    <p className="pl-5 mb-5">
                        Here, <span className="text-sm text-green-600 font-semibold">collMod</span> raises the limit from 3 to 5 documents, allowing new records without immediately overwriting the oldest entries.
                    </p>
                </div>

                {/* 4. Converting an Existing Collection */}
                <div>
                    <h3 className="mb-5 text-green-800 font-semibold text-xl">
                        4. Converting an Existing Collection to Capped
                    </h3>
                    <p className="pl-5 mb-5">
                        To turn an existing standard collection into a capped collection, use the <span className="font-semibold text-green-600">convertToCapped</span> command.
                    </p>

                    <pre className="code-block mb-5 custom-scroll">
                        <code>{`
    // Standard collection with existing documents
    db.samples.insertMany([
        { level: "info", message: "Server started" },
        { level: "warn", message: "High memory usage" },
        { level: "error", message: "Connection lost" }
    ]);

    // Convert the collection into a capped collection
    db.runCommand({
        convertToCapped: "samples",
        size: 1024,
        max: 3
    });
        `}</code>
                    </pre>

                    <p className="pl-5 mb-5">
                        Here, <span className="text-sm text-green-600 font-semibold">convertToCapped</span> converts <span className="text-sm text-green-600 font-semibold">samples</span> in-place, restricting it to 1024 bytes and a maximum of 3 documents moving forward.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CapCollections;