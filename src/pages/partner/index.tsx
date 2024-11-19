import React from 'react';
import Partner1 from '../../assets/img/partner/abt.png';
import Partner2 from '../../assets/img/partner/cdi.png';
import Partner3 from '../../assets/img/partner/gas.png';
import Partner4 from '../../assets/img/partner/pua.png';
import Partner5 from '../../assets/img/partner/sip.png';
import Partner6 from '../../assets/img/partner/maa.png';
import Partner7 from '../../assets/img/partner/eci.png';
import Partner8 from '../../assets/img/partner/pg.png';

const PartnerPage: React.FC = () => {
    return (
        <div className="font-poppins">
            <section className="py-8 relative mb-12">
                <h1 className='font-poppins font-semibold text-[24px] md:text-[36px] text-[#414141] mb-10 text-center'>Partner Kami</h1>
                <div className='w-full md:w-[817px] mx-auto'>
                    <div className='grid md:grid-cols-4 grid-cols-1 p-12 md:p-0 gap-4 md:gap-6 mb-5'>
                        <img src={Partner1} alt="Partner" width={"100%"} />
                        <img src={Partner2} alt="Partner" width={"100%"} />
                        <img src={Partner3} alt="Partner" width={"100%"} />
                        <img src={Partner4} alt="Partner" width={"100%"} />
                        <img src={Partner5} alt="Partner" width={"100%"} />
                        <img src={Partner6} alt="Partner" width={"100%"} />
                        <img src={Partner7} alt="Partner" width={"100%"} />
                        <img src={Partner8} alt="Partner" width={"100%"} />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PartnerPage;