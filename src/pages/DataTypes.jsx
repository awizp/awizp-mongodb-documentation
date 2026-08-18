const DataTypes = () => {
    return (
        <section className="w-full py-10">
            <div className="custom-container space-y-5">
                <div className="w-full">
                    <h2 className="mb-5 text-green-800 font-semibold text-2xl">Database Records</h2>

                    <p className="pl-5">In MongoDB, data are stored in bson type. First we can create collection and inside we store documents as records.</p>
                </div>

                <div className="w-full">
                    <h3 className="mb-5 text-green-800 font-semibold text-lg">BSON data</h3>

                    <ul className="list-decimal list-inside pl-5 mb-5">
                        <li>String</li>
                        <li>Double</li>
                        <li>32 Bit Integer</li>
                        <li>64 Bit Integer</li>
                        <li>Boolean</li>
                        <li>Array</li>
                        <li>Object</li>
                        <li>Null</li>
                        <li>TimeStamp</li>
                        <li>Regular Expression</li>
                        <li>Date</li>
                        <li>Object ID</li>
                    </ul>

                    <p>These are the data types used in MongoDb.</p>
                </div>

                <div>
                    <h3 className="mb-5 text-green-800 font-semibold">1. String</h3>

                    <p className="pl-5">Strings are normally written in chars and words.</p>
                </div>

                <div>
                    <h3 className="mb-5 text-green-800 font-semibold">2. Double</h3>

                    <p className="pl-5">Double is known as numbers with decimal points. (Ex: 2.34)</p>
                </div>

                <div>
                    <h3 className="mb-5 text-green-800 font-semibold">3. 32 Bit Integer</h3>

                    <p className="pl-5">Numbers can be stored between -2147483648 to 2147483647. It is only stores under 4 bytes memory.</p>
                </div>

                <div>
                    <h3 className="mb-5 text-green-800 font-semibold">4. 64 Bit Integer</h3>

                    <p className="pl-5">Numbers can be stored between -9223372036854775808 to 9223372036854775807. It is store numbers under 8 bytes memory.</p>
                </div>

                <div>
                    <h3 className="mb-5 text-green-800 font-semibold">5. Boolean</h3>

                    <p className="pl-5">Data stored as True or False</p>
                </div>

                <div>
                    <h3 className="mb-5 text-green-800 font-semibold">6. Array</h3>

                    <p className="pl-5">Array containers contained with data can be stored. It can be string or integer array</p>
                </div>

                <div>
                    <h3 className="mb-5 text-green-800 font-semibold">7. Object</h3>

                    <p className="pl-5">Values stored as objects paired with key and values</p>
                </div>

                <div>
                    <h3 className="mb-5 text-green-800 font-semibold">8. Null</h3>

                    <p className="pl-5">Some data can be omit in particular collection returns null or can store null values</p>
                </div>

                <div>
                    <h3 className="mb-5 text-green-800 font-semibold">9. Date</h3>

                    <p className="pl-5 mb-2">In MongoDb, Date is used to store date and time in particular ISO Type. <span className="text-xs text-green-600 font-semibold">Ex:- ISODate("2002-10-12T08:00:00Z")</span></p>

                    <p className="pl-5 mb-2">Here, T indicates Time and Z indiactes UTC (Coordinated Universal Time). ISO standard timezone has two types</p>

                    <ul className="pl-10 list-decimal list-inside mb-2">
                        <li>Central European Time</li>
                        <li>Eastern Standard Time</li>
                    </ul>

                    <p className="pl-5">We can use <span className="text-green-700 font-semibold">new Date()</span> Javascript object to store date and time in MongoDb</p>
                </div>

                <div>
                    <h3 className="mb-5 text-green-800 font-semibold">10. Timestamp</h3>

                    <p className="pl-5 mb-2">Timestamp data type is a internal 64-bit sequence. It is used to mainly replicate data in different document. <span className="text-xs text-green-600 font-semibold">Ex:- Timestamp({"{t: 1786151940, i: 1 }"})</span></p>
                </div>

                <div>
                    <h3 className="mb-5 text-green-800 font-semibold">11. Regular Expression</h3>

                    <p className="pl-5 mb-2">Regular Expressions are used to validate some patterns which is email, password or some important ones.</p>
                </div>

                <div>
                    <h3 className="mb-5 text-green-800 font-semibold">12. ObjectId</h3>

                    <p className="pl-5 mb-2">This ObjectId can be created automatically by MongoDb to identify the documents inside collections. It is always created by unique.</p>
                </div>
            </div>
        </section>
    );
};

export default DataTypes;