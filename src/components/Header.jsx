import { useEffect, useState, useCallback } from 'react';
import './styles/Header.css';

export default function Header(props) {
    // credit to https://stackoverflow.com/questions/62497110/detect-scroll-direction-in-react-js
    // handles detection of scroll and y position of website
    const CONTAINERTYPES = ["containerInitial", "containerOpen", "containerClosed"];
    const [y, setY] = useState(window.scrollY);
    const [prevScroll, setPrev] = useState(0);
    const handleNavigation = useCallback(
        e => {
            const window = e.currentTarget;
            if (window.scrollY !== 0) {
                if (prevScroll !== 1) {
                    setPrev(1);
                }
            } else {
                if (prevScroll !== 2) {
                    setPrev(2);
                }
            }
            setY(window.scrollY);
        }, [y]
    );
    useEffect(() => {
        setY(window.scrollY);
        window.addEventListener("scroll", handleNavigation);

        return () => {
            window.removeEventListener("scroll", handleNavigation);
        };
    }, [handleNavigation]);

    return (
        <div className='header' id={CONTAINERTYPES[prevScroll]}>
            <a href="#About" id={props.isDefault !== 2 ? 'toShow' : 'toHide'}>About</a>
            <a href="#Experience" id={props.isDefault !== 2 ? 'toShow' : 'toHide'}>Experience</a>
            <a href="#Contact" id={props.isDefault !== 2 ? 'toShow' : 'toHide'}>Contact</a>
            <button onClick={() => { props.toFromDefault() }}>
                {props.isDefault !== 2 ? 'Projects' : 'Return'}
            </button>
        </div>
    );
}