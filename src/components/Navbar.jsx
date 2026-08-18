const Navbar = ({ setIsMenuOpen }) => {

    const menuToggleHandle = () => {
        setIsMenuOpen(true);
    };

    return (
        <nav className="w-full bg-white shadow border-b border-slate-50">
            <div className="custom-container py-3">
                <div className="flex justify-between items-center gap-5">
                    <h1 className="text-lg text-green-600 font-bold flex-center gap-2">
                        <span className="size-6 flex-center">
                            <img src="/logo.svg" alt="MongoDb Logo" />
                        </span>
                        MongoDB
                    </h1>

                    <div className="flex-center p-1 rounded group hover:bg-green-600 transition hover:shadow overflow-hidden">
                        <button onClick={menuToggleHandle}
                            className="text-2xl flex-center cursor-pointer group-hover:text-white transition-colors">
                            <ion-icon name="menu"></ion-icon>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;