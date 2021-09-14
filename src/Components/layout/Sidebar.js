import React from 'react';
import {Link} from "react-router-dom";

const Sidebar = () => {

    return (
        <>
            <div
                className="relative min-h-screen md:flex sm:relative translate-x-1 transition duration-500 ease-in-out">
                <div
                    className={'bg-gray-900 text-gray-300 w-80 space-y-6 px-2 py-7 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out '}>
                    <Link to="/"
                          className={'block py-2.5 px-4 flex items-center space-x-2 hover:bg-gray-500 rounded-lg transition duration-500 hover:text-white transform hover:-translate-y-1 hover:scale-110'}>
                        <svg xmlns="http://www.w3.org/2000/svg"
                             className="icon icon-tabler icon-tabler-currency-bitcoin" width="60" height="60"
                             viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round"
                             strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M6 6h8a3 3 0 0 1 0 6a3 3 0 0 1 0 6h-8"/>
                            <line x1="8" y1="6" x2="8" y2="18"/>
                            <line x1="8" y1="12" x2="14" y2="12"/>
                            <line x1="9" y1="3" x2="9" y2="6"/>
                            <line x1="13" y1="3" x2="13" y2="6"/>
                            <line x1="9" y1="18" x2="9" y2="21"/>
                            <line x1="13" y1="18" x2="13" y2="21"/>
                        </svg>
                        <span className={'text-xl text-white font-bold font-sans uppercase tracking-wide'}>Energy Web Bridge</span>
                    </Link>

                    <nav className={'flex items-center'}>
                        <div className={'flex-1 p-10 font-sans font-bold'}>
                            <Link to="/"
                                  className={'block py-2.5 px-4 flex items-center space-x-2 hover:bg-gray-500 rounded transition duration-200 hover:text-white transform hover:-translate-y-1 hover:scale-110'}>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     className="icon icon-tabler icon-tabler-home mr-3" width="30" height="30"
                                     viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none"
                                     strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <polyline points="5 12 3 12 12 3 21 12 19 12"/>
                                    <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"/>
                                    <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"/>
                                </svg>
                                HOME
                            </Link>
                            <Link to="/swap"
                                  className={'block py-2.5 px-4 flex items-center space-x-2 hover:bg-gray-500 rounded transition duration-200 hover:text-white transform hover:-translate-y-1 hover:scale-110'}>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     className="icon icon-tabler icon-tabler-exchange mr-3" width="30" height="30"
                                     viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff"
                                     fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <circle cx="5" cy="18" r="2"/>
                                    <circle cx="19" cy="6" r="2"/>
                                    <path d="M19 8v5a5 5 0 0 1 -5 5h-3l3 -3m0 6l-3 -3"/>
                                    <path d="M5 16v-5a5 5 0 0 1 5 -5h3l-3 -3m0 6l3 -3"/>
                                </svg>
                                SWAP
                            </Link>
                            <Link to="/transfer"
                                  className={'block py-2.5 px-4 flex items-center space-x-2 hover:bg-gray-500 rounded transition duration-200 hover:text-white transform hover:-translate-y-1 hover:scale-110'}>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     className="icon icon-tabler icon-tabler-route mr-3" width="30" height="30"
                                     viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff"
                                     fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <circle cx="6" cy="19" r="2"/>
                                    <circle cx="18" cy="5" r="2"/>
                                    <path d="M12 19h4.5a3.5 3.5 0 0 0 0 -7h-8a3.5 3.5 0 0 1 0 -7h3.5"/>
                                </svg>
                                TRANSFER
                            </Link>
                            <Link to="/pools"
                                  className={'block py-2.5 px-4 flex items-center space-x-2 hover:bg-gray-500 rounded transition duration-200 hover:text-white transform hover:-translate-y-1 hover:scale-110'}>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     className="icon icon-tabler icon-tabler-diamond mr-3" width="30" height="30"
                                     viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff"
                                     fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M6 5h12l3 5l-8.5 9.5a0.7 .7 0 0 1 -1 0l-8.5 -9.5l3 -5"/>
                                    <path d="M10 12l-2 -2.2l.6 -1"/>
                                </svg>
                                POOLS
                            </Link>
                            <Link to="/charts"
                                  className={'block py-2.5 px-4 flex items-center space-x-2 hover:bg-gray-500 rounded transition duration-200 hover:text-white transform hover:-translate-y-1 hover:scale-110'}>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     className="icon icon-tabler icon-tabler-chart-area-line mr-3" width="30"
                                     height="30"
                                     viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff"
                                     fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <polyline points="4 19 8 13 12 15 16 10 20 14 20 19 4 19"/>
                                    <polyline points="4 12 7 8 11 10 16 4 20 8"/>
                                </svg>
                                CHARTS
                            </Link>
                            <Link to="/zero-gravity"
                                  className={'block py-2.5 px-4 flex items-center space-x-2 hover:bg-gray-500 rounded transition duration-200 hover:text-white transform hover:-translate-y-1 hover:scale-110'}>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     className="icon icon-tabler icon-tabler-planet mr-3" width="30" height="30"
                                     viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff"
                                     fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path
                                        d="M18.816 13.58c2.292 2.138 3.546 4 3.092 4.9c-.745 1.46 -5.783 -.259 -11.255 -3.838c-5.47 -3.579 -9.304 -7.664 -8.56 -9.123c.464 -.91 2.926 -.444 5.803 .805"/>
                                    <circle cx="12" cy="12" r="7"/>
                                </svg>
                                ZERO GRAVITY
                            </Link>

                            <div className={'py-10'}>
                                <Link to="/buy-zero"
                                      className={'block py-2.5 px-4 flex items-center space-x-2 hover:bg-gray-500 rounded transition duration-200 hover:text-white transform hover:-translate-y-1 hover:scale-110'}>
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                         className="icon icon-tabler icon-tabler-currency-dollar mr-3" width="30"
                                         height="30"
                                         viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff"
                                         fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path
                                            d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2"/>
                                        <path d="M12 3v3m0 12v3"/>
                                    </svg>
                                    BUY ZERO
                                </Link>
                                <Link to="/more"
                                      className={'block py-2.5 px-4 flex items-center space-x-2 hover:bg-gray-500 rounded transition duration-200 hover:text-white transform hover:-translate-y-1 hover:scale-110'}>
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                         className="icon icon-tabler icon-tabler-menu-2 mr-3" width="30" height="30"
                                         viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff"
                                         fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <line x1="4" y1="6" x2="20" y2="6"/>
                                        <line x1="4" y1="12" x2="20" y2="12"/>
                                        <line x1="4" y1="18" x2="20" y2="18"/>
                                    </svg>
                                    MORE
                                </Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Sidebar;