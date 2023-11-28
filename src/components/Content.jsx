import { useState } from 'react'

import './styles/Content.css'

export default function Content() {
    const [selected, select] = useState(0);

    var experiences = [


        <div style={{ display: selected === 0 ? "block" : "none" }}>
            <span>Unpaid Internship - Summer 2021</span><br />
            <ul style={{ listStyle: "square" }}>
                <li>GitHub and coding with others</li>
                <li>GUI design with PyQt Creator</li>
                <li>Beginner Python programming</li>
                <li>Facial recognition of distorted images</li>
            </ul>
        </div >,


        <div style={{ display: selected === 1 ? "block" : "none" }}>
            <span>SULI at ORNL - Summer 2022</span><br />
            <ul style={{ listStyle: "square" }}>
                <li>GitHub and coding with others</li>
                <li>Presented my contributions at meetings</li>
                <li>Object recognition with point clouds</li>
                <li>Intermediate C++ and Python</li>
                <li>Data Structures and algoritms</li>
            </ul>
        </div>,


        <div style={{ display: selected === 2 ? "block" : "none" }}>
            <span>Looking for my Projects?</span><br />
            <p>Click the Projects button at the top!</p>
        </div>


    ]

    function handleClick(isPrev) {
        if (isPrev && selected !== 0) select(selected - 1);
        else if (!isPrev && selected !== experiences.length - 1) select(selected + 1);
    }

    return (
        <>
            <fieldset className='aboutSet'>
                <span className='aboutAnchor' id='About'></span>
                <legend id='About'>About</legend>
                <p>
                    Hi, I'm EVAN ABBOTT -- a motivated computer science
                    sophomore at UTK. I'm currently interested in web development and machine learning.
                    I strive for clear communication and clever development strategies
                    on all my projects.
                </p>
            </fieldset>

            <p className='experienceP'>
                <span className='experienceAnchor' id='Experience'></span>
                Experience
            </p>
            <div className='experienceContainer'>
                <button onClick={() => { handleClick(true) }}>Previous</button>
                <div className='experienceContent'>
                    {...experiences}
                </div>
                <button onClick={() => { handleClick(false) }}>Next</button>
            </div>

            <div className='contact' id='Contact'>
                <span className='experienceAnchor'></span>
                <fieldset>
                    <legend>Contact</legend>
                    <a id="github" href="https://github.com/EvanA4">GitHub</a>
                    <a id="linkedin" href="https://www.linkedin.com/in/evan-abbott-667167214/">LinkedIn</a>
                    <p>(865) 313-3587</p>
                    <p>evanabbott04@gmail.com</p>
                </fieldset>
            </div>
        </>
    );
}