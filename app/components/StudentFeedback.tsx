"use-client"
import { useState, useEffect } from 'react';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
const StudentFeedback: React.FC = () => {
    const array = [
        { name: 'simul rez', designation: 'Student', testimonialDescription: 'There was no time to learn offline so opt for online courses. In the course, the font Tanveen Maad has been taught very beautifully. I was able to master Shuddha', keyWord: 'Next js' },
        { name: ' sajidul ahmed Sani ', designation: 'Freelancer', testimonialDescription: 'আমার একটি অনলাইন পেজ ছিল কিন্তু পেইজটিকে নিয়ে কিভাবে সামনে আগাবে কোন কিছু বুঝতে পারছিলাম না', keyWord: 'c++' },
        { name: 'Jannatul ', designation: 'Entrepreneur', testimonialDescription: "Taskiee's collaborative features have been instrumental in streamlining tasks for my startup. The ability to share projects and track progress with the team has enhanced our efficiency.", keyWord: 'Gentleman' },
        { name: 'shihan ahmed', designation: 'Creative Professional', testimonialDescription: 'As a creative professional, Taskiee has simplified my project management. The clean design and goal tracking feature keep me inspired and organized throughout the creative process.', keyWord: 'Child' },
        
    ];

    const [currentSlider, setCurrentSlider] = useState<number>(0);

    const prevSlider = () => setCurrentSlider((currentSlider) => (currentSlider === 0 ? array.length - 2 : currentSlider - 1));
    const nextSlider = () => setCurrentSlider((currentSlider) => (currentSlider === array.length - 2 ? 0 : currentSlider + 1));

    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlider();
        }, 3000);

        return () => {
            clearInterval(intervalId);
        };
    }, [currentSlider]);

    const isSmallScreen = typeof window !== 'undefined' && window.innerWidth <= 768;

    return (
        <div className="max-w-full  min-w-[350px] mx-auto h-[400px] flex flex-row items-center overflow-hidden gap-5 lg:gap-10 px-8 md:px-16 lg:px-24">
            <div className="relative bg-[#040612] text-white overflow-hidden" data-aos="fade-up">
                <div className="absolute text-white w-full h-full flex items-center justify-between z-50 px-5">
                    {/* arrow left */}
                    <button onClick={prevSlider} className="flex bg-sky-950  after: justify-center items-center rounded-full w-6 h-6 md:w-8 md:h-8">
                        <svg viewBox="0 0 1024 1024" className="w-4 h-4 md:w-6 md:h-6 icon" xmlns="http://www.w3.org/2000/svg" fill="bla">
                            <g strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path fill="white" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path>
                            </g>
                        </svg>
                    </button>
                    {/* arrow right */}
                    <button onClick={nextSlider} className="flex bg-sky-950  justify-center items-center  rounded-full w-6 h-6 md:w-8 md:h-8">
                        <svg viewBox="0 0 1024 1024" className="w-4 h-4 md:w-6 md:h-6 icon" xmlns="http://www.w3.org/2000/svg" fill="black" transform="rotate(180)">
                            <g strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path fill="white" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path>
                            </g>
                        </svg>
                    </button>
                </div>
                {/* slider container */}
                <div className="ease-linear  shadow-2xl duration-300 flex" style={{ transform: `translateX(-${currentSlider * (isSmallScreen ? 100 : 50)}%)` }}>
                    {/* sliders */}
                    {array.map((each, idx) => (
                        <div key={idx}  className="p-4 min-w-full md:min-w-[50%]">
                            <div className="h-full p-8 rounded shadow-[0px_4px_12px_rgba(0,0,0,0.1)]">
                             {/* -------icon and star */}
                                <div className='flex justify-around'>
                                <a className="inline-flex items-center">
                                    <img className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" src={`https://source.unsplash.com/200x200/?${each.keyWord}`} alt="carousel navigate ui" />
                                    <span className="flex-grow flex flex-col pl-4">
                                        <span className="title-font font-medium ">{each.name}</span>
                                        <span className=" text-sm">{each?.designation}</span>
                                    </span>
                                </a>
                                <StarOutlineIcon  data-aos="fade-down-right"></StarOutlineIcon>
                               
                                </div>
                                <p className="leading-relaxed mb-6 ">{each?.testimonialDescription}</p>
                               
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StudentFeedback;
