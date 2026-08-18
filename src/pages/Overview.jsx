const Overview = () => {
    return (
        <section className="w-full py-10">
            <div className="custom-container space-y-5">
                <div className="w-full">
                    <h2 className="mb-5 text-green-800 font-semibold text-2xl">MongoDb Overview</h2>

                    <p className="pl-5">MongoDB is a popular NoSQL document oriented database that stores information.</p>
                </div>

                <div className="w-full">
                    <h3 className="mb-5 text-green-800 font-semibold text-xl">Benefits</h3>

                    <ul className="list-disc list-inside pl-5">
                        <li><b>Stores flexible data:</b> Saves data as documents. Documents can change structure easily.</li>
                        <li><b>Handles massive scale:</b> Splits data across multiple servers automatically.</li>
                        <li><b>Speeds up development:</b> Matches how programmers write application code.</li>
                        <li><b>Enables fast queries:</b> Searches deep inside complex data structures quickly.</li>
                    </ul>
                </div>

                <div className="w-full">
                    <h3 className="mb-5 text-green-800 font-semibold text-xl">Installation</h3>

                    <div className="space-y-3 pl-5">
                        <p>Get to the official <a href="https://www.mongodb.com/try/download/shell" className="link" target="_blank">documentation</a> to download MongoDb shell to use in local environment.</p>

                        <p>It is going to used in terminal but if you want to use this in GUI install MongoDb Compass <a href="https://www.mongodb.com/try/download/compass" target="_blank" className="link">here.</a></p>

                        <p>After installation you must add enviromental variables in your system. following steps can be useful,</p>

                        <ul className="list-decimal list-inside pl-5 space-y-5">
                            <li>
                                <span className="inline-block mb-3">First copy your path from your desktop</span>

                                <span className="block w-full md:w-[45%] lg:w-[30%] overflow-hidden">
                                    <img src="/images/1.PNG" alt="Copy Environment path from desktop" className="w-full h-full object-cover" />
                                </span>
                            </li>
                            <li>
                                <span className="inline-block mb-3">Open your windows settings and select advanced settings in About section</span>

                                <span className="block w-full md:w-[45%] lg:w-[30%] overflow-hidden">
                                    <img src="/images/2.PNG" alt="System properties" className="w-full h-full object-cover" />
                                </span>
                            </li>
                            <li>
                                <span className="inline-block mb-3">Click Environmental variables and inside add your copied path in path area</span>

                                <span className="block w-full md:w-[45%] lg:w-[30%] overflow-hidden">
                                    <img src="/images/3.PNG" alt="Paste environmental varibale inside path" className="w-full h-full object-cover" />
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Overview;