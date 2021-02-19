import React, { Component } from 'react'
import ReactAudioPlayer from 'react-audio-player';

export class Player extends Component {
    render() {
        return (
            <div >
                <ReactAudioPlayer
                    src="/mix.mp3"
                    controls
                />
            </div>
        )
    }
}

export default Player
