import React from 'react';
import First from '../../assets/img/first.png';
import Why from '../../assets/img/why.png';
import CheckBlue from '../../assets/img/checkblue.png';
import WhyFirst from '../../assets/img/why_first.png';
import WhySecond from '../../assets/img/why_second.png';
import WhyThird from '../../assets/img/why_third.png';
import About from '../../assets/img/about.png';
import Partner1 from '../../assets/img/partner1.png';
import Partner2 from '../../assets/img/partner2.png';
import Partner3 from '../../assets/img/partner3.png';
import Partner4 from '../../assets/img/partner4.png';
import Partner5 from '../../assets/img/partner5.png';
import Partner6 from '../../assets/img/partner6.png';
import Partner7 from '../../assets/img/partner7.png';
import Partner8 from '../../assets/img/partner8.png';
import Partner9 from '../../assets/img/partner9.png';
import Partner10 from '../../assets/img/partner10.png';
import Partner11 from '../../assets/img/partner11.png';
import Partner12 from '../../assets/img/partner12.png';
import Partner13 from '../../assets/img/partner13.png';
import { Link } from 'react-router-dom';
import Service1 from '../../assets/img/service1.png';
import Service2 from '../../assets/img/service2.png';
import Service3 from '../../assets/img/service3.png';
import Service4 from '../../assets/img/service4.png';
import Service5 from '../../assets/img/service5.png';
import Service6 from '../../assets/img/service6.png';
import Service7 from '../../assets/img/service7.png';
import YourNeed from '../../assets/img/your-need.png';

