import React, { useState } from 'react'
import Container from '../components/Container'
import SpeechToText from '../components/SpeechToText'

import TesseractTest from '../components/TesseractTest'

import ScrollArea from 'react-scrollbar'
import chair from '../images/chair.png'
import { BillSplitter } from '../components/billSplitter'
import { Link } from 'react-router-dom'

function SecondScreen() {
    const [note, setNote] = useState('')

    const handleTranscribe = (e, x) => {
        e.preventDefault();
        console.log(x);
    }

    return (
        <Container>


            <div className="absolute w-full h-full bg-pgray z-10"></div>
            <div className="content absolute top-0 left-0 w-full h-full z-30 font-lato ">

                <div className="w-full px-12 mt-16 flex flex-col justify-center items-center ">
                    <ScrollArea speed={0.4}
                        className="w-full"
                        contentClassName="content"
                        style={{ height: '705px' }}
                        horizontal={false}
                        vertical={true}

                    >

                        <div className="">
                            <div className="flex flex-row justify-between items-center text-xl mt-4">

                                <i class="fas fa-long-arrow-alt-left "></i>
                                <i class="fas fa-utensils text-5xl bg-yellow-300 px-6 py-4 rounded-full"></i>
                                <i class="fas fa-bars "></i>
                            </div>
                        </div>



                        <div className="grid grid-cols-2 bg-white shadow-lg px-2 py-4 gap-2 text-lg my-6">

                            <div className="flex flex-row justify-between items-center relative pr-8">
                                <img src={chair} alt="" className="w-10 h-10 absolute z-40" />
                                <div className="absolute w-10 h-10 bg-yellow-300 rounded-full left-3"></div>
                                <p>.</p>

                                <div className="flex flex-col items-start">
                                    <p>Table no.</p>
                                    <p>1</p>
                                </div>
                            </div>


                            <div className="flex flex-row justify-between relative pl-4 pr-4 items-center">
                                <img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-users-cv-resume-flatart-icons-outline-flatarticons.png" className="w-8 z-40 absolute " />
                                <div className="absolute w-8 h-8 bg-yellow-300 rounded-full left-6 "></div>
                                <p>.</p>

                                <div className="flex flex-col items-start">
                                    <p>Customers</p>
                                    <p>4</p>
                                </div>
                            </div>

                        </div>

                        <p className="text-2xl font-bold mt-6 w-full border-b border-yellow-300">Orders</p>

                        <div className="flex flex-col text-2xl font-bold mb-6">

                            <div className="flex flex-row justify-between items-center py-4 border-b border-gray-300">
                                <p className="border-b border-yellow-300">Batternut Squash</p>
                                <p className="flex-1 px-4 text-gray-400">x1</p>
                                <p>$15</p>
                                <i class="fas fa-chevron-right px-3 text-gray-400"></i>
                            </div>

                            <div className="flex flex-row justify-between items-center py-4 border-b border-gray-300">
                                <p className="border-b border-yellow-300">Beef Tartar</p>
                                <p className="flex-1 px-4 text-gray-400">x1</p>
                                <p>$22</p>
                                <i class="fas fa-chevron-right px-3 text-gray-400"></i>
                            </div>


                            <div className="flex flex-row justify-between items-center py-4 border-b border-gray-300">
                                <p className="border-b border-yellow-300">Japanese A5</p>
                                <p className="flex-1 px-4 text-gray-400">x1</p>
                                <p>$402</p>
                                <i class="fas fa-chevron-right px-3 text-gray-400"></i>
                            </div>


                            <div className="flex flex-row justify-between items-center py-4 border-b border-gray-300">
                                <p className="border-b border-yellow-300">Beef Willington</p>
                                <p className="flex-1 px-4 text-gray-400">x1</p>
                                <p>$56</p>
                                <i class="fas fa-chevron-right px-3 text-gray-400"></i>
                            </div>


                            <div className="flex flex-row justify-between items-center py-4 border-b border-gray-300">
                                <p className="border-b border-yellow-300">Cream Spinach</p>
                                <p className="flex-1 px-4 text-gray-400">x1</p>
                                <p>$13</p>
                                <i class="fas fa-chevron-right px-3 text-gray-400"></i>
                            </div>

                            <div className="flex flex-row justify-between items-center py-4 border-b border-gray-300">
                                <p className="border-b border-yellow-300">Fingerling Potat</p>
                                <p className="flex-1 px-4 text-gray-400">x1</p>
                                <p>$13</p>
                                <i class="fas fa-chevron-right px-3 text-gray-400"></i>
                            </div>


                            <div className="flex flex-row justify-between items-center py-4 border-b border-gray-300">
                                <p className="border-b border-yellow-300">French 76</p>
                                <p className="flex-1 px-4 text-gray-400">x1</p>
                                <p>$15</p>
                                <i class="fas fa-chevron-right px-3 text-gray-400"></i>
                            </div>


                            <div className="flex flex-row justify-between items-center py-4 border-b border-gray-300">
                                <p className="border-b border-yellow-300">Innis & Gunn Bou</p>
                                <p className="flex-1 px-4 text-gray-400">x1</p>
                                <p>$9</p>
                                <i class="fas fa-chevron-right px-3 text-gray-400"></i>
                            </div>




                        </div>

                        {/*Notes for the order*/}
                        <Link to="new-order">
                            <div className="flex flex-row justify-center items-center">
                                <i class="fas fa-plus text-white bg-yellow-300 text-3xl px-2 py-1 border border-white"></i>
                            </div>
                        </Link>


                        <TesseractTest />


                        {/* Splitting the bill and uploading a bill */}
                    </ScrollArea >

                    <div className="flex flex-row px-8 py-4 rounded-full items-center text-4xl  bg-white space-x-16 my-4">
                        <i class="fas fa-house-user pb-2 text-yellow-200"></i>
                        <i class="fa fa-search-plus pb-2 text-yellow-500 border-b border-yellow-500"></i>
                        <i class="fas fa-user pb-2 text-yellow-200"></i>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default SecondScreen
