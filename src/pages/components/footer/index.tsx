import React from 'react';
// import SOSFB from '../../../assets/img/sos-fb.png';
import SOSPHONE from '../../../assets/img/why_first.png';
import SOSMAIL from '../../../assets/img/sos-mail.png';
import { useNavigate } from 'react-router-dom';

const Footer: React.FC = () => {
    const navigate = useNavigate();

    return (
        <footer className="bg-white">
            {/* Container untuk 3 row content */}
            <div className="container mx-auto py-8 px-[7rem] grid grid-cols-1 md:grid-cols-3 gap-[8rem]">
                {/* Lokasi */}
                <div>
                    <h3 className="text-[24px] text-[#414141] font-semibold font-poppins mb-4 text-center">Lokasi</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.5501416203438!2d106.75702567453075!3d-6.190896660653384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f71955eae421%3A0xc0df35898597044a!2sThe%20Vida%20Office%20Buiding!5e0!3m2!1sid!2sid!4v1730779678907!5m2!1sid!2sid"
                        width="360"
                        height="148"
                        style={{ border: 0 }}
                        loading="lazy"
                        allowFullScreen
                        className="w-full"
                        title="map-location"
                    ></iframe>
                </div>

                {/* Company */}
                <div className='pl-10'>
                    <h3 className="text-[24px] text-[#414141] font-semibold font-poppins mb-6">Company</h3>
                    <ul className="space-y-2">
                        <li className="text-[14px] text-[#9F9F9F] font-medium font-poppins cursor-pointer hover:text-[#787878]" onClick={() => navigate("/")}>- Beranda</li>
                        <li className="text-[14px] text-[#9F9F9F] font-medium font-poppins cursor-pointer hover:text-[#787878]" onClick={() => navigate("/partner")}>- Partner</li>
                        <li className="text-[14px] text-[#9F9F9F] font-medium font-poppins cursor-pointer hover:text-[#787878]" onClick={() => navigate("/layanan")}>- Layanan</li>
                        <li className="text-[14px] text-[#9F9F9F] font-medium font-poppins cursor-pointer hover:text-[#787878]" onClick={() => navigate("/tentang")}>- Tentang</li>
                        <li className="text-[14px] text-[#9F9F9F] font-medium font-poppins cursor-pointer hover:text-[#787878]" onClick={() => navigate("/kontak")}>- Kontak</li>
                    </ul>
                </div>

                {/* Kontak Kami */}
                <div>
                    <h3 className="text-[24px] text-[#414141] font-semibold font-poppins mb-6">Kontak Kami</h3>
                    <ul className="flex flex-col gap-4 space-y-2">
                        {/* <li className="flex items-center text-[14px] text-[#9F9F9F] font-medium font-poppins">
                            <img src={SOSFB} alt="Facebook" className="mr-4" />
                            AMP Consulting
                        </li>
                        <li className="flex items-center text-[14px] text-[#9F9F9F] font-medium font-poppins">
                            <img src={SOSIG} alt="Instagram" className="mr-4" />
                            amp_consulting
                        </li> */}
                        <li className="flex items-center text-[14px] text-[#9F9F9F] font-medium font-poppins">
                            <img src={SOSPHONE} alt="Phone" className="mr-4" />
                            +62 812-9803-6123
                        </li>
                        <li className="flex items-center text-[14px] text-[#9F9F9F] font-medium font-poppins">
                            <img src={SOSMAIL} alt="Email" className="mr-4" />
                            charlie.thyawarta@ampconsulting.id
                        </li>
                    </ul>
                </div>
            </div>

            {/* Box di bawah row 3 content */}
            <div className="w-full h-[80px] bg-white shadow-[0px_-2px_4px_0px_rgba(0,0,0,0.10)]">
                <div className='w-[85%] h-full mx-auto flex items-center justify-between'>
                    <p className="text-[#414141] font-poppins">PT. ANUGERAH MITRA PERKASA CONSULTING</p>
                    <p className='text-[12px] text-[#9F9F9F] font-medium font-poppins'>
                        The VIDA Office Building, Lantai 5, Unit 5<br />
                        Jl. Raya Pejuangan No. 8, Jakarta Barat, Jakarta 11530
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;