import React, { useState } from 'react'
import Container from '../components/Container'
import SpeechToText from '../components/SpeechToText'
import ScrollArea from 'react-scrollbar'
import chair from '../images/chair.png'
import { Link } from 'react-router-dom'


function AddNewOrderScreen() {
    const [note, setNote] = useState('')
    const [isOpen, setIsOpen] = useState(false)
    const handleTranscribe = (e, x) => {
        e.preventDefault();
        console.log(x);
    }



    const addOrderHandler = () => {
        fetch('http://example.com/movies.json', identifiedMeals)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setMeal()
            });
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



                        {/*Notes for the order*/}
                        <SpeechToText note={note} setNote={setNote} handleTranscribe={handleTranscribe} show={show} getMeals={getMeals} />


                        <div className="flex flex-col text-2xl font-bold mb-6">

                            <div className="flex flex-row justify-between items-center py-4 border-b border-gray-300">
                                <p className="border-b border-yellow-300">Mac & Cheese</p>

                                <select id="cars" name="cars">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                            </div>

                            <Link to="table/2"><div className="flex flex-row justify-center py-4 px-3 cursor-pointer rounded-xl hover:bg-yellow-500 hover:text-white bg-white text-yellow-500 shadow-lg my-4"> <p>Add the order(s)</p> </div></Link>



                        </div>




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

export default AddNewOrderScreen
