import React from 'react';
import Service1 from '../../assets/img/service1.png';
import Service2 from '../../assets/img/service2.png';
import Service3 from '../../assets/img/service3.png';
import Service4 from '../../assets/img/service4.png';
import Service5 from '../../assets/img/service5.png';
import Service6 from '../../assets/img/service6.png';
import Service7 from '../../assets/img/service7.png';
import Whatsapp from '../../assets/img/whatsapp.png';
import { Link } from 'react-router-dom';

const ServicePage: React.FC = () => {
    return (
        <div className="font-poppins">
            <section className="py-8 relative mb-12">
                <h1 className='font-poppins font-semibold text-[24px] md:text-[36px] text-[#414141] mb-10 text-center'>Layanan Kami</h1>
                <div className="flex flex-col justify-center items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 px-8 md:px-0">
                        {/* <div className="w-full md:w-[349px] md:h-[130px] p-6 rounded-[20px] border border-[#BBBBBB] flex items-center justify-start gap-8 pl-8">
                            <div className='w-[65px]'>
                                <img src={Service1} alt='Service' />
                            </div>
                            <div className='flex flex-col gap-3'>
                                <h3 className='mb-0 font-poppins font-semibold text-[13px] md:text-[16px] text-[#414141] leading-[25px]'>
                                    Kepatuhan Perpajakan<br />
                                    Untuk Korporasi
                                </h3>
                                <Link to={"https://wa.me/6281298036123"} target='_blank' className='w-[129px] h-[36px] rounded-[10px] bg-[#55E26F] hover:bg-[#29DA4B] font-poppins font-semibold text-[9px] md:text-[10px] text-white flex items-center gap-2 pl-2'>
                                    <img src={Whatsapp} alt="Whatsapp" />
                                    Chat Sekarang
                                </Link>
                            </div>
                        </div> */}
                        <div className="w-full md:w-[349px] md:h-[130px] p-6 rounded-[20px] border border-[#BBBBBB] flex items-center justify-start gap-8 pl-8">
                            <div className='w-[65px]'>
                                <img src={Service2} alt='Service' />
                            </div>
                            <div className='flex flex-col gap-3'>
                                <h3 className='mb-0 font-poppins font-semibold text-[13px] md:text-[16px] text-[#414141] leading-[25px]'>
                                    Pelatihan<br />
                                    Perpajakan
                                </h3>
                                <Link to={"https://wa.me/6281298036123"} target='_blank' className='w-[129px] h-[36px] rounded-[10px] bg-[#55E26F] hover:bg-[#29DA4B] font-poppins font-semibold text-[9px] md:text-[10px] text-white flex items-center gap-2 pl-2'>
                                    <img src={Whatsapp} alt="Whatsapp" />
                                    Chat Sekarang
                                </Link>
                            </div>
                        </div>
                        <div className="w-full md:w-[349px] md:h-[130px] p-6 rounded-[20px] border border-[#BBBBBB] flex items-center justify-start gap-8 pl-8">
                            <div className='w-[65px]'>
                                <img src={Service3} alt='Service' />
                            </div>
                            <div className='flex flex-col gap-3'>
                                <h3 className='mb-0 font-poppins font-semibold text-[13px] md:text-[16px] text-[#414141] leading-[25px]'>
                                    Pemeriksaan Pajak,<br />
                                    Keberatan & Banding
                                </h3>
                                <Link to={"https://wa.me/6281298036123"} target='_blank' className='w-[129px] h-[36px] rounded-[10px] bg-[#55E26F] hover:bg-[#29DA4B] font-poppins font-semibold text-[9px] md:text-[10px] text-white flex items-center gap-2 pl-2'>
                                    <img src={Whatsapp} alt="Whatsapp" />
                                    Chat Sekarang
                                </Link>
                            </div>
                        </div>
                        <div className="w-full md:w-[349px] md:h-[130px] p-6 rounded-[20px] border border-[#BBBBBB] flex items-center justify-start gap-8 pl-8">
                            <div className='w-[65px]'>
                                <img src={Service4} alt='Service' />
                            </div>
                            <div className='flex flex-col gap-3'>
                                <h3 className='mb-0 font-poppins font-semibold text-[13px] md:text-[16px] text-[#414141] leading-[25px]'>
                                    Perencanaan<br />
                                    Perpajakan
                                </h3>
                                <Link to={"https://wa.me/6281298036123"} target='_blank' className='w-[129px] h-[36px] rounded-[10px] bg-[#55E26F] hover:bg-[#29DA4B] font-poppins font-semibold text-[9px] md:text-[10px] text-white flex items-center gap-2 pl-2'>
                                    <img src={Whatsapp} alt="Whatsapp" />
                                    Chat Sekarang
                                </Link>
                            </div>
                        </div>
                        <div className="w-full md:w-[349px] md:h-[130px] p-6 rounded-[20px] border border-[#BBBBBB] flex items-center justify-start gap-8 pl-8">
                            <div className='w-[65px]'>
                                <img src={Service5} alt='Service' />
                            </div>
                            <div className='flex flex-col gap-3'>
                                <h3 className='mb-0 font-poppins font-semibold text-[13px] md:text-[16px] text-[#414141] leading-[25px]'>
                                    Konsultasi<br />
                                    Perpajakan
                                </h3>
                                <Link to={"https://wa.me/6281298036123"} target='_blank' className='w-[129px] h-[36px] rounded-[10px] bg-[#55E26F] hover:bg-[#29DA4B] font-poppins font-semibold text-[9px] md:text-[10px] text-white flex items-center gap-2 pl-2'>
                                    <img src={Whatsapp} alt="Whatsapp" />
                                    Chat Sekarang
                                </Link>
                            </div>
                        </div>
                        <div className="w-full md:w-[349px] md:h-[130px] p-6 rounded-[20px] border border-[#BBBBBB] flex items-center justify-start gap-8 pl-8">
                            <div className='w-[65px]'>
                                <img src={Service6} alt='Service' />
                            </div>
                            <div className='flex flex-col gap-3'>
                                <h3 className='mb-0 font-poppins font-semibold text-[13px] md:text-[16px] text-[#414141] leading-[25px]'>
                                    Asistensi Perpajakan<br />
                                    Orang Pribadi
                                </h3>
                                <Link to={"https://wa.me/6281298036123"} target='_blank' className='w-[129px] h-[36px] rounded-[10px] bg-[#55E26F] hover:bg-[#29DA4B] font-poppins font-semibold text-[9px] md:text-[10px] text-white flex items-center gap-2 pl-2'>
                                    <img src={Whatsapp} alt="Whatsapp" />
                                    Chat Sekarang
                                </Link>
                            </div>
                        </div>
                        <div className="w-full md:w-[349px] md:h-[130px] p-6 rounded-[20px] border border-[#BBBBBB] flex items-center justify-start gap-8 pl-8">
                            <div className='w-[65px]'>
                                <img src={Service7} alt='Service' />
                            </div>
                            <div className='flex flex-col gap-3'>
                                <h3 className='mb-0 font-poppins font-semibold text-[13px] md:text-[16px] text-[#414141] leading-[25px]'>
                                    Dokumen Transfer<br />
                                    Pricing (TP doc)
                                </h3>
                                <Link to={"https://wa.me/6281298036123"} target='_blank' className='w-[129px] h-[36px] rounded-[10px] bg-[#55E26F] hover:bg-[#29DA4B] font-poppins font-semibold text-[9px] md:text-[10px] text-white flex items-center gap-2 pl-2'>
                                    <img src={Whatsapp} alt="Whatsapp" />
                                    Chat Sekarang
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServicePage;