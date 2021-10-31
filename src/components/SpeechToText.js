import React from 'react'
import attach from '../images/attach.png'
import save from '../images/save.png'

import adjleft from '../images/adjleft.png'
import adjcenter from '../images/adjcenter.png'
import adjright from '../images/adjright.png'
import list from '../images/list.png'
import bold from '../images/bold.png'
import underline from '../images/underline.png'
import italic from '../images/italic.png'
import soundwave from '../images/soundwave.png'

import diagnose1 from '../images/diagnose1.png'

import diagnose2 from '../images/diagnose2.png'

import { useHistory } from 'react-router-dom';
import loadinggif from "../images/loading.gif"
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Container from './Container'
const makePredictions = require('./model/predict');
const firestoreUpload = require('./lib/firestore-upload');
const ipfsAPI = require('ipfs-api');
const ipfs = ipfsAPI('ipfs.infura.io', '5001', { protocol: 'https' });

exports.AnimalReportUseCase = async (inputDto) => {
    try {
        console.log(
            formdata files: ${
                JSON.stringify(inputDto.file, (key, val) => {
                    if (key === 'buffer') return 'image buffer data';
                    else return val;
                })
        }
        );

        const buffer = Buffer.from(inputDto.file.buffer);
        const ipfsResult = await ipfs.add(buffer);
        const predict = await makePredictions(inputDto.file.buffer);

        const imageHash = ipfsResult[0].hash;
        const animalName = predict[0].className.split(', ')[0];
        const score = predict[0].probability;
        console.log(
            animalName: ${ animalName },
            score: ${ score },
            imageHash: ${ imageHash },
        );

        output = {
            animalName: animalName,
            imageHash: imageHash,
            score: score,
            lat: parseFloat(inputDto.lat),
            lng: parseFloat(inputDto.lng),
            numOfAnimals: parseInt(inputDto.numOfAnimals),
            comments: inputDto.comments,
            date: inputDto.date,
        };
        const result = await firestoreUpload(output);
        return output;
    } catch (error) {
        throw new Error(error);
    }
};
function SpeechToText(props) {
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }
    const sendAudio () => {
        let recording = SpeechRecognition.audio();
        AnimalReportUseCase(recording)
    }

    return (
        <>
            <div className="relative z-40 bg-white w-full rounded-t-3xl px-4 py-3 font-lato">
                <form action="">

                    <div className="flex flex-row justify-between items-center mb-4">
                        <h1 className="font-semibold text-2xl text-yellow-500">Notes</h1>

                    </div>



                    <textarea name="" id="" cols="36" rows="8" placeholder="Type here..." className="text-base w-full outline-none focus:ring-2  focus:ring-headinggreen px-2" value={transcript}
                    ></textarea>



                    <div className="flex flex-row items-center w-full">

                        <div className="flex flex-row justify-evenly items-center px-6 py-2 space-x-4 border border-gray-200 flex-1 rounded-2xl mr-2">
                            <img className="h-5" src={adjleft} alt="" />
                            <img className="h-5" src={adjcenter} alt="" />
                            <img className="h-5" src={adjright} alt="" />
                            <img className="h-5" src={list} alt="" />
                            <img className="h-5" src={bold} alt="" />
                            <img className="h-5" src={underline} alt="" />
                            <img className="h-5" src={italic} alt="" />
                        </div>
                        {/*    <div className="flex flex-row justify-center items-center text-white bg-headinggreen w-16 h-16 rounded-full text-2xl" onTouchStart={SpeechRecognition.startListening}
                            onMouseDown={SpeechRecognition.startListening}
                            onTouchEnd={() => {
                                SpeechRecognition.stopListening();
                                props.setNote(transcript);
                                props.handleNoteChange(transcript);
                            }}
                            onMouseUp={() => {
                                SpeechRecognition.stopListening();
                                props.setNote(transcript);
                                props.handleNoteChange(transcript);
                            }}>
                            {listening ? <i class="fas fa-stop"></i> : <i className="fas fa-microphone "></i>}

                        </div>*/}

                        <div className="flex flex-row justify-center items-center text-white bg-yellow-500 w-16 h-16 rounded-full text-2xl">




                            {listening ? <i className="fas fa-stop-circle" onClick={SpeechRecognition.stopListening}></i> : <i className="fas fa-microphone" onClick={() =>
                                SpeechRecognition.startListening({
                                    continuous: true
                                })}></i>}


                        </div>



                    </div>

                    <div className="w-full">
                        {listening && <img src={loadinggif} />}
                    </div>


                    <div className=" bg-yellow-500 text-white mt-8 flex flex-row justify-center items-center px-6 py-3 rounded-3xl cursor-pointer" >
                        <img src={diagnose1} alt="" />
                        {/*onClick={(e) => {props.handleDiagnosis(e)
                        }}  */}
                        <button className="bg-transparent w-full text-3xl font-medium" onClick={(e) => props.show(e)} onClick={sendAudio}>Get meals</button>
                        <img src={diagnose2} alt="" />
                    </div>
                </form>
            </div >

        </>
    )
}

export default SpeechToText
