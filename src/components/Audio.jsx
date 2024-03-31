import React from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Audio = ({selectedSurah}) => {
    return (
        <div className='fixed mt-[30px] bottom-0 w-full z-[100]'>
            <AudioPlayer
                autoPlay={false}
                showJumpControls={false}
                src={`${selectedSurah}`}
                onPlay={e => console.log("onPlay")}
            />
        </div>
    )
}

export default Audio
