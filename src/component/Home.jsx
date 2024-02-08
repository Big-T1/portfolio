////////////Home.jsx under components

import React from 'react';
import Container from 'react-bootstrap/Container';
// import NavBar from './component/NavBar';
import NavBar from './NavBar';
import '../css/home.css'
import pic from '../assets/images/Saly-13.png'
import BOOTSTRAP from '../assets/images/BOOTSTRAP.svg'
import NODE from '../assets/images/NODE.svg'
import HTML from '../assets/images/HTML.svg'
import JS from '../assets/images/JS.svg'
import REACT from '../assets/images/REACT.svg'
import CSS from '../assets/images/CSS.svg'
import profile from '../assets/images/profile.svg'
import mail from '../assets/images/mail.svg'
import github from '../assets/images/github.svg'
import vector from '../assets/images/Vector.svg'
import group2 from '../assets/images/Group 2.png'
const Home = () => {
    return (
        <>
            <Container>
            <NavBar />
            <main className='head'>
                <section className='header'>
                    <h1 className='full'>Full Stack Developer</h1>
                    <p className='name'>Jessah Treasure</p>
                    <p className='lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pha tortor consequat nibh gravida id sit. Quis eget diam ut proin. At nisl diam urna sit. Tortor nibh ornare vestibulum amet dis eros dolor eget. Orci in enim sit luctus lacus arcu.</p>
                    <div className="list">
                       <img src={BOOTSTRAP} alt="" />
                       <img src={NODE} alt="" />
                       <img src={HTML} alt="" />
                       <img src={JS} alt="" />
                       <img src={REACT} alt="" />
                       <img src={CSS} alt="" />
                    </div>
                </section>
                <div>
                        <img className='w-100' src={group2} alt="" />
                    </div>
            </main>
            <div className="link">
                <img className='profile' src={profile} alt="" />
                <a className='links' href="mailto:godfreytreasure6@gmail.com" target="_blank" rel=""> <img src={mail} alt="" />Email me <img src={vector} alt="" /> </a>
                <a className='links' href="https://github.com/Big-T1" target="_blank" rel=""> <img src={github} alt="" />Github <img src={vector} alt="" /> </a>
            </div>

            </Container>
        </>
    )
}

export default Home;