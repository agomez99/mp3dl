import React, { Component } from 'react'
import ReactAudioPlayer from 'react-audio-player';

export class Player extends Component {
    render() {
        return (
            <div >
                <ReactAudioPlayer
                    src="https://firebasestorage.googleapis.com/v0/b/nextjs-firebase-blog-4fe3a.appspot.com/o/mix.mp3?alt=media&token=d1748e8f-673e-4daf-87d7-1ad2c5fb9722"
                    controls
                />
            </div>
        )
    }
}

export default Player