const HomePage: React.FC = () => {
    return (
        <div className="font-poppins">
            {/* First Content Section */}
            <section className="flex justify-between items-center py-16 bg-[#F8F8F8]">
                <div className="w-[40%] pl-[10rem]">
                    <h1 className="font-poppins text-[64px] font-semibold leading-tight text-[#414141] mb-8">
                        Memberikan Solusi Terbaik
                    </h1>
                    <div className="flex items-center mt-4">
                        <img src={CheckBlue} alt='Check Blue' />
                        <p className="ml-3 text-[14px] font-poppins text-[#414141] font-light">
                            Memberikan Solusi Untuk Masalah <br />
                            Tentang Perpajakan Anda. <br /> <br />
                            PT ANUGERAH MITRA PERKASA CONSULTING
                        </p>
                    </div>
                </div>
                <div className="w-[60%] flex items-end justify-end">
                    <img
                        src={First}
                        alt="Consulting Image"
                        width="731.47"
                        height="570.59"
                        className="object-cover"
                    />
                </div>
            </section>

            {/* Second Content Section */}
            <section className="container mx-auto py-16 px-8">
                <div className="flex justify-between items-center">
                    <div className="w-1/2 flex items-end justify-end pr-[4rem]">
                        <img
                            src={Why}
                            alt="Why Choose Us Image"
                            width="380"
                            height="457"
                            className="object-cover"
                        />
                    </div>
                    <div className="w-1/2 pl-[2rem]">
                        <h2 className="font-poppins text-[#414141] mb-5 text-[36px] font-semibold">
                            Mengapa Memilih Kami?
                        </h2>
                        <div className="mt-8 space-y-6">
                            {/* First Box */}
                            <div className="flex items-start">
                                <img src={WhyFirst} alt="Why" className='me-3 mt-1' />
                                <div className="ml-2">
                                    <p className="font-poppins text-[14px] font-semibold text-[#414141] mb-2">Layanan Cepat & Profesional</p>
                                    <p className="font-roboto font-normal text-[13px] text-[#5E5B5B]">
                                        Kami akan memberikan layanan yang cepat dan profesional<br />
                                        karena kami didukung oleh tim yang berpengalaman.<br />
                                        Sehingga klien tidak harus menunggu lama.
                                    </p>
                                </div>
                            </div>

                            {/* Second Box */}
                            <div className="flex items-start">
                                <img src={WhySecond} alt="Why" className='me-3 mt-1' />
                                <div className="ml-2">
                                    <p className="font-poppins text-[14px] font-semibold text-[#414141] mb-2">Kepuasan Klien Yang Utama</p>
                                    <p className="font-roboto font-normal text-[13px] text-[#5E5B5B]">
                                        Kami memperlakukan klien lebih dari sekedar<br />
                                        mengejar materi, bagi kami materi adalah bonus<br />
                                        dalam bekerja, Jika klien puas itulah kesuksesan<br />
                                        utama bagi kami.
                                    </p>
                                </div>
                            </div>

                            {/* Third Box */}
                            <div className="flex items-start">
                                <img src={WhyThird} alt="Why" className='me-3 mt-1' />
                                <div className="ml-2">
                                    <p className="font-poppins text-[14px] font-semibold text-[#414141] mb-2">Kepatuhan dan Keamanan Terjamin</p>
                                    <p className="font-roboto font-normal text-[13px] text-[#5E5B5B]">
                                        Kami sangat menjunjung tinggi prinsip kepatuhan dan keamanan<br />
                                        dalam setiap layanan perpajakan yang kami tawarkan.<br />
                                        Kami memastikan bahwa semua proses perpajakan yang kami tangani<br />
                                        sesuai dengan peraturan pemerintah yang berlaku.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Third Content Section */}
            <section className="flex py-16 relative mb-12">
                <div className="w-[50%] pl-[10rem] relative">
                    <div className='absolute top-[3rem] right-[-15rem] bg-white box-shadow-about p-[40px]'>
                        <h1 className="font-poppins text-[36px] font-semibold text-[#414141] mb-5">
                            Tentang Kami
                        </h1>
                        <p className="text-[13px] font-poppins text-[#9F9F9F] font-normal leading-[22px]">
                            <strong className='text-[#6C6C6C]'>PT ANUGERAH MITRA PERKASA CONSULTING</strong> merupakan <br />
                            perusahaan jasa yang sudah berpengalaman di bidang <br />
                            perpajakan. Fokus kami adalah untuk memberikan pelayanan <br />
                            yang terbaik dan berkualitas kepada klien Berbekal dengan Kerja <br />
                            keras, kejujuran, dan komitmen yang baik, kami selalu memberikan <br />
                            arahan dan tuntunan terhadap klien akan pentingnya kepatuhan <br />
                            terhadap perpajakan yang berlaku di Indonesia.
                        </p>
                    </div>
                </div>
                <div className="w-[50%] flex items-end justify-end">
                    <img
                        src={About}
                        alt="About Image"
                        width="720"
                        height="405"
                        className="object-cover"
                    />
                </div>
            </section>

            {/* Fourth Content Section */}
            <section className="py-8 relative mb-12">
                <h1 className='font-poppins font-semibold text-[36px] text-[#414141] mb-10 text-center'>Partner Kami</h1>
                <div className='w-[817px] mx-auto'>
                    <div className='flex justify-between items-center'>
                        <img src={Partner1} alt="Partner" />
                        <img src={Partner2} alt="Partner" />
                        <img src={Partner3} alt="Partner" />
                        <img src={Partner4} alt="Partner" />
                        <img src={Partner5} alt="Partner" />
                    </div>
                    <div className='flex justify-between items-center'>
                        <img src={Partner6} alt="Partner" />
                        <img src={Partner7} alt="Partner" />
                        <img src={Partner8} alt="Partner" />
                        <img src={Partner9} alt="Partner" />
                    </div>
                    <div className='flex justify-between items-center'>
                        <img src={Partner10} alt="Partner" />
                        <img src={Partner11} alt="Partner" />
                        <img src={Partner12} alt="Partner" />
                        <img src={Partner13} alt="Partner" />
                    </div>
                </div>
                <Link to={""} className='block text-center mt-8 font-poppins font-semibold text-[14px] text-[#5E5B5B]'>See More</Link>
            </section>

            {/* Fifth Content Section */}
            <section className="py-8 relative mb-12">
                <h1 className='font-poppins font-semibold text-[36px] text-[#414141] mb-10 text-center'>Layanan Kami</h1>
                <div className="flex flex-col justify-center items-center">
                    {/* Grid 4 box di atas */}
                    <div className="grid grid-cols-4 gap-6 mb-8">
                        <Link to={"https://wa.me/6281298036123"} target='_blank' className="w-[237px] h-[184px] rounded-[20px] border border-[#BBBBBB] flex flex-col items-center justify-center gap-4 cursor-pointer hover:bg-[#F2F2F2]">
                            <img src={Service1} alt='Service' />
                            <h3 className='mb-0 font-poppins font-semibold text-[16px] text-[#414141] leading-[30px] text-center'>
                                Kepatuhan Perpajakan<br />
                                Untuk Korporasi
                            </h3>
                        </Link>
                        <Link to={"https://wa.me/6281298036123"} target='_blank' className="w-[237px] h-[184px] rounded-[20px] border border-[#BBBBBB] flex flex-col items-center justify-center gap-4 cursor-pointer hover:bg-[#F2F2F2]">
                            <img src={Service2} alt='Service' />
                            <h3 className='mb-0 font-poppins font-semibold text-[16px] text-[#414141] leading-[30px] text-center'>
                                Pelatihan<br />
                                Perpajakan
                            </h3>
                        </Link>
                        <Link to={"https://wa.me/6281298036123"} target='_blank' className="w-[237px] h-[184px] rounded-[20px] border border-[#BBBBBB] flex flex-col items-center justify-center gap-4 cursor-pointer hover:bg-[#F2F2F2]">
                            <img src={Service3} alt='Service' />
                            <h3 className='mb-0 font-poppins font-semibold text-[16px] text-[#414141] leading-[30px] text-center'>
                                Pemeriksaan Pajak,<br />
                                Keberatan & Banding
                            </h3>
                        </Link>
                        <Link to={"https://wa.me/6281298036123"} target='_blank' className="w-[237px] h-[184px] rounded-[20px] border border-[#BBBBBB] flex flex-col items-center justify-center gap-4 cursor-pointer hover:bg-[#F2F2F2]">
                            <img src={Service4} alt='Service' />
                            <h3 className='mb-0 font-poppins font-semibold text-[16px] text-[#414141] leading-[30px] text-center'>
                                Perencanaan<br />
                                Perpajakan
                            </h3>
                        </Link>
                    </div>

                    {/* Grid 3 box di bawah, posisinya di tengah */}
                    <div className="grid grid-cols-3 gap-6 justify-center">
                        <Link to={"https://wa.me/6281298036123"} target='_blank' className="w-[237px] h-[184px] rounded-[20px] border border-[#BBBBBB] flex flex-col items-center justify-center gap-4 cursor-pointer hover:bg-[#F2F2F2]">
                            <img src={Service5} alt='Service' />
                            <h3 className='mb-0 font-poppins font-semibold text-[16px] text-[#414141] leading-[30px] text-center'>
                                Konsultasi<br />
                                Perpajakan
                            </h3>
                        </Link>
                        <Link to={"https://wa.me/6281298036123"} target='_blank' className="w-[237px] h-[184px] rounded-[20px] border border-[#BBBBBB] flex flex-col items-center justify-center gap-4 cursor-pointer hover:bg-[#F2F2F2]">
                            <img src={Service6} alt='Service' />
                            <h3 className='mb-0 font-poppins font-semibold text-[16px] text-[#414141] leading-[30px] text-center'>
                                Asistensi Perpajakan<br />
                                Orang Pribadi
                            </h3>
                        </Link>
                        <Link to={"https://wa.me/6281298036123"} target='_blank' className="w-[237px] h-[184px] rounded-[20px] border border-[#BBBBBB] flex flex-col items-center justify-center gap-4 cursor-pointer hover:bg-[#F2F2F2]">
                            <img src={Service7} alt='Service' />
                            <h3 className='mb-0 font-poppins font-semibold text-[16px] text-[#414141] leading-[30px] text-center'>
                                Dokumen Transfer<br />
                                Pricing (TP doc)
                            </h3>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Sixth Content Section */}
            <section className="py-8 relative mb-12">
                <div className='w-[52%] mx-auto'>
                    <div className='grid grid-cols-2 gap-4'>
                        <div className=''>
                            <h2 className='font-poppins font-semibold text-[23px] leading-[31px] mb-5'>
                                MENYEDIAKAN SEGALA KEBUTUHAN<br />
                                PERPAJAKAN ANDA
                            </h2>
                            <img src={YourNeed} alt={"Your Need"} />
                        </div>
                        <div className='flex justify-end items-end'>
                            <p className='font-poppins font-normal text-[16px] leading-[29px]'>
                                Kami membantu Anda menghitung pajak
                                terutang dan menyiapkan SPT tahunan orang
                                pribadi, menghitung pajak terutang dan
                                menyiapkan SPT tahunan badan, menghitung
                                pajak terutang dan menyiapkan SPT terkait
                                pemotongan pajak bulanan dan PPN.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;