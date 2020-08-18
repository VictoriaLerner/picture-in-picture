const videoElement = document.getElementById('video');
const button = document.getElementById('button');

//Promt to slect media stream

async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
        videoElement.play();
        }
    } catch (error) {

        console.log(error)
    }
}


button.addEventListener('click', async () => {

    //Disable button

    button.disabled = true;
    //Start picture in picture
    await videoElement.requestPictureInPicture();


});
selectMediaStream();