import React, { Component } from 'react'
import ReactAudioPlayer from 'react-audio-player';
import ReactSoundcloud from 'react-soundcloud-embed';


export class Player extends Component {
    render() {
        return (
            <div >
                <ReactAudioPlayer
                    src=""
                    controls
                />
            </div>
        )
    }
}

export default Player
