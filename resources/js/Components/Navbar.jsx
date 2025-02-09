import NavLink from "./NavLink";
import LogoNoBg from "../../images/logo-2-no-bg.png";
import Image from "@/Components/Image"
import NavLinkMobile from "./NavLinkMobile";
import { Link, router } from "@inertiajs/react";
import { useState } from "react";
import adminPlaceholder from '../../images/admin-placeholder.jpeg';
import placeholder from '../../images/placeholder.jpeg';
import { UilTrashAlt } from '@iconscout/react-unicons';


export default function Navbar({ auth }) {
    // console.log(auth?.user?.notifications);
    const user = auth?.user ? auth?.user : null;
    const url = window.location.pathname;
    const [isMobNavHidden, setMobNavHidden] = useState(true);
    const [showNotification, setShowNotification] = useState(false);

    const toggleMobileMenu = () => {
        setMobNavHidden(!isMobNavHidden);
    }

    let userImage = null;

    // this is to remove the http://localhost:8000/storage/ that is by default there if the output is
    // "" then set userImage = "" or null else you set userImage = user.image
    if (user && user?.image) {
        userImage = !user.image.replace(window.location.protocol + '//' + window.location.host + '/storage/', '') ? "" : user.image;
    }
    const submit = (e) => {
        e.preventDefault();

        router.post(route('logout'));
    };
    return (
        <nav className="bg-secondary text-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <img className="h-16 w-16" src={LogoNoBg}
                                alt="Your Company" />
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <NavLink href={route('home')} active={url == "/"} >Home</NavLink>
                                <NavLink href={route('tools.index')} active={url == "/tools"}>Tools</NavLink>
                                <NavLink href={route('tools.create')} active={url == "/tools/publish"}>
                                    Publish your tool now
                                </NavLink>
                                <NavLink href={route('contact.create')} active={url == "/contact"}>Contact Us
                                </NavLink>
                                <NavLink href={route('gallery.index')} active={url == "/gallery"}>Gallery
                                </NavLink>

                            </div>
                        </div>
                    </div>

                    {user && <div className="hidden md:block">
                        <div className="ml-4 flex gap-5 items-center md:ml-6">
                            <button type="button"
                                onClick={() => { setShowNotification(!showNotification) }}
                                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                <span className="absolute -inset-1.5"></span>
                                <span className="sr-only">View notifications</span>
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                    stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                                </svg>
                            </button>
                            <div className="relative ml-3">
                                <Link href={route('profile.edit')}>
                                    <button type="button"
                                        className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                        id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                        <span className="absolute -inset-1.5"></span>
                                        <span className="sr-only">Open user menu</span>
                                        <Image className="h-8 w-8 rounded-full"
                                            src={userImage}
                                            fallback={user?.role === 'admin' ? adminPlaceholder : placeholder} alt="" />
                                    </button>
                                </Link>
                            </div>
                            <form onSubmit={submit}>
                                <input className="cursor-pointer p-6" type="submit" value="Logout" />
                            </form>

                        </div>
                    </div>

                    }

                    {
                        !auth?.user && <div className="hidden md:block">
                            <div className="ml-4 flex gap-8 items-center md:ml-6">

                                <NavLink href={route('login')} >Login</NavLink>
                                <NavLink href={route('register')}>Sign Up</NavLink>
                            </div>
                        </div>
                    }

                    <div className="-mr-2 flex md:hidden" onClick={toggleMobileMenu}>
                        <button type="button"
                            className="relative inline-flex items-center justify-center rounded-md bg-secondary p-2 text-gray-400 hover:bg-primary-tint-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                            aria-controls="mobile-menu" aria-expanded="false">
                            <span className="absolute -inset-0.5"></span>
                            <span className="sr-only">Open main menu</span>
                            <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                            <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>




                </div>
            </div>

            <div className={`${isMobNavHidden ? 'hidden' : ''} md:hidden`} id="mobile-menu">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                    <NavLinkMobile href="/" active={url == "/"}>Home</NavLinkMobile>
                    <NavLinkMobile href="/tools" active={url == "/tools"}>Tools</NavLinkMobile>
                    <NavLinkMobile href={route('tools.create')} active={url == "/tools/create"}>
                        Publish your tool now
                    </NavLinkMobile>
                    <NavLinkMobile href={route('contact.create')} active={url == "/contacts"}>Contact Us</NavLinkMobile>
                    <NavLinkMobile href={route('gallery.index')} active={url == "/contacts"}>Gallery</NavLinkMobile>

                    {
                        user && <div> <NavLinkMobile href={route('login')} >Login</NavLinkMobile>
                            <NavLinkMobile href={route('register')}>Sign Up</NavLinkMobile></div>
                    }

                </div>

                <div className="border-t border-gray-700 pb-3 pt-4">
                    {
                        user && <div className="flex items-center px-5 gap-5">
                            <div className="flex-shrink-0">
                                <Image className="h-10 w-10 rounded-full" src={userImage}
                                    fallback={user?.role === 'admin' ? adminPlaceholder : placeholder}
                                    alt="" />
                            </div>
                            <div className="ml-3">
                                <div className="text-base font-medium leading-none text-white">Lary Robot</div>
                                <div className="text-sm font-medium leading-none text-gray-400">lary@example.com</div>
                            </div>
                            <button type="button"
                                onClick={() => { setShowNotification(!showNotification) }}
                                className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                <span className="absolute -inset-1.5"></span>
                                <span className="sr-only">View notifications</span>
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                    stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                                </svg>
                            </button>
                            <form onSubmit={submit}>
                                <input className="cursor-pointer" type="submit" value="Logout" />
                            </form>
                        </div>
                    }
                </div>
            </div>
            {(auth?.user && showNotification) && <div className="
            bg-primary z-50 absolute right-[16%] mt-2 rounded-lg w-64 py-2 min-h-10
            max-h-[520px] overflow-y-auto no-scrollbar">
                {
                    auth?.notifications?.map((notification, index) => {
                        return <div className={"p-4  " + (notification.read_at ? 'bg-primary text-gray-500' : 'bg-primary-tint-900 text-white')}>
                            <Link
                                key={index} href={notification.data.link}
                                className="border-b-1 py-4 border-dashed border-white"
                            >
                                <h5 className="text-base lg:text-xl font-bold py-2">{notification.data.title}</h5>
                                <p>{notification.data.data}</p>

                            </Link>
                            <div className="p-2 mt-5 flex justify-around">
                                <button className="p-2 h-5 w-5"
                                    onClick={() => { router.delete(route('notification.destroy', notification.id)) }}>
                                    <UilTrashAlt className="text-red-500 w-5" />
                                </button>
                            </div>
                        </div>
                    })
                }
            </div>
            }
        </nav>
    )
}