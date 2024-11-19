import React, { useEffect, useState } from 'react';
import Logo from "../../../assets/img/logo.png";
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
    const [activeMenu, setActiveMenu] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const pathname = location.pathname.replace("/", "")

    const menuItems = ['beranda', 'partner', 'layanan', 'tentang', 'kontak'];

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleActiveMenu = (link: any) => {
        if (link !== "beranda")
            navigate(`/${link}`)
        else
            navigate(`/`);

        setActiveMenu(link);
        setIsOpen(false);
    }

    useEffect(() => {
        setActiveMenu(pathname);
    }, [])

    return (
        <header className="bg-white h-[100px] flex md:flex md:items-center md:justify-between px-12">
            <div className="flex items-center justify-center w-full md:justify-start">
                <button
                    className="block md:hidden text-2xl absolute left-8 top-7"
                    onClick={toggleMenu}
                >
                    &#9776;
                </button>
                <Link to={"/"}>
                    <img src={Logo} alt="Logo" width="207" height="48" className='w-[150px] md:w-[207px]' />
                </Link>
            </div>
            <nav>
                <div className="hidden md:flex md:items-center md:space-x-8">
                    {menuItems.map((item) => (
                        <div
                            key={item}
                            className="relative cursor-pointer"
                            onClick={() => handleActiveMenu(item)}
                        >
                            <span
                                className={`font-poppins capitalize text-[14px] ${activeMenu === item ? 'font-bold' : 'font-medium'
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
                </div>
                {/* Mobile Menu */}
                <div
                    className={`fixed z-20 top-0 left-0 h-full bg-[#315089] text-white transform ${isOpen ? "translate-x-0" : "-translate-x-full"
                        } transition-transform duration-300 ease-in-out w-64 shadow-lg`}
                >
                    <button
                        className="absolute top-4 right-6 text-2xl"
                        onClick={toggleMenu}
                    >
                        &times;
                    </button>
                    <ul className="mt-16 gap-6 flex flex-col px-8">
                        {menuItems.map((item) => (
                            <li key={item} onClick={() => handleActiveMenu(item)}>
                                <span className={`font-poppins capitalize text-white text-[14px] ${activeMenu === item ? 'font-semibold' : 'font-medium'
                                    }`}>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header >
    );
};

export default Header;