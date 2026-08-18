import { useState } from "react";
import { Outlet } from "react-router";
import { Navbar, Sidebar } from "../components";

const RootElement = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <section>
            <Navbar setIsMenuOpen={setIsMenuOpen} />
            <Sidebar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <Outlet />
        </section>
    );
};

export default RootElement;