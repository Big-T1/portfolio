// Contacts.jsx
import React from 'react'
import '../css/contact.css'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import profile from '../assets/images/profile.svg'
import mail from '../assets/images/mail.svg'
import img1 from '../assets/images/img1.svg'
import github from '../assets/images/github.svg'
import vector from '../assets/images/Vector.svg'


const Contacts = () => {
    const { pathname } = useLocation();

  return (
    <>
        <Container>
            <div className='nav'>
             <a className='term1' href="/">Treasure</a>   
            </div>

        <main className='project'>
        <section className='headers'>
                    <h1 className='full'>Full Stack Developer</h1>
                    <p className='name'>Jessah Treasure</p>
                    <p className='lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pha tortor consequat nibh gravida id sit. Quis eget diam ut proin. At nisl diam urna sit. Tortor nibh ornare vestibulum amet dis eros dolor eget. Orci in enim sit luctus lacus arcu.</p>

                    <div className='number'>
                        <NavLink to="/projects" className={`nom ${pathname === '/projects' ? 'active' : ''}`}>
                            <p>01</p>
                            <img src={img1} alt="" />
                            <p className='meen'>Projects</p>
                        </NavLink>
                        <NavLink to="/download" className={`nom ${pathname === '/download' ? 'active' : ''}`}>
                            <p>01</p>
                            <img src={img1} alt="" />
                            <p>Download Resume</p>
                        </NavLink>
                        <NavLink to="/contact" className={`nom ${pathname === '/contact' ? 'active' : ''}`}>
                            <p>01</p>
                            <img src={img1} alt="" />
                            <p className='meen1'>Contact</p>
                        </NavLink>
                    </div>

                    <div className="link">
                <img className='profile' src={profile} alt="" />
                <a className='links' href="mailto:godfreytreasure6@gmail.com" target="_blank" rel=""> <img src={mail} alt="" />Email me <img src={vector} alt="" /> </a>
                <a className='links' href="https://github.com/Big-T1" target="_blank" rel=""> <img src={github} alt="" />Github <img src={vector} alt="" /> </a>
            </div>

                </section>
            <div className="send">
                <h1 className='message'>Send A Message</h1>
            <form>
                <input className='input w-75 mx-3 mb-3' type="text" placeholder='From:' name="form" id="" /> 
                <input className='input1 w-75 mx-3 mb-3' type="text" placeholder='Subject:' name="subject" id="" />
                <input className='input2 w-75 mx-3 mb-3' type="text" placeholder='Write message...' name="subject" id="" />
          </form>

            <div className="button text-center">
                <button type="button" className='btn-light text-center' >
                    Send Message
                </button>
            </div>
            </div>
        </main>
        </Container>
    </>
  )
}

export default Contacts;