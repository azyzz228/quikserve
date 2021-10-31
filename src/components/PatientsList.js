import React from 'react';
import { Link } from 'react-router-dom';



function PatientsList(props) {



    return (
        <div className="flex flex-col justify-start pl-5 rounded-2xl bg-white mt-4">
            <div className="flex place-items-center item-center justify-between mt-4 mr-4">
                <h1 className="font-semibold text-2xl">Tables</h1>
                <button class="text-gray-800 font-bold py-2 px-4 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                </button>
            </div>

            <div className="patientsListWrapper ">
                {props.tables.map((x, index) => {
                    <Link to={`table/${table.id}`} key={index} className="flex flex-row justify-between items-center w-full my-5 font-poppins relative">

                        <div className=" bg-yellow-300 w-8 h-8 rounded-full flex justify-center items-center absolute left-2">

                        </div>
                        <i className="far fa-user text-4xl absolute"></i>
                        <p>.</p>
                        <div className="flex flex-col w-6/12">
                            <h1 className="text-xl  font-medium  ">Table {table.tableNumber}</h1>
                            <p className="text-base">{tabel.numberOfPeople}</p>
                        </div>
                        <i className="fas fa-chevron-right text-3xl pr-8"></i>

                    </Link>
                })}




            </div>
        </div>
    )


}


export default PatientsList
