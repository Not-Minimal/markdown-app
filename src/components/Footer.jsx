'use client';

import React from 'react';
import { Footer } from 'flowbite-react';
import { BsGithub, BsInstagram } from 'react-icons/bs';
import './Footer.css';


export default function FooterWithSocialMediaIcons() {
    return (
        <Footer container className="footer-container">
            <div className="w-full">
                <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                    <div>
                        <Footer.Brand
                            alt="Flowbite Logo"
                            href="https://flowbite.com"
                            name="Markdown Merger"
                            src="https://flowbite.com/docs/images/logo.svg"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                        <div>
                            <Footer.Title title="about" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">
                                    Flowbite
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Tailwind CSS
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Follow us" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="https://youtube.com/@NotMinimal">
                                    Youtube
                                </Footer.Link>
                                <Footer.Link href="https://github.com/Not-Minimal">
                                    GitHub
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Legal" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">
                                    Privacy Policy
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Terms & Conditions
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
                <Footer.Divider />
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright
                        by="Minimal Services"
                        href="#"
                        year={2023}
                    />
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                        <Footer.Icon
                            href="https://www.instagram.com/nottminimal/"
                            icon={BsInstagram}
                        />
                        <Footer.Icon
                            href="https://github.com/Not-Minimal"
                            icon={BsGithub}
                        />

                    </div>
                </div>
            </div>
        </Footer>
    )
}