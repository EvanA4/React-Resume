import { useEffect, useState } from 'react'

import './styles/Projects.css'

// Shuffling code credit to link below
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

export default function Projects() {
    const [selected, select] = useState(-1);
    const [pallates, setPallates] = useState(() => {
        let temp = [['rgb(240, 105, 105)', 'rgb(59, 31, 31)'],
        ['rgb(255, 166, 0)', 'rgb(59, 49, 31)'],
        ['rgb(98, 223, 119)', 'rgb(20, 37, 23)'],
        ['rgb(98, 223, 213)', 'rgb(20, 36, 37)'],
        ['rgb(116, 119, 255)', 'rgb(31, 28, 51)']];

        return shuffle(temp);
    }
    );

    useEffect(() => {
        const intervalId = setInterval(() => {
            let temp = [['rgb(240, 105, 105)', 'rgb(59, 31, 31)'],
            ['rgb(255, 166, 0)', 'rgb(59, 49, 31)'],
            ['rgb(98, 223, 119)', 'rgb(20, 37, 23)'],
            ['rgb(98, 223, 213)', 'rgb(20, 36, 37)'],
            ['rgb(116, 119, 255)', 'rgb(31, 28, 51)']];
            setPallates(shuffle(temp));
        }, 2000);

        return () => {
            clearInterval(intervalId);
        };
    }, [])

    return (
        <div className='cardContainer'>
            <div className="flip-card" id={selected === 0 ? 'showBack' : 'showFront'}>
                <div className="flip-card-inner">
                    <div className="flip-card-front" onClick={() => select(0)} style={{ color: pallates[0][0], border: '5px solid ' + pallates[0][1] }}>
                        <p className='cardTitle'>RCTurtle</p>
                    </div>
                    <div className="flip-card-back" onClick={() => select(-1)} style={{ color: pallates[0][0], border: '5px solid ' + pallates[0][1] }}>
                        <p>RCTurtle</p>
                        <div className='desc'>
                            <p>Control a Minecraft robot from a web app with a 3D display!</p>
                            <ul>
                                <li>ReactJS</li>
                                <li>ThreeJS</li>
                                <li>NodeJS</li>
                            </ul>
                            <a href="https://github.com/EvanA4/RCturtle" style={{ color: pallates[0][0] }}>GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flip-card" id={selected === 1 ? 'showBack' : 'showFront'}>
                <div className="flip-card-inner">
                    <div className="flip-card-front" onClick={() => select(1)} style={{ color: pallates[1][0], border: '5px solid ' + pallates[1][1] }}>
                        <p className='cardTitle'>RREF<br />Solver</p>
                    </div>
                    <div className="flip-card-back" onClick={() => select(-1)} style={{ color: pallates[1][0], border: '5px solid ' + pallates[1][1] }}>
                        <p>RREF Solver</p>
                        <div className='desc'>
                            <p>Can solve a system of equations of any size.</p>
                            <ul>
                                <li>Basic C++</li>
                                <li>Saved me time in matrix algebra</li>
                            </ul>
                            <a href="https://github.com/EvanA4/RREFsolver" style={{ color: pallates[1][0] }}>GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flip-card" id={selected === 2 ? 'showBack' : 'showFront'}>
                <div className="flip-card-inner">
                    <div className="flip-card-front" onClick={() => select(2)} style={{ color: pallates[2][0], border: '5px solid ' + pallates[2][1] }}>
                        <p className='cardTitle'>Resume<br />Website</p>
                    </div>
                    <div className="flip-card-back" onClick={() => select(-1)} style={{ color: pallates[2][0], border: '5px solid ' + pallates[2][1] }}>
                        <p>Resume Website</p>
                        <div className='desc'>
                            <p>Not-so-light website showing experience, and projects.</p>
                            <ul>
                                <li>ReactJS</li>
                                <li>ThreeJS</li>
                                <li>Web design</li>
                            </ul>
                            <a href="" style={{ color: pallates[2][0] }}>GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}