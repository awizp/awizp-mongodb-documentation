const DatabaseActions = () => {
    return (
        <section className="w-full py-10">
            <div className="custom-container space-y-5">
                <div className="w-full">
                    <h2 className="mb-5 text-green-800 font-semibold text-2xl">Database Actions</h2>

                    <p className="pl-5">We can perform some basic actions in our database. Those are,</p>
                </div>

                <div className="w-full">
                    <h3 className="mb-5 text-green-800 font-semibold text-lg">1. show dbs</h3>

                    <p className="pl-5">This command is used to show current active databases in our local environment.</p>
                </div>

                <div className="w-full">
                    <h3 className="mb-5 text-green-800 font-semibold text-lg">2. use {`<database name>`}</h3>

                    <p className="pl-5">This command can create new database or use already existing database. <span className="text-xs text-green-600 font-semibold">Ex:- use students</span></p>
                </div>

                <div className="w-full">
                    <h3 className="mb-5 text-green-800 font-semibold text-lg">3. db.createCollection({`<collection name>`})</h3>

                    <p className="pl-5">This command can create new collections in our dbs. <span className="text-xs text-green-600 font-semibold">Ex:- db.createCollection('users')</span></p>
                </div>

                <div className="w-full">
                    <h3 className="mb-5 text-green-800 font-semibold text-lg">4. show collections</h3>

                    <p className="pl-5">This command used to show all available collections in dbs.</p>
                </div>

                <div className="w-full">
                    <h3 className="mb-5 text-green-800 font-semibold text-lg">5. db.{`<collection name>`}.renameCollection({`<rename>`})</h3>

                    <p className="pl-5">This command used to rename particular collection in our dbs. <span className="text-xs text-green-600 font-semibold">Ex:- db.library.renameCollection("books")</span></p>
                </div>

                <div className="w-full">
                    <h3 className="mb-5 text-green-800 font-semibold text-lg">6. db.help()</h3>

                    <p className="pl-5">This command used to get all functions used in dbs.</p>
                </div>

                <div className="w-full">
                    <h3 className="mb-5 text-green-800 font-semibold text-lg">7. db.{`<collection name>`}.drop()</h3>

                    <p className="pl-5">This command used to drop the whole selected collection from dbs. <span className="text-xs text-green-600 font-semibold">Ex:- db.users.drop()</span></p>
                </div>

                <div className="w-full">
                    <h3 className="mb-5 text-green-800 font-semibold text-lg">8. db.dropDatabase()</h3>

                    <p className="pl-5">This command used to drop the whole current database.</p>
                </div>
            </div>
        </section>
    );
};

export default DatabaseActions;