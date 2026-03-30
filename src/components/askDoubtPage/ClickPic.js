 
 
import React, { useEffect } from 'react';
import createCamera from './createCamera';

const ClickPic = () => {
    useEffect(() => {
        const camera = createCamera();
        camera.startCamera();

        return () => {
            // Clean up resources if needed
        };
    }, []);

    return (
        <div>
            {/* You can render additional UI components here */}
            <canvas id="canvas" width="680" height="480"></canvas>
        </div>
    );
};

export default ClickPic;

