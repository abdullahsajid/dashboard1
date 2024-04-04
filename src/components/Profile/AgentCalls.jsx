import React from 'react'
import { Card, CardBody, CardTitle } from "reactstrap";
import ReactAudioPlayer from 'react-audio-player';
const AgentCalls = () => {
    return (
        <div className='p-3'>
            <Card>
                <CardBody>
                    <CardTitle tag={'h5'} className='fw-bold'>Agent Calls</CardTitle>
                    <div className='d-flex flex-column justify-content-center align-items-center gap-3 mt-3'>
                        <ReactAudioPlayer
                            src="my_audio_file.ogg"
                            autoPlay
                            controls
                        />
                        <ReactAudioPlayer
                            src="my_audio_file.ogg"
                            autoPlay
                            controls
                        />
                        <ReactAudioPlayer
                            src="my_audio_file.ogg"
                            autoPlay
                            controls
                        />
                        <ReactAudioPlayer
                            src="my_audio_file.ogg"
                            autoPlay
                            controls
                        />
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}

export default AgentCalls
