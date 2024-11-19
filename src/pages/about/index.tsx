import React from 'react';
import Why from '../../assets/img/why.png';
import WhyFirst from '../../assets/img/why_first.png';
import WhySecond from '../../assets/img/why_second.png';
import WhyThird from '../../assets/img/why_third.png';
import About from '../../assets/img/about.png';
import About2 from '../../assets/img/about-2.png';
import Misi from '../../assets/img/misi.png';

const AboutPage: React.FC = () => {
    return (
        <div className="font-poppins">
            <section className="container mx-auto md:py-16 py-8 px-8">
                <div className="md:flex md:justify-between md:items-center">
                    <div className="hidden md:flex md:w-1/2 items-end justify-end md:pr-[4rem]">
                        <img
                            src={Why}
                            alt="Why Choose Us Image"
                            width="380"
                            height="457"
                            className="object-cover"
                        />
                    </div>
                    <div className="md:w-1/2 md:pl-[2rem]">
                        <h2 className="font-poppins text-[#414141] mb-5 text-[20px] text-center md:text-left md:text-[36px] font-semibold">
                            Mengapa Memilih Kami?
                        </h2>
                        <div className="mt-8 space-y-6">
                            {/* First Box */}
                            <div className="flex items-start">
                                <img src={WhyThird} alt="Why" className='me-3 mt-1' />
                                <div className="ml-2">
                                    <p className="font-poppins text-[14px] font-semibold text-[#414141] mb-2">Konsultan Pajak Berpengalaman</p>
                                    <p className="font-roboto font-normal text-[13px] text-[#5E5B5B]">
                                        Tim kami terdiri dari konsultan pajak profesional dengan<br />
                                        pengalaman bertahun-tahun dalam menangani berbagai<br />
                                        kasus pajak, baik untuk individu maupun perusahaan.
                                    </p>
                                </div>
                            </div>

                            {/* Second Box */}
                            <div className="flex items-start">
                                <img src={WhySecond} alt="Why" className='me-3 mt-1' />
                                <div className="ml-2">
                                    <p className="font-poppins text-[14px] font-semibold text-[#414141] mb-2">Pemahaman Mendalam</p>
                                    <p className="font-roboto font-normal text-[13px] text-[#5E5B5B]">
                                        Kami selalu mengikuti perkembangan terbaru dalam regulasi<br />
                                        perpajakan, memastikan klien kami selalu berada di jalur yang<br />
                                        benar dan mematuhi hukum pajak yang berlaku.
                                    </p>
                                </div>
                            </div>

                            {/* Third Box */}
                            <div className="flex items-start">
                                <img src={WhySecond} alt="Why" className='me-3 mt-1' />
                                <div className="ml-2">
                                    <p className="font-poppins text-[14px] font-semibold text-[#414141] mb-2">Pendekatan Solusi yang Personal</p>
                                    <p className="font-roboto font-normal text-[13px] text-[#5E5B5B]">
                                        Setiap klien memiliki kebutuhan yang unik. Kami menyediakan<br />
                                        solusi pajak yang disesuaikan secara spesifik untuk memenuhi<br />
                                        kebutuhan bisnis Anda.
                                    </p>
                                </div>
                            </div>

                            {/* Fourth Box */}
                            <div className="flex items-start">
                                <img src={WhyFirst} alt="Why" className='me-3 mt-1' />
                                <div className="ml-2">
                                    <p className="font-poppins text-[14px] font-semibold text-[#414141] mb-2">Layanan Cepat dan Tepat Waktu</p>
                                    <p className="font-roboto font-normal text-[13px] text-[#5E5B5B]">
                                        Kami berkomitmen untuk memberikan layanan perpajakan<br />
                                        yang cepat, akurat, dan tepat waktu, sehingga Anda tidak<br />
                                        perlu khawatir tentang keterlambatan atau penalti.
                                    </p>
                                </div>
                            </div>

                            {/* Fifth Box */}
                            <div className="flex items-start">
                                <img src={WhySecond} alt="Why" className='me-3 mt-1' />
                                <div className="ml-2">
                                    <p className="font-poppins text-[14px] font-semibold text-[#414141] mb-2">Transparansi dan Integritas</p>
                                    <p className="font-roboto font-normal text-[13px] text-[#5E5B5B]">
                                        Kami bekerja dengan prinsip transparansi penuh dalam setiap<br />
                                        layanan yang kami tawarkan. Semua biaya dan proses<br />
                                        dijelaskan dengan jelas tanpa ada biaya tersembunyi.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="md:flex md:py-16 relative mb-3">
                <div className="md:w-[50%] md:pl-[10rem] relative">
                    <div className='md:absolute md:top-[3rem] md:right-[-15rem] text-center md:text-left bg-white md:box-shadow-about p-[20px] md:p-[40px]'>
                        <h1 className="font-poppins text-[24px] md:text-[36px] font-semibold text-[#414141] mb-5">
                            Tentang Kami
                        </h1>
                        <p className="md:text-[13px] text-[11px] font-poppins text-[#9F9F9F] font-normal leading-[22px]">
                            <strong className='text-[#6C6C6C]'>PT ANUGERAH MITRA PERKASA CONSULTING</strong> adalah <br />
                            perusahaan konsultan pajak yang berbasis di Indonesia, <br />
                            yang berfokus pada penyediaan solusi perpajakan yang <br />
                            terintegrasi untuk membantu klien memenuhi kewajiban <br />
                            pajak mereka secara tepat waktu dan sesuai dengan <br />
                            peraturan yang berlaku. Sejak didirikan pada tahun 2022,<br />
                            kami telah melayani berbagai klien, mulai dari usaha kecil<br />
                            hingga perusahaan besar, di berbagai sektor industri.
                        </p>
                    </div>
                </div>
                <div className="hidden md:w-[50%] md:flex md:items-end md:justify-end">
                    <img
                        src={About}
                        alt="About Image"
                        width="720"
                        height="405"
                        className="object-cover"
                    />
                </div>
            </section>

            <section className="md:flex py-0 relative mb-12">
                <div className="md:w-[50%] md:mx-auto md:relative">
                    <div className='bg-white md:box-shadow-about p-[30px] md:p-[40px]'>
                        <p className="text-[13px] font-poppins text-[#9F9F9F] font-normal leading-[22px] mb-4">
                            <strong>Charlie Thyawarta</strong> adalah pendiri dan pimpinan <strong>PT Anugerah Mitra Perkasa Consulting</strong>,<br />
                            dengan lebih dari 18 tahun pengalaman di bidang perpajakan dan keuangan. Beliau telah<br />
                            membangun reputasi sebagai salah satu konsultan pajak di Indonesia, berkat pemahaman<br />
                            mendalamnya tentang regulasi pajak nasional dan internasional, serta kemampuannya<br />
                            dalam memberikan solusi yang tepat dan efisien bagi para klien.
                        </p>
                        <p className="text-[13px] font-poppins text-[#9F9F9F] font-normal leading-[22px]">
                            Selama kariernya, Bapak <strong>Charlie Thyawarta</strong> telah menangani berbagai kasus perpajakan<br />
                            kompleks untuk perusahaan nasional di berbagai sektor industri. Keahlian beliau mencakup<br />
                            perencanaan pajak strategis, audit pajak, serta penyelesaian sengketa pajak. Dengan<br />
                            dedikasi yang tinggi terhadap integritas dan kualitas layanan, beliau selalu memastikan<br />
                            bahwa tim <strong>PT Anugerah Mitra Perkasa Consulting</strong> memberikan pelayanan terbaik untuk setiap<br />
                            klien. Komitmen beliau untuk terus meningkatkan kualitas tim dan menjaga kepuasan klien<br />
                            telah menjadi landasan dari kesuksesan perusahaan selama bertahun-tahun.
                        </p>
                    </div>
                </div>
            </section>

            <section className="md:flex md:py-16 relative mb-12">
                <div className="hidden md:w-[50%] md:flex md:items-start md:justify-start">
                    <img
                        src={About2}
                        alt="About Image"
                        width="720"
                        height="405"
                        className="object-cover"
                    />
                </div>
                <div className="md:w-[50%] md:pl-[10rem] relative">
                    <div className='md:absolute md:top-[3rem] md:left-[-15rem] text-center md:text-left bg-white md:box-shadow-about p-[20px] md:p-[40px]'>
                        <h1 className="font-poppins text-[24px] md:text-[36px] font-semibold text-[#414141] mb-5">
                            Visi
                        </h1>
                        <p className="md:text-[13px] text-[11px] font-poppins text-[#9F9F9F] font-normal leading-[22px]">
                            Menjadi mitra terpercaya dalam penyediaan<br />
                            solusi perpajakan yang inovatif dan berkualitas,<br />
                            serta mendukung kepatuhan pajak yang optimal<br />
                            bagi perusahaan dan individu di Indonesia, untuk<br />
                            menciptakan kontribusi signifikan terhadap<br />
                            pembangunan ekonomi yang berkelanjutan.
                        </p>
                    </div>
                </div>
            </section>

            <section className="container mx-auto py-16 px-8">
                <div className="md:flex md:justify-between md:items-center">
                    <div className="hidden md:w-1/2 md:flex items-end justify-end md:pr-[4rem]">
                        <img
                            src={Misi}
                            alt="Why Choose Us Image"
                            width="380"
                            height="457"
                            className="object-cover"
                        />
                    </div>
                    <div className="md:w-1/2 md:pl-[2rem]">
                        <h2 className="font-poppins text-[#414141] mb-5 text-[20px] text-center md:text-left md:text-[36px] font-semibold">
                            Misi
                        </h2>
                        <div className="mt-8 space-y-6">
                            {/* First Box */}
                            <div className="flex items-start">
                                <img src={WhyThird} alt="Misi" className='me-3 mt-1' />
                                <div className="ml-2">
                                    <p className="font-poppins font-normal text-[13px] text-[#5E5B5B]">
                                        <strong>Memberikan layanan konsultasi pajak yang komprehensif <br />
                                            dan tepat waktu,</strong> sehingga klien dapat memenuhi kewajiban <br />
                                        perpajakan mereka dengan mudah dan efisien.
                                    </p>
                                </div>
                            </div>

                            {/* Second Box */}
                            <div className="flex items-start">
                                <img src={WhyThird} alt="Misi" className='me-3 mt-1' />
                                <div className="ml-2">
                                    <p className="font-poppins font-normal text-[13px] text-[#5E5B5B]">
                                        <strong>Mengutamakan profesionalisme dan integritas dalam <br />
                                            setiap aspek layanan,</strong> memastikan bahwa klien menerima <br />
                                        solusi yang sesuai dengan regulasi perpajakan yang berlaku.
                                    </p>
                                </div>
                            </div>

                            {/* Third Box */}
                            <div className="flex items-start">
                                <img src={WhyThird} alt="Misi" className='me-3 mt-1' />
                                <div className="ml-2">
                                    <p className="font-poppins font-normal text-[13px] text-[#5E5B5B]">
                                        <strong>Membantu klien mengoptimalkan perencanaan pajak</strong><br />
                                        meminimalkan beban untuk pajak secara sah, tanpa melanggar <br />
                                        peraturan, melalui strategi yang efektif dan efisien.
                                    </p>
                                </div>
                            </div>

                            {/* Fourth Box */}
                            <div className="flex items-start">
                                <img src={WhyThird} alt="Misi" className='me-3 mt-1' />
                                <div className="ml-2">
                                    <p className="font-poppins font-normal text-[13px] text-[#5E5B5B]">
                                        <strong>Meningkatkan pengetahuan dan kompetensi tim<br />
                                            secara berkelanjutan </strong> melalui pelatihan dan pemahaman <br />
                                        terbaru tentang undang-undang perpajakan di Indonesia dan <br />
                                        internasional.
                                    </p>
                                </div>
                            </div>

                            {/* Fifth Box */}
                            <div className="flex items-start">
                                <img src={WhyThird} alt="Misi" className='me-3 mt-1' />
                                <div className="ml-2">
                                    <p className="font-poppins font-normal text-[13px] text-[#5E5B5B]">
                                        <strong>Mengembangkan teknologi dan inovasi dalam perpajakan,</strong><br />
                                        layanan memanfaatkan sistem digital untuk meningkatkan<br />
                                        efisiensi, keakuratan, kenyamanan bagi klien.
                                    </p>
                                </div>
                            </div>

                            {/* Sixth Box */}
                            <div className="flex items-start">
                                <img src={WhyThird} alt="Misi" className='me-3 mt-1' />
                                <div className="ml-2">
                                    <p className="font-poppins font-normal text-[13px] text-[#5E5B5B]">
                                        <strong>Membangun hubungan jangka panjang dengan berdasarkan<br />
                                            klien</strong> kepercayaan, akuntabilitas, dan pelayanan yang<br />
                                        berfokus pada kepuasan pelanggan, serta menjaga kerahasiaan <br />
                                        dan keamanan data klien.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className="flex py-16 relative mb-12">
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
            </section> */}
        </div>
    );
};

export default AboutPage;