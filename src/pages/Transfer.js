import React, {useState} from 'react';
import MyModal from "../Components/layout/MyModal";
import EwcModal from "../Components/layout/EwcModal";
import {Link} from "react-router-dom";

const Transfer = () => {

    const [isFlipped, setIsFlipped] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [lModal, setLModal] = useState(false)
    const [ewcModal, setEwcModal] = useState(false)


    return (
        <>
            <MyModal showModal={showModal}>



                    <div className={'flex flex-row p-5 bg-gray-200 rounded-lg'}>
                        <div className={'flex flex-row flex-col md:flex-col justify-center'}>
                            <img src="/img/barCode.jpeg" alt="bg" className={'h-24 w-24 my-8 md:h-44 md:w-44 lg:h-52 lg:w-52'}/>
                        </div>
                        <div className={'flex flex-col space-y-8 lg:space-y-0 md:space-y-0 justify-center items-center'}>
                            <p className={'text-xl text-gray-400 font-sans m-4 text-justify'}>Please pay the following
                                invoice with your Ligtning Wallet</p>
                            <span className={'mx-4'}>in373256879598..</span>
                            <img src="/img/smImage.jpg" alt="image" className={'w-14 h-14 mx-4 my-2'}/>

                            <p className={'text-xl text-gray-400 font-sans m-4 text-justify'}>You will receive 100 stats on EW</p>
                            <div className="flex flex-row justify-center">
                                <button
                                    className={'px-20 py-3 sm:px-10 sm:py-2 md:px-16 md:py-2 font-bold font-sans text-xl shadow-lg text-gray-200 rounded-full bg-gray-800 hover:bg-gray-700 transition duration-500'}
                                    onClick={() => setShowModal(false)}>Cancel
                                </button>
                            </div>
                        </div>
                    </div>

            </MyModal>

            <EwcModal showModal={ewcModal}>
                <div className={'flex flex-col lg:flex-row md:flex-row md:p-6 lg:p-8 xl:p-14 bg-gray-200 rounded-lg'}>
                <div className={'flex flex-row md:flex-col justify-center lg:m-8 '}>
                    <img src="/img/barCode.jpeg" alt="bg" className={'h-24 w-24 my-8 md:h-40 md:w-40 lg:h-52 lg:w-52'}/>
                </div>
                <div className={'flex flex-col sm:flex-col space-y-4 lg:py-10 justify-between sm:justify-center'}>
                    <h1 className={'font-bold text-2xl font-sans mx-4 md:space-y-2 text-center'}>EWC -> Lightning</h1>
                    <p className={'text-xl text-gray-400 font-sans text-justify lg:mx-4 md:mx-4 mx-4'}>To receive 100 Sats. Scan this QR Code or click on it.</p>

                    <div className="flex flex-col lg:flex-row md:flex-row pb-6 lg:justify-around xl:justify-around justify-center items-center">
                        <button
                            className={'px-10 py-2 lg:px-20 lg:py-3 md:px-10 md:py-2 md:mx-4 md:my-3 m-2 text-center font-bold font-sans text-xl shadow-lg text-gray-200 rounded-full bg-gray-800 hover:bg-gray-700 transition duration-500'}
                            onClick={() => setEwcModal(false)}>Back
                        </button>
                        <Link to={'#'}
                            className={'px-10 py-2 lg:px-20 lg:py-3 md:px-10 md:py-2 md:mx-4 md:my-3 m-2 text-center font-bold font-sans text-xl shadow-lg text-gray-200 rounded-full bg-gray-800 hover:bg-gray-700 transition duration-500'}
                            onClick={() => setEwcModal(false)}>LNURL
                        </Link>
                    </div>
                </div>
            </div>

            </EwcModal>


            <div className="flex md:h-full bg-gray-800 justify-center items-center">
                <div
                    className="flex flex-col sm:p-0 md:p-8 shadow-xl bg-gray-700 sm:rounded-2xl ">
                    <div className="flex flex-col items-center p-8 rounded-2xl">
                        <h1 className="sm:font-bold font-sans text-gray-200 leading-none xl:text-4xl text-4xl mb-2 mx-auto items-center tracking-widest">Cross-Chain
                            Bridge</h1>
                        <p className="text-gray-300 font-sans xl:text-2xl sm:tracking-widest">Transfer your Token from
                            One
                            Block
                            Chain to
                            Another</p>
                    </div>
                    <div
                        className="md:flex sm:flex-row w-full justify-center items-center text-center xl:space-x-10 lg:space-x-8">

                        {
                            isFlipped ?
                                <div
                                    className="md:flex mx-24 md:p-0 md:m-0 flex-col md:p-5 lg:p-7 xl:p-10 justify-center items-center bg-gray-800 rounded-2xl">
                                    <p className={'text-white text-xl font-sans p-2 text-gray-300'}>Destination
                                        BlockChain</p>
                                    <div
                                        className={'flex p-8 md:flex-col md:p-0 lg:flex-row items-center md:justify-center md:space-y-5 space-x-5 lg:space-x-4'}>
                                        <div
                                            className="w-20 h-20 bg-white hover:bg-gray-300 rounded-full transition duration-200 transform hover:-translate-y-1 hover:scale-110">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                 className="h-20 w-20 p-4 cursor-pointer"
                                                 fill="none"
                                                 viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                                            </svg>
                                        </div>
                                        <p className={'text-white text-xl font-sans text-gray-300 font-bold'}>Destination
                                            Chain</p>
                                    </div>
                                </div>
                                :
                                <div
                                    className="md:flex mx-24 md:m-0 md:p-5 lg:p-7 xl:p-10 flex-col md:justify-center items-center bg-gray-800 rounded-2xl">
                                    <p className={'text-white text-xl font-sans text-gray-300 p-2'}>Current
                                        BlockChain</p>
                                    <div
                                        className={'flex p-8 md:p-0 md:flex-col md:justify-center items-center lg:flex-row md:space-y-5 space-x-4 lg:space-x-4'}>
                                        <div
                                            className="w-20 h-20 bg-purple-600 hover:bg-purple-800 rounded-full transition duration-200 transform hover:-translate-y-1 hover:scale-110">
                                            <button onClick={() => setEwcModal(true)}>
                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                     className="h-20 w-20 p-4 cursor-pointer"
                                                     viewBox="0 0 20 20"
                                                     fill="orange">
                                                    <path fillRule="evenodd"
                                                          d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                                                          clipRule="evenodd"/>
                                                </svg>
                                            </button>
                                        </div>
                                        <p className={'text-white text-xl font-sans text-gray-300 font-bold'}>Lightning
                                            Network</p>
                                    </div>
                                </div>
                        }


                        {
                            isFlipped ?
                                <div onClick={() => setIsFlipped(!isFlipped)}
                                     className={'flex flex-row justify-center m-2'}>
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                         className="icon icon-tabler icon-tabler-chevron-right cursor-pointer"
                                         width="50" height="50" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff"
                                         fill="none"
                                         strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <polyline points="9 6 15 12 9 18"/>
                                    </svg>
                                </div> :
                                <div onClick={() => setIsFlipped(!isFlipped)}
                                     className={'flex flex-row justify-center m-2'}>
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                         className="icon icon-tabler icon-tabler-chevron-leftc cursor-pointer"
                                         width="50" height="50" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff"
                                         fill="none"
                                         strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <polyline points="15 6 9 12 15 18"/>
                                    </svg>
                                </div>
                        }


                        {
                            isFlipped ?
                                <div
                                    className="md:flex mx-24 md:m-0 md:p-5 lg:p-7 xl:p-10 flex-col justify-center items-center bg-gray-800 rounded-2xl">
                                    <p className={'text-white text-xl font-sans text-gray-300 p-2'}>Current
                                        BlockChain</p>
                                    <div
                                        className={'flex p-8 md:p-0 md:flex-col md:justify-center items-center lg:flex-row md:space-y-5 space-x-4 lg:space-x-4'}>
                                        <div
                                            className="w-20 h-20 bg-purple-600 hover:bg-purple-800 rounded-full transition duration-200 transform hover:-translate-y-1 hover:scale-110">
                                            <button onClick={() => setEwcModal(true)}>
                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                     className="h-20 w-20 p-4 cursor-pointer"
                                                     viewBox="0 0 20 20"
                                                     fill="orange">
                                                    <path fillRule="evenodd"
                                                          d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                                                          clipRule="evenodd"/>
                                                </svg>
                                            </button>
                                        </div>
                                        <p className={'text-white text-xl font-sans text-gray-300 font-bold'}>Lightning
                                            Network</p>
                                    </div>
                                </div> :
                                <div
                                    className="md:flex mx-24 md:p-0 m-10 md:m-0 flex-col md:p-5 lg:p-7 xl:p-10 text-center justify-center items-center bg-gray-800 rounded-2xl">
                                    <p className={'text-white text-xl font-sans p-2 text-gray-300'}>Destination
                                        BlockChain</p>
                                    <div
                                        className={'flex p-8 md:flex-col md:p-0 lg:flex-row items-center md:justify-center md:space-y-5 space-x-4 lg:space-x-4'}>
                                        <div
                                            className="w-20 h-20 bg-white hover:bg-gray-300 rounded-full transition duration-200 transform hover:-translate-y-1 hover:scale-110">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                 className="h-20 w-20 p-4 cursor-pointer"
                                                 fill="none"
                                                 viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                                            </svg>
                                        </div>
                                        <p className={'text-white text-xl font-sans text-gray-300 font-bold'}>Destination
                                            Chain</p>
                                    </div>
                                </div>
                        }

                    </div>


                    <div className="flex flex-col mx-24 my-10 md:mx-0 sm:mt-10 p-10 bg-gray-800 rounded-2xl">
                        <p className={'text-white text-xl font-sans mb-8 text-gray-300'}>Choose Your Amount:</p>
                        <div
                            className={'flex flex-row md:flex flex-col lg:flex-row text-center items-center space-y-4 sm:space-x-5'}>
                            <label htmlFor="price">
                                <input type="number"
                                       className={'xl:px-10 px-3 xl:py-3 py-2 bg-gray-600 text-white md:text-2xl lg:text-xl sm:text-medium font-sans font-bold focus:outline-none focus:ring-2 focus:ring-purple-400 border border-purple-400 xl:focus:ring-2 xl:focus:ring-purple-400 xl:border border-purple-400 rounded-lg'}/>
                            </label>
                            <p className={'text-gray-300 font-sans font-bold'}>SATS</p>
                            <button onClick={() => setShowModal(true)}
                                    className={'px-8 py-4 bg-purple-600 hover:bg-purple-800 rounded-full text-gray-100 font-sans text-bold'}>TRANSFER
                            </button>
                        </div>
                    </div>
                    <div
                        className={'flex flex-row xl:justify-end lg:justify-end md:justify-center justify-center pb-6'}>
                        <span className={'text-gray-300 font-sans font-bold'}>Fee: 5 Sats</span>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Transfer;
