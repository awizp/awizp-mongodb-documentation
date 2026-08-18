import { Link } from "react-router";

const Sidebar = ({ isMenuOpen, setIsMenuOpen }) => {

    const menuToggleHandle = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            {/* overlay */}
            <div onClick={menuToggleHandle}
                className={`inset-0 w-full bg-black/60 transition fixed ${isMenuOpen ? 'block opacity-100' : 'hidden opacity-0'} `
                }></div>

            {/* sidebar */}
            <aside className={`w-[85%] xs:w-[45%] md:w-[30%] bg-white rounded-lg shadow border border-slate-100 py-10 h-screen z-10 fixed top-1 left-1 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition duration-300 ease-in-out px-8`}>
                {/* close btn */}
                <button onClick={menuToggleHandle}
                    className="flex-center text-2xl fixed top-3 right-3 cursor-pointer text-red-500">
                    <ion-icon name="close-circle"></ion-icon>
                </button>

                <div className="custom-scroll overflow-y-auto overflow-hidden w-full max-h-full space-y-5">
                    {/***** overview section *****/}
                    <div className="w-full">
                        <h3 className="font-semibold text-sm uppercase mb-2">Overview</h3>

                        <Link to='/' onClick={menuToggleHandle}>
                            <p className="nav-link">Installation</p>
                        </Link>
                    </div>

                    {/***** data types *****/}
                    <div className="w-full">
                        <h3 className="font-semibold text-sm uppercase mb-2">BSON</h3>

                        <div className="w-full space-y-3">
                            <Link to='/data-types' onClick={menuToggleHandle}>
                                <p className="nav-link">Data Types</p>
                            </Link>
                        </div>
                    </div>

                    {/***** basic actions *****/}
                    <div className="w-full">
                        <h3 className="font-semibold text-sm uppercase mb-2">Basic</h3>

                        <div className="w-full space-y-3">
                            <Link to='/db-actions' onClick={menuToggleHandle}>
                                <p className="nav-link">Actions</p>
                            </Link>
                        </div>
                    </div>

                    {/***** validation and schema *****/}
                    <div className="w-full">
                        <h3 className="font-semibold text-sm uppercase mb-2">Validation</h3>

                        <div className="w-full space-y-3">
                            <Link to='/schema' onClick={menuToggleHandle}>
                                <p className="nav-link">schema</p>
                            </Link>
                        </div>
                    </div>

                    {/***** insert one and many document *****/}
                    <div className="w-full">
                        <h3 className="font-semibold text-sm uppercase mb-2">Insert</h3>

                        <div className="w-full space-y-3">
                            <Link to='/insert-one' onClick={menuToggleHandle}>
                                <p className="nav-link">Insert One</p>
                            </Link>

                            <Link to='/insert-many' onClick={menuToggleHandle}>
                                <p className="nav-link">Insert Many</p>
                            </Link>
                        </div>
                    </div>

                    {/***** update documents *****/}
                    <div className="w-full">
                        <h3 className="font-semibold text-sm uppercase mb-2">Update</h3>

                        <div className="w-full space-y-3">
                            <Link to='/update-one' onClick={menuToggleHandle}>
                                <p className="nav-link">update one</p>
                            </Link>

                            <Link to='/update-many' onClick={menuToggleHandle}>
                                <p className="nav-link">update many</p>
                            </Link>

                            <Link to='/replace-one' onClick={menuToggleHandle}>
                                <p className="nav-link">replace one</p>
                            </Link>
                        </div>
                    </div>

                    {/***** delete documents *****/}
                    <div className="w-full">
                        <h3 className="font-semibold text-sm uppercase mb-2">Delete</h3>

                        <div className="w-full space-y-3">
                            <Link to='/delete-one' onClick={menuToggleHandle}>
                                <p className="nav-link">delete one</p>
                            </Link>

                            <Link to='/delete-many' onClick={menuToggleHandle}>
                                <p className="nav-link">delete many</p>
                            </Link>
                        </div>
                    </div>

                    {/***** find functions *****/}
                    <div className="w-full">
                        <h3 className="font-semibold text-sm uppercase mb-2">Find</h3>

                        <div className="w-full space-y-3">

                            <Link to='/find' onClick={menuToggleHandle}>
                                <p className="nav-link">find</p>
                            </Link>

                            <Link to='/find-update-one' onClick={menuToggleHandle}>
                                <p className="nav-link">Find And Update One</p>
                            </Link>

                            <Link to='/find-replace-one' onClick={menuToggleHandle}>
                                <p className="nav-link">Find And replace One</p>
                            </Link>

                            <Link to='/find-delete-one' onClick={menuToggleHandle}>
                                <p className="nav-link">Find And delete One</p>
                            </Link>
                        </div>
                    </div>

                    {/***** different types of operators *****/}
                    <div className="w-full">
                        <h3 className="font-semibold text-sm uppercase mb-2">operators</h3>

                        <div className="w-full space-y-3">
                            <Link to='/basic-operators' onClick={menuToggleHandle}>
                                <p className="nav-link">Basic Operators</p>
                            </Link>

                            <Link to='/arr-operators' onClick={menuToggleHandle}>
                                <p className="nav-link">Array Operators</p>
                            </Link>

                            <Link to='/comparison-operators' onClick={menuToggleHandle}>
                                <p className="nav-link">Comparison Operators</p>
                            </Link>

                            <Link to='/logical-operators' onClick={menuToggleHandle}>
                                <p className="nav-link">Logical Operators</p>
                            </Link>
                        </div>
                    </div>

                    {/***** aggregate multi filter method *****/}
                    <div className="w-full">
                        <h3 className="font-semibold text-sm uppercase mb-2">Aggregate</h3>

                        <div className="w-full space-y-3">
                            <Link to='/aggregate-one' onClick={menuToggleHandle}>
                                <p className="nav-link">stage one</p>
                            </Link>

                            <Link to='/aggregate-two' onClick={menuToggleHandle}>
                                <p className="nav-link">stage two</p>
                            </Link>

                            <Link to='/aggregate-three' onClick={menuToggleHandle}>
                                <p className="nav-link">stage three</p>
                            </Link>
                        </div>
                    </div>

                    {/***** aggregate operators *****/}
                    <div className="w-full">
                        <h3 className="font-semibold text-sm uppercase mb-2">Aggregate Operators</h3>

                        <div className="w-full space-y-3">
                            <Link to='/group-operators' onClick={menuToggleHandle}>
                                <p className="nav-link">Group Operators</p>
                            </Link>

                            <Link to='/lookup-operators' onClick={menuToggleHandle}>
                                <p className="nav-link">Lookup Operators</p>
                            </Link>

                            <Link to='/bucket-operators' onClick={menuToggleHandle}>
                                <p className="nav-link">Bucket Operators</p>
                            </Link>

                            <Link to='/addfield-operators' onClick={menuToggleHandle}>
                                <p className="nav-link">AddField Operators</p>
                            </Link>

                            <Link to='/facet-operators' onClick={menuToggleHandle}>
                                <p className="nav-link">Facet Operators</p>
                            </Link>

                            <Link to='/fill-operators' onClick={menuToggleHandle}>
                                <p className="nav-link">Fill Operators</p>
                            </Link>

                            <Link to='/arithmatic-operators' onClick={menuToggleHandle}>
                                <p className="nav-link">Arithmatic Operators</p>
                            </Link>

                            <Link to='/string-operators' onClick={menuToggleHandle}>
                                <p className="nav-link">string Operators</p>
                            </Link>

                            <Link to='/conditional-operators' onClick={menuToggleHandle}>
                                <p className="nav-link">conditional Operators</p>
                            </Link>

                            <Link to='/date-operators' onClick={menuToggleHandle}>
                                <p className="nav-link">date Operators</p>
                            </Link>

                            <Link to='/array-operators' onClick={menuToggleHandle}>
                                <p className="nav-link">Array Operators</p>
                            </Link>

                            <Link to='/type-operators' onClick={menuToggleHandle}>
                                <p className="nav-link">type Operators</p>
                            </Link>
                        </div>
                    </div>

                    {/***** Capped collections *****/}
                    <div className="w-full">
                        <h3 className="font-semibold text-sm uppercase mb-2">Collections</h3>

                        <div className="w-full space-y-3">
                            <Link to='/cap-collections' onClick={menuToggleHandle}>
                                <p className="nav-link">Overview</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;