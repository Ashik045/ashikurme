import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import React from 'react';
import { Tween } from 'react-gsap';

function HeaderTitle() {
    return (
        <ScrollTrigger start="-200px center" end="200px center" scrub={0.5} markers>
            <Tween
                to={{
                    x: '300px',
                }}
            >
                <div style={{ width: '100px', height: '100px', background: '#ccc' }} />
            </Tween>
        </ScrollTrigger>
    );
}

export default HeaderTitle;
