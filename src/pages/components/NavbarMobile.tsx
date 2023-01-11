import { useState } from 'react';
import { Link } from 'react-router-dom';
// import { HiMenu, HiX } from "react-icons/hi";
import MenuButton from '../capsules/MenuButton';

import { useMediaQuery } from "react-responsive";

const NavbarMobile = () => {

    const isHorizontal = useMediaQuery({
        query: "(min-width: 1080px)"
    });

    const [visibleMenu, setVisibleMenu] = useState(true);

    const toogleMenu = () => { setVisibleMenu(!visibleMenu) };

    const navMobileClose = {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        height: "80px",
        marginRight: "5px"
    }

    let navMobile;
    if (visibleMenu) {
        navMobile = <div style={isHorizontal ? { display: "none" } : navMobileClose}>
            <div onClick={toogleMenu}>
                <MenuButton menuClose={true}/>
            </div>
        </div>
    } else {
        navMobile =
            <div style={{
                position: "fixed", zIndex: 99999,
                width: "100vw",
                height: "100vh",
                backgroundColor: "#000",
                top: 0,
                left: 0
            }}>
                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    margin: "20px",
                    height: "100px"
                }}>
                    <div className="personal-logo">
                        <Link to="/" ><div className="logo">QuiN.</div></Link>
                    </div>
                    <div onClick={toogleMenu} className="hamburger">
                        <MenuButton menuClose={false}/>
                    </div>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "80%",
                    margin: "20px"
                }}>
                    <a href="#presentation" onClick={toogleMenu} style={{ color: "#FFF" }}><h1>Présentation</h1></a>
                    <a href="#projects" onClick={toogleMenu} style={{ color: "#FFF" }}><h1>Projets</h1></a>
                    <a href="#experiences" onClick={toogleMenu} style={{ color: "#FFF" }}><h1>Expériences</h1></a>
                    <a href="#formations" onClick={toogleMenu} style={{ color: "#FFF" }}><h1>Formations</h1></a>
                    <a href="#contact" onClick={toogleMenu} style={{ color: "#FFF" }}><h1>Contact</h1></a>
                </div>
            </div>
    }

    return (
        <div className="navbar-mobile">
            {navMobile}
        </div>
    )
}
export default NavbarMobile;