import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';
// import SOSFB from '../../assets/img/sos-fb.png';
// import SOSIG from '../../assets/img/sos-ig.png';
import SOSPHONE from '../../assets/img/why_first.png';
import SOSMAIL from '../../assets/img/sos-mail.png';
import SEND from '../../assets/img/send.png';

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [captchaVerified, setCaptchaVerified] = useState(false); // State untuk verifikasi captcha

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleCaptcha = (value: string | null) => {
        if (value) {
            setCaptchaVerified(true); // Captcha berhasil diverifikasi
        } else {
            setCaptchaVerified(false); // Captcha tidak valid
        }
    };

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!captchaVerified) {
            alert('Mohon verifikasi reCAPTCHA.');
            return;
        }

        emailjs
            .send(
                'YOUR_SERVICE_ID', // Ganti dengan EmailJS Service ID Anda
                'YOUR_TEMPLATE_ID', // Ganti dengan Template ID Anda
                {
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                },
                'YOUR_USER_ID' // Ganti dengan User ID Anda dari EmailJS (Public Key)
            )
            .then(
                (result) => {
                    console.log('Email sent successfully:', result.text);
                    alert('Pesan berhasil dikirim!');
                },
                (error) => {
                    console.error('Failed to send email:', error.text);
                    alert('Gagal mengirim pesan.');
                }
            );
    };

    return (
        <div className="md:min-h-screen flex items-center justify-center md:p-8">
            <div className='md:flex md:gap-4 w-full md:max-w-[844px] bg-white md:py-[3rem] md:px-[4rem] md:border md:border-[#C3C3C3] md:rounded-[25px]'>
                <div className='w-full md:w-[40%] md:pr-12'>
                    <h2 className="text-[24px] md:text-[30px] text-center md:text-left font-poppins font-semibold text-[#414141] leading-[45px] mb-6">Kontak Kami</h2>
                    <ul className="flex flex-col gap-2 md:gap-4 space-y-2 items-center md:items-start">
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
                <form className="w-[80%] md:w-[60%] border-l md:pl-12 mx-auto md:mx-0 mt-6 md:mt-0" onSubmit={sendEmail}>
                    {/* Input Nama Anda */}
                    <div className="mb-4">
                        <label className="block text-black text-[11px] font-poppins font-medium leading-[35px] ml-1" htmlFor="name">
                            Masukan Nama Anda
                        </label>
                        <input
                            className="w-full px-4 py-3 bg-[#F0F0F0] border border-[#CFCFCF] rounded-[10px] text-[#9C9C9C] focus:outline-none focus:border-blue-500 font-poppins font-medium text-[11px]"
                            id="name"
                            type="text"
                            name="name"
                            placeholder='Masukan Nama Anda'
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Input Email Anda */}
                    <div className="mb-4">
                        <label className="block text-black text-[11px] font-poppins font-medium leading-[35px] ml-1" htmlFor="email">
                            Masukan Email Anda
                        </label>
                        <input
                            className="w-full px-4 py-3 bg-[#F0F0F0] border border-[#CFCFCF] rounded-[10px] text-[#9C9C9C] focus:outline-none focus:border-blue-500 font-poppins font-medium text-[11px]"
                            id="email"
                            type="email"
                            name="email"
                            placeholder='Masukan Email Anda'
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Textarea Pesan Anda */}
                    <div className="mb-6">
                        <label className="block text-black text-[11px] font-poppins font-medium leading-[35px] ml-1" htmlFor="message">
                            Masukan Pesan Anda
                        </label>
                        <textarea
                            className="w-full px-4 py-3 bg-[#F0F0F0] border border-[#CFCFCF] rounded-[10px] text-[#9C9C9C] focus:outline-none focus:border-blue-500 font-poppins font-medium text-[11px]"
                            id="message"
                            name="message"
                            rows={4}
                            placeholder='Masukan Pesan Anda'
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>

                    {/* reCAPTCHA */}
                    <div className="mb-6 flex items-center justify-end">
                        <ReCAPTCHA
                            sitekey="YOUR_SITE_KEY" // Ganti dengan Site Key dari reCAPTCHA
                            onChange={handleCaptcha}
                        />
                    </div>

                    {/* Button Kirim */}
                    <div className="flex items-center justify-end mb-12 md:mb-0">
                        <button
                            className="bg-[#414141] hover:bg-[#5B5B5B] text-white text-[13px] font-poppins font-semibold py-4 px-14 rounded-[10px] focus:outline-none focus:shadow-outline relative"
                            type="submit"
                            disabled={!captchaVerified} // Disable button jika captcha belum diverifikasi
                        >
                            <img src={SEND} alt='Send' className='absolute left-4 top-2' />
                            <span className='block ml-3 text-[13px] md:text-[16px]'>Kirim</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;
