// createCamera.js
const createCamera = () => {
    let width = 0;
    let height = 0;
    let video = null;
    let canvas = null;
    let context = null;

    const createObjects = () => {
        video = document.createElement('video');
        video.id = 'video';
        video.width = width;
        video.height = height;
        video.autoplay = true;
        document.body.appendChild(video);

        canvas = document.createElement('canvas');
        canvas.id = 'canvas';
        canvas.width = width;
        canvas.height = height;
        document.body.appendChild(canvas);
        context = canvas.getContext('2d');
    };

    const startCamera = (w = 680, h = 480) => {
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            width = w;
            height = h;

            createObjects();

            navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
                video.srcObject = stream;
                video.play();
            });
        }
    };

    const takeSnapshot = () => {
        if (context && video) {
            context.drawImage(video, 0, 0, width, height);
        }
    };

    return {
        startCamera,
        takeSnapshot
    };
};

export default createCamera;
