import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import ScrollArea from 'react-scrollbar'
import table from '../images/table.png'
import { Link } from 'react-router-dom'
function TablesScreen() {
    const [tables, setTables] = useState()
    useEffect(() => {
        fetch('http://example.com/movies.json' + '/restaurant/:restaurant_id')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setTables(data.tables)
            });
    })
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
                            <div className="flex flex-row justify-between items-center text-xl">

                                <i class="fas fa-long-arrow-alt-left "></i>
                                <p className="">Table situation</p>
                                <i class="fas fa-bars "></i>
                            </div>
                        </div>



                        <div className="big-table mt-8">

                            <div className="relative h-32 w-full">
                                <img src={table} alt="" className="w-32 h-32 mr-10 absolute z-40 left-28" />
                                <div className=" bg-yellow-300 rounded-full w-32 h-32 absolute left-32">
                                </div>

                            </div>
                        </div>


                        {/*All the tables*/}
                        <div className="grid grid-cols-3 gap-3 mt-10">

                            {tables.map((x) => {
                                <Link to="test">
                                <div className="border border-dashed border-black rounded-md text-2xl h-24">
                                    <div className="flex flex-row justify-between px-1 py-1">


                                        <i class="fas fa-users absolute"></i>

                                        <div className="h-6 w-6 ml-3 rounded-full bg-yellow-300"></div>


                                    </div>
                                    {table.occupied ? <div><p className="text-lg">{table.numberOfPeopl} people</p><p className=" font-bold">{table.id}</p></div> : <p className="text-lg">{table.numberOfPeopl} empty</p>}

                                </div>
                            </Link>
                            })}








                        </div>

                    </ScrollArea>
                    <div className="flex flex-row px-16 py-4 rounded-full items-center text-4xl  bg-white space-x-8 my-4">
                        <i class="fas fa-house-user pb-2 text-yellow-200"></i>
                        <i class="fa fa-search-plus pb-2 text-yellow-500 border-b border-yellow-500"></i>
                        <i class="fas fa-house-user pb-2 text-yellow-200"></i>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default TablesScreen
