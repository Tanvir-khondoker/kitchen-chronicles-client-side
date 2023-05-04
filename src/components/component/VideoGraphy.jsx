/* eslint-disable no-unused-vars */
import React from 'react';
import { Card } from 'react-bootstrap';





const VideoGraphy = () => {
    return (
        <Card className='mt-5'>
                 <h2 className='mx-auto mt-2 mb-3'>Some Best cooking technique from our Popular chef</h2>
                  
            <iframe className='mx-auto mt-2 mb-5 rounded' width="560" height="315" src="https://www.youtube.com/embed/0fVDT10hm_s" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Card>
    );
};

export default VideoGraphy;