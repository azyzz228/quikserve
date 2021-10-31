import React, { useState, useEffect } from 'react'
import Container from '../components/Container'
import ScrollArea from 'react-scrollbar'
import diagnose1 from '../images/diagnose1.png'
import notes from '../images/notesadd.png'
import profilepic from '../images/profilepic.png'
import bell from '../images/bell.png'
import SearchPanel from '../components/SearchPanel'
import PatientsList from '../components/PatientsList'
import { useLocation, useHistory, Link } from "react-router-dom";

import { getAuth, signOut } from "firebase/auth";
import { doc, getDoc, collection, query, where, getFirestore, getDocs } from "firebase/firestore";
/*
const auth = getAuth();
const db = getFirestore();
*/
function HomePageScreen(props) {
    const loc = useLocation();
    const [doctorName, setDoctorName] = useState("")
    const history = useHistory();

    useEffect(() => {
        (async () => {
            const docRef = doc(db, "users", loc.pathname.split("/")[2]);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setDoctorName(docSnap.data().name)
            } else {
                console.log("No such document!");
            }
        })();
    }, [doctorName, loc]);
    const [checked, setChecked] = useState(false)

    const handleCheckin = () => {
        console.log('cliked');
        setChecked(true)
    }


    useEffect(() => {
        fetch('https://us-central1-quikserve.cloudfunctions.net/api')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                let tables = data.tables
            });
    }, [])
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
                            <div className="   ">

                                <div className="flex flex-row justify-center items-start pl-4 mt-2">
                                    <div className="pr-4">
                                        <img src={profilepic} alt="" />

                                    </div>

                                    <div className="flex flex-col flex-1 justify-center items-start">
                                        <h1 className="text-3xl font-semibold ">Hi, There</h1>
                                        <p className="text-lg ">Let's look at your orders</p>
                                    </div>

                                </div>

                                <SearchPanel />


                                <div className="flex flex-col space-y-4 my-8">
                                    <h1 className="text-2xl font-semibold">Services</h1>

                                    {/* onClick={() => history.push("/patients-notes/" + loc.pathname.split("/")[2])}*/}


                                    <div className="w-full h-20 bg-white flex flex-row justify-between items-center text-3xl px-4 border-2 border-yellow-300 shadow-lg">
                                        <p onClick={() => handleCheckin()} className="px-2 bg-yellow-300 text-white rounded-full cursor-pointer">Check in</p>
                                        {checked ? <i class="fas fa-check text-black"></i> : <i class="fas fa-ban"></i>}
                                    </div>

                                    <Link to="tables">
                                        <button className="flex flex-row justify-center items-center w-full h-20 text-headingblue px-4  rounded-xl bg-white border-2 border-yellow-300">
                                            <div className=" rounded-full bg-headingblue flex flex-row justify-center items-center">
                                                <i class="fas fa-table text-white text-5xl px-4 py-4"></i>
                                            </div>
                                            <h1 className="flex-1 ml-4 text-3xl">Tables</h1>
                                            <i className="fas fa-chevron-right text-3xl "></i>
                                        </button>
                                    </Link>
                                    {/*onClick={() => history.push("/patients-diagnose/" + loc.pathname.split("/")[2])}  */}


                                </div>

                                {/* Search panel with filter icon */}


                                {/* Patients list */}


                                <PatientsList tables={loc.pathname.split("/")[2]} onClick={() => { signOut(auth); history.push('/login') }} tables={tables} />

                            </div>

                        </div>

                    </ScrollArea>
                    <div className="flex flex-row px-8 py-4 rounded-full items-center text-4xl  bg-white space-x-16 my-4">
                        <i class="fas fa-house-user pb-2  text-yellow-500 border-b border-yellow-500"></i>
                        <i class="fa fa-search-plus pb-2 text-yellow-200"></i>
                        <i class="fas fa-user pb-2 text-yellow-200"></i>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default HomePageScreen
