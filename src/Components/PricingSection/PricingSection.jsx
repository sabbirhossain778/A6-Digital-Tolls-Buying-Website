import React from 'react';
import { IoMdCheckmark } from "react-icons/io";


const PricingSection = () => {
    return (
        <div className='w-12/12 max-w-360 mx-auto'>
            <div className=' bg-white py-25 space-y-10'>

                <div className='flex flex-col text-center'>
                    <h2 className='font-extrabold text-5xl'>Simple, Transparent Pricing</h2>
                    <p className='text-[#627382] leading-10'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
                </div>

                <div className='w-10/12 mx-auto grid grid-cols-3 gap-7'>

                    <div className="card bg-base-100 shadow-sm">
                        <div className="card-body space-y-2">

                            <div className="">
                                <h2 className="text-2xl font-bold text-[#101727]">Premium</h2>
                                <p className='text-[#627382] leading-10'>Perfect for getting started</p>
                            </div>

                            <div className='flex items-end'>
                                <h3 className="text-4xl font-bold text-[#101727]">$0</h3>
                                <span>/Month</span>
                            </div>

                            <ul className="mt-6 flex flex-col gap-2 text-xs">
                            <li className='flex'>
                                <IoMdCheckmark className='text-green-600 text-xl'/>
                                <span>Access to 10 free tools</span>
                            </li>
                            <li className='flex'>
                                <IoMdCheckmark className='text-green-600 text-xl'/>
                                <span>Basic templates</span>
                            </li>
                            <li className='flex'>
                                <IoMdCheckmark className='text-green-600 text-xl'/>
                                <span>Community support</span>
                            </li>
                            <li className='flex'>
                                <IoMdCheckmark className='text-green-600 text-xl'/>
                                <span>1 project per month</span>
                            </li>
                            </ul>
                            <div className="mt-6">
                            <button className="btn btn-block rounded-3xl bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white">Get Started Free</button>
                            </div>
                        </div>
                    </div>

                    <div id='pricing-active-card' className="card bg-base-100 shadow-sm">
                        <div className="card-body space-y-2">

                            <div className="">
                                <span className="badge badge-xs badge-warning pricing-badge-gradient">Most Popular</span>
                                <h2 className="text-2xl font-bold text-white">Pro</h2>
                                <p className='text-[#ffffffb5] leading-10'>Best for professionals</p>
                            </div>

                            <div className='flex items-end'>
                                <h3 className="text-4xl font-bold text-white">$0</h3>
                                <span className='text-white'>/Month</span>
                            </div>

                            <ul className="mt-6 flex flex-col gap-2 text-xs text-white">
                            <li className='flex'>
                                <IoMdCheckmark className='text-white-600 text-xl'/>
                                <span>Access to 10 free tools</span>
                            </li>
                            <li className='flex'>
                                <IoMdCheckmark className='text-white-600 text-xl'/>
                                <span>Unlimited templates</span>
                            </li>
                            <li className='flex'>
                                <IoMdCheckmark className='text-white-600 text-xl'/>
                                <span>Priority support</span>
                            </li>

                            <li className='flex'>
                                <IoMdCheckmark className='text-white-600 text-xl'/>
                                <span>Unlimited projects</span>
                            </li>
                            <li className='flex'>
                                <IoMdCheckmark className='text-white-600 text-xl'/>
                                <span>Cloud sync</span>
                            </li>
                            <li className='flex'>
                                <IoMdCheckmark className='text-white-600 text-xl'/>
                                <span>Advanced analytics</span>
                            </li>
                            </ul>
                            <div className="mt-6">
                            <button className="btn btn-block font-bold rounded-3xl bg-white"><span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">Get Started Free</span></button>
                            </div>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-sm">
                        <div className="card-body space-y-2">

                            <div className="">
                                <h2 className="text-2xl font-bold text-[#101727]">Enterprise</h2>
                                <p className='text-[#627382] leading-10'>For teams and businesses</p>
                            </div>

                            <div className='flex items-end'>
                                <h3 className="text-4xl font-bold text-[#101727]">$99</h3>
                                <span>/Month</span>
                            </div>

                            <ul className="mt-6 flex flex-col gap-2 text-xs">
                            <li className='flex'>
                                <IoMdCheckmark className='text-green-600 text-xl'/>
                                <span>Everything in Pro</span>
                            </li>
                            <li className='flex'>
                                <IoMdCheckmark className='text-green-600 text-xl'/>
                                <span>Team collaboration</span>
                            </li>
                            <li className='flex'>
                                <IoMdCheckmark className='text-green-600 text-xl'/>
                                <span>Custom integrations</span>
                            </li>
                            <li className='flex'>
                                <IoMdCheckmark className='text-green-600 text-xl'/>
                                <span>Dedicated support</span>
                            </li>
                            <li className='flex'>
                                <IoMdCheckmark className='text-green-600 text-xl'/>
                                <span>SLA guarantee</span>
                            </li>
                            <li className='flex'>
                                <IoMdCheckmark className='text-green-600 text-xl'/>
                                <span>Custom branding</span>
                            </li>
                            </ul>
                            <div className="mt-6">
                            <button className="btn btn-block rounded-3xl bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white">Contact Sales</button>
                            </div>
                        </div>
                    </div>

                </div> 
            </div>
        </div>
    );
};

export default PricingSection;