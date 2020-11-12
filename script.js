const videoElement = document.querySelector('#video');
const button = document.querySelector('#button');

// Prompt to select media stream, pass to video elemet, then play

async function selectMediaStream () {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject=mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }

    } catch (error) {
        console.log('Error here!', error);
    }   
}

button.addEventListener('click', async () =>{
    // Disable Button
    button.disabled=true;

    // Start Picture in Picture
    await videoElement.requestPictureInPicture();

    // Reset Button
    button.disabled=false;

});

// On Load
selectMediaStream();