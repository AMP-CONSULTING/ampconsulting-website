import React, { useEffect, useState } from 'react';
import Logo from "../../../assets/img/logo.png";
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
    const [activeMenu, setActiveMenu] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const pathname = location.pathname.replace("/", "")

    const menuItems = ['beranda', 'partner', 'layanan', 'tentang', 'kontak'];

    const handleActiveMenu = (link: any) => {
        if (link !== "beranda")
            navigate(`/${link}`)
        else
            navigate(`/`);

        setActiveMenu(link);
    }

    useEffect(() => {
        setActiveMenu(pathname);
    }, [])

    return (
        <header className="bg-white h-[100px] flex items-center justify-between px-12">
            <div className="flex items-center">
                <Link to={"/"}>
                    <img src={Logo} alt="Logo" width="207" height="48" />
                </Link>
            </div>
            <nav className="flex items-center space-x-8">
                {menuItems.map((item) => (
                    <div
                        key={item}
                        className="relative cursor-pointer"
                        onClick={() => handleActiveMenu(item)}
                    >
                        <span
                            className={`font-poppins capitalize text-[14px] ${activeMenu === item ? 'font-semibold' : 'font-medium'
                                }`}
                        >
                            {item}
                        </span>
                        {activeMenu === "" && item === "beranda" && (
                            <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-[41px] h-[1px] bg-black"></div>
                        )}
                        {activeMenu === item && (
                            <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-[41px] h-[1px] bg-black"></div>
                        )}
                    </div>
                ))}
            </nav>
        </header>
    );
};

export default Header;