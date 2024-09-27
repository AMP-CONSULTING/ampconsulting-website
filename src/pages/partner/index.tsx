import React from 'react';
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

const PartnerPage: React.FC = () => {
    return (
        <div className="font-poppins">
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
            </section>
        </div>
    );
};

export default PartnerPage;