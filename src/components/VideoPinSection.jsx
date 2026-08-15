import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react';

const VideoPinSection = () => {

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".vd-pin-section",
                start: "-15% top",
                end: "200% top",
                pin: true,
                scrub: 1.5
            }
        });

        tl.to(".video-box", {
            clipPath: "circle(100% at 50% 50%)",
            ease: "power1.inOut"
        });
    });
    return (
        <section className='vd-pin-section'>
            <div
                style={{
                    clipPath: "circle(6% at 50% 50%)"
                }}
                className='size-full video-box'>
                <video src="/videos/pin-video.mp4" playsInline muted loop autoPlay />

                <div className='abs-center md:scale-100 scale-200'>
                    <img src="/images/circle-text.svg" alt="circle text" className='spin-circle' />
                    <div className='play-btn'>
                        <img src="/images/play.svg" alt="" className='size-[3vw] opacity-70 ml-[0.5vw]' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoPinSection;