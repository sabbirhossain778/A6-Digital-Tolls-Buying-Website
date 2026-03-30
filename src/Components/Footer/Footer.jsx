import React from 'react';
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
    return (
        <div className='bg-[#101727] w-12/12 max-w-360 mx-auto mb-20'>
            <div className='w-10/12 mx-auto pt-20 pb-8 max-w-360 space-y-20'>

                <div className='flex justify-between gap-4'>
                    <div className='max-w-87.5 space-y-2'>
                        <h3 className='text-2xl font-bold text-white'>DigiTools</h3>
                        <p className='footer-text leading-8'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                    </div>
                    <div>
                        <h6 className='text-white text-xl'>Product</h6>
                        <div className='leading-8'> 
                            <p className='footer-text'>Features</p>
                            <p className='footer-text'>Pricing</p>
                            <p className='footer-text'>Templates</p>
                            <p className='footer-text'>Integrations</p>
                        </div>
                    </div>
                    <div>
                        <h6 className='text-white text-xl leading-8'>Company</h6>
                        <div className='leading-8'>
                        <p className='footer-text'>About</p>
                        <p className='footer-text'>Blog</p>
                        <p className='footer-text'>Careers</p>
                        <p className='footer-text'>Press</p>
                        </div>
                    </div>
                    <div>
                        <h6 className='text-white text-xl'>Resources</h6>
                        <div className='leading-8'> 
                        <p className='footer-text'>Documentation</p>
                        <p className='footer-text'>Help Center</p>
                        <p className='footer-text'>Community</p>
                        <p className='footer-text'>Contact</p>
                        </div>
                    </div>
                    <div className='space-y-2'>
                        <h6 className='text-white text-xl leading-8'>Social Links</h6>
                        <span className='flex gap-2.5'>
                        <FaInstagramSquare className='bg-white w-8
                        h-8 p-2 rounded-full' />
                        <FaFacebookSquare className='bg-white w-8
                        h-8 p-2 rounded-full' />
                        <FaXTwitter className='bg-white w-8
                        h-8 p-2 rounded-full' />
                        </span>
                    </div>
                </div>

                <div>
                    <div className="dotted-divider"></div>
                    <div className='flex justify-between'>
                        <div>
                            <p className='footer-text'>© 2026 Digitools. All rights reserved.</p>
                        </div>
                        <div className='flex justify-between gap-4'>
                            <p className='footer-text'>Privacy Policy</p>
                            <p className='footer-text'>Terms of Service</p>
                            <p className='footer-text'>Cookies</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Footer;