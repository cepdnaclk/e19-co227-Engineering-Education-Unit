import React from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css'; // Import Video.js CSS

// Import your local video file
import localVideo from './../../img/eoe.mp4';

const cardStyle = {
  border: '1px solid #07a8ff',
  borderRadius: '8px',
  margin: '20px auto', // Center the card horizontally
  maxWidth: '800px', // Limit the card width for smaller screens
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#f0f0f0', // Set the background color here
  overflow: 'hidden', // Hide any content that overflows
};

const videoPlayerStyle = {
  position: 'relative',
  paddingBottom: '40%', // 16:9 aspect ratio (9 / 16 * 100%)
};

const videoJSStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
};

export default class VideoPlayer extends React.Component {
  componentDidMount() {
    // Define the options with the local video source
    const options = {
      controls: true,
      sources: [
        {
          src: localVideo,
          type: 'video/mp4',
        },
      ],
    };

    this.player = videojs(this.videoNode, options, function onPlayerReady() {
      console.log('Video.js Ready', this);
    });
  }

  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  }

  render() {
    return (
      <div style={cardStyle}> {/* Apply the card styling */}
        <div data-vjs-player style={videoPlayerStyle}>
          <video ref={(node) => (this.videoNode = node)} className="video-js" style={videoJSStyle}></video>
        </div>
      </div>
    );
  }
}
