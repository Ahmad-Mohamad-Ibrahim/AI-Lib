import React from 'react';
import Logo from "../../images/logo-2.jpg";
import { UilFacebookF, UilTwitter, UilInstagram } from '@iconscout/react-unicons'

export default function Footer() {
    return (
        <footer className="min-h-[600px] bg-secondary flex flex-col py-24 px-4">
            <div className="flex gap-8">

                <div className="flex w-[30%] items-center gap-16">
                    <h4 class="font-bold text-4xl">AI Arsenal</h4>
                    <img width="96" height="96" src={Logo}
                        alt="Company Logo" />
                </div>
                <div className="flex flex-col gap-4 max-w-[30%]">
                    <strong className="font-bold text-xl">About AI Arsenal</strong>

                    <p>
                        AI Tools Library is your go-to resource for discovering the latest and most popular AI tools, products, and software. Our mission is to empower developers, data scientists, and businesses by providing comprehensive information and reviews on a wide range of AI solutions.
                    </p>

                </div>

                <div className="flex flex-col gap-4">
                    <a href="">
                        <strong className="font-bold text-xl">Quick Links</strong>
                    </a>
                    <a href="">
                        About Us
                    </a>
                    <a href="">
                        AI tools
                    </a>
                    <a href="">
                        Forum
                    </a>
                    <a href="">
                        Contact
                    </a>
                    <a href="">
                        Privacy Policy
                    </a>
                    <a href="">
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

            <div class="text-center my-8">
                <p>&copy; 2024 AI Arsenal. All rights reserved.</p>
            </div>

        </footer>
    )
}
