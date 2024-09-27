import React from 'react';
import Why from '../../assets/img/why.png';
import WhyFirst from '../../assets/img/why_first.png';
import WhySecond from '../../assets/img/why_second.png';
import WhyThird from '../../assets/img/why_third.png';
import About from '../../assets/img/about.png';
import About2 from '../../assets/img/about-2.png';
import About3 from '../../assets/img/about-3.png';

const AboutPage: React.FC = () => {
    return (
        <div className="font-poppins">
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

            <section className="flex py-16 relative mb-12">
                <div className="w-[50%] flex items-start justify-start">
                    <img
                        src={About2}
                        alt="About Image"
                        width="720"
                        height="405"
                        className="object-cover"
                    />
                </div>
                <div className="w-[50%] pl-[10rem] relative">
                    <div className='absolute top-[3rem] left-[-15rem] bg-white box-shadow-about p-[40px]'>
                        <h1 className="font-poppins text-[36px] font-semibold text-[#414141] mb-5">
                            Visi
                        </h1>
                        <p className="text-[13px] font-poppins text-[#9F9F9F] font-normal leading-[22px]">
                            Menjadi perusahaan profesional di<br />
                            bidang perpajakan kelas dunia.
                        </p>
                    </div>
                </div>
            </section>

            <section className="flex py-16 relative mb-12">
                <div className="w-[50%] pl-[10rem] relative">
                    <div className='absolute top-[3rem] right-[-15rem] bg-white box-shadow-about p-[40px]'>
                        <h1 className="font-poppins text-[36px] font-semibold text-[#414141] mb-5">
                            Misi
                        </h1>
                        <p className="text-[13px] font-poppins text-[#9F9F9F] font-normal leading-[22px]">
                            Memberikan jasa perpajakan yang berkualitas<br />
                            dan kredibel sesuai peraturan perpajakan yang<br />
                            berlaku. Memberikan informasi terbaru terkait<br />
                            perpajakan secara tepat waktu. Memberikan<br />
                            solusi yang tepat dan komprehensif terhadap<br />
                            masalah perpajakan yang dihadapi oleh klien.<br />
                        </p>
                    </div>
                </div>
                <div className="w-[50%] flex items-end justify-end">
                    <img
                        src={About3}
                        alt="About Image"
                        width="720"
                        height="405"
                        className="object-cover"
                    />
                </div>
            </section>
        </div>
    );
};

export default AboutPage;