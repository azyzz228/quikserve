import React, { useState, useRef } from 'react';
import { createWorker } from 'tesseract.js';
import Tesseract from 'tesseract.js';
import { BillSplitter } from './billSplitter'
import venmo from '../images/venmo.png'

function TesseractTest() {

    const worker = createWorker({
        logger: m => console.log(m),
    });


    const recogText = useRef(null)
    const [imagePath, setImagePath] = useState()
    const [recText, setRecText] = useState(null)
    const [totalAmount, setTotalAmount] = useState()
    const [showQR, setShowQR] = useState(false)

    const handleChange = (event) => {
        console.log('image uploaded');
        setImagePath(URL.createObjectURL(event.target.files[0]));
    }

    const extractTotal = () => {
        console.log(recogText);
        let a = recogText.split('total')[1]
        let b = a.match(/(\d+)/)[0]
        console.log('total', b);
        setTotalAmount(b)
    }

    const handleQR = () => {
        setShowQR(true)
    }

    const handleClick = async (e) => {
        e.preventDefault()
        console.log('clicked');


        await worker.load();
        await worker.loadLanguage('eng');
        await worker.initialize('eng');
        const { data: { text } } = await worker.recognize(imagePath);
        setRecText(text)
        console.log(text);
        await worker.terminate()
    }


    return (
        <div className="App my-12">


            <div className="flex flex-row justify-around items-center space-x-2 text-xl">
                <div className="bg-white border-2 border-yellow-300 px-3 py-4 rounded-lg flex flex-col justify-center items-center">
                    <i class="fas fa-camera text-yellow-300 text-4xl"></i>

                    <label htmlFor="file-upload">Upload the bill</label>
                    <input type="file" onChange={handleChange} id="file-upload" className="hidden" />
                </div>


                <div className="w-1 h-full bg-black">.</div>


                <div className="bg-white border-2 border-yellow-300 px-3 py-4 rounded-lg flex flex-col justify-center items-center">
                    <i class="fas fa-qrcode text-yellow-300 text-4xl"></i>

                    <p>Scan Barcode</p>
                </div>
            </div>



            <img src={imagePath} alt="" />
            <button className="w-full flex flex-row justify-center py-4 items-center bg-yellow-300 text-2xl rounded-full my-6 border border-yellow-300 hover:bg-white" onClick={(e) => handleClick(e)}>Submit</button>

            <p>{recText}</p>

            <div className="flex flex-row justify-between items-center py-4 text-2xl font-bold">
                <p>Total amount is </p>
                {recText !== null && <p>614.88</p>}
            </div>
            {recText !== null && <BillSplitter />}

            {recText !== null && <div className="w-full flex flex-row justify-center items-center py-4 my-6 bg-yellow-500 rounded-lg text-2xl font-bold text-white" onClick={() => handleQR()}>VENMO</div>}

            {showQR && <div className=" flex flex-row justify-center items-center">
                <img src={venmo} alt="" />
            </div>}

        </div>
    );
}

export default TesseractTest;