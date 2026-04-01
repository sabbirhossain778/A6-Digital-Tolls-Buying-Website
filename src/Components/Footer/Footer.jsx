import React from 'react';
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
    return (
        <div className='bg-[#101727] w-full max-w-360 mx-auto '>
            <div className='w-11/12 md:w-10/12 mx-auto pt-20 pb-8 space-y-20'>


                <div className='flex flex-col md:flex-row flex-wrap justify-between items-center md:items-start text-center md:text-left gap-10 lg:gap-4'>
                    
                    <div className='max-w-87.5 space-y-2'>
                        <h3 className='text-2xl font-bold text-white'>DigiTools</h3>
                        <p className='footer-text leading-8'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                    </div>

                    <div className='w-full md:w-auto'>
                        <h6 className='text-white text-xl font-semibold mb-4'>Product</h6>
                        <div className='leading-8'> 
                            <p className='footer-text'>Features</p>
                            <p className='footer-text'>Pricing</p>
                            <p className='footer-text'>Templates</p>
                            <p className='footer-text'>Integrations</p>
                        </div>
                    </div>

                    <div className='w-full md:w-auto'>
                        <h6 className='text-white text-xl font-semibold mb-4'>Company</h6>
                        <div className='leading-8'>
                            <p className='footer-text'>About</p>
                            <p className='footer-text'>Blog</p>
                            <p className='footer-text'>Careers</p>
                            <p className='footer-text'>Press</p>
                        </div>
                    </div>

                    <div className='w-full md:w-auto'>
                        <h6 className='text-white text-xl font-semibold mb-4'>Resources</h6>
                        <div className='leading-8'> 
                            <p className='footer-text'>Documentation</p>
                            <p className='footer-text'>Help Center</p>
                            <p className='footer-text'>Community</p>
                            <p className='footer-text'>Contact</p>
                        </div>
                    </div>

                    <div className='space-y-4 flex flex-col items-center md:items-start'>
                        <h6 className='text-white text-xl font-semibold'>Social Links</h6>
                        <span className='flex gap-2.5 justify-center'>
                            <FaInstagramSquare className='bg-white text-black w-8 h-8 p-2 rounded-full cursor-pointer hover:scale-110 transition-transform' />
                            <FaFacebookSquare className='bg-white text-black w-8 h-8 p-2 rounded-full cursor-pointer hover:scale-110 transition-transform' />
                            <FaXTwitter className='bg-white text-black w-8 h-8 p-2 rounded-full cursor-pointer hover:scale-110 transition-transform' />
                        </span>
                    </div>
                </div>

                <div>
                    <div className="dotted-divider mb-8"></div>
                    <div className='flex flex-col-reverse md:flex-row justify-between items-center gap-6 text-center md:text-left'>
                        <div>
                            <p className='footer-text'>© 2026 Digitools. All rights reserved.</p>
                        </div>
                        <div className='flex flex-wrap justify-center gap-6'>
                            <p className='footer-text cursor-pointer hover:text-white'>Privacy Policy</p>
                            <p className='footer-text cursor-pointer hover:text-white'>Terms of Service</p>
                            <p className='footer-text cursor-pointer hover:text-white'>Cookies</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Footer;