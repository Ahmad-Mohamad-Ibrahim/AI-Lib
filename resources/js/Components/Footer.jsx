import React from 'react';
import Logo from "../../images/logo-2.jpg";
import { UilFacebookF, UilTwitter, UilInstagram } from '@iconscout/react-unicons'

export default function Footer() {
    return (
        <footer className="min-h-[600px] bg-secondary flex flex-col py-24 px-4">
            <div className="flex flex-col lg:flex-row gap-8">

                <div className="flex flex-row-reverse lg:w-[30%] justify-end items-center gap-16">
                    <h4 class="font-bold text-2xl lg:text-4xl">AI Arsenal</h4>
                    <img width="64" height="64" src={Logo}
                        alt="Company Logo" />
                </div>
                <div className="flex flex-col gap-4 lg:max-w-[30%]">
                    <strong className="font-bold text-xl">About AI Arsenal</strong>

                    <p>
                        AI Tools Library is your go-to resource for discovering the latest and most popular AI tools, products, and software. Our mission is to empower developers, data scientists, and businesses by providing comprehensive information and reviews on a wide range of AI solutions.
                    </p>

                </div>

                <div className="flex flex-col gap-4">
                    <h5 className="font-bold text-xl px-4">Quick Links</h5>

                    <a className="footer-link" href="">
                        About Us
                    </a>
                    <a className="footer-link" href="">
                        AI tools
                    </a>
                    <a className="footer-link" href="">
                        Forum
                    </a>
                    <a className="footer-link" href="">
                        Contact
                    </a>
                    <a className="footer-link" href="">
                        Privacy Policy
                    </a>
                    <a className="footer-link" href="">
                        Terms of Service
                    </a>

                </div>


            </div>

            <div className="line mb-12 mt-32"></div>
            <div className="flex gap-8 justify-center items-center">
                <a href="#" target="_blank">
                    <UilFacebookF color="#ffffff"></UilFacebookF>

                </a>
                <a href="#" target="_blank">
                    <UilTwitter color="#ffffff" />

                </a>
                <a href="#" target="_blank">
                    <UilInstagram color="#ffffff" />
                </a>

            </div>

            <div className="text-center my-8">
                <p>&copy; 2024 AI Arsenal. All rights reserved.</p>
            </div>

        </footer>
    )
}
