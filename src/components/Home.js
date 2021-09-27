import React, {useRef, useState} from 'react'
import { AvForm, AvField, AvGroup, AvInput, AvFeedback, AvRadioGroup, AvRadio, AvCheckboxGroup, AvCheckbox } from 'availity-reactstrap-validation';
import emailjs from 'emailjs-com';
import { Container, Col, Row, Button, Label, FormGroup } from 'reactstrap';
import {Roll, Slide, Fade, Zoom, Rotate} from 'react-reveal';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player'
import VideoPlayer from 'react-video-js-player';
import Kitchen from "../video/kitchen.mp4"
import cyan from '../image/rentagle.png'
import cyans from '../image/thing.png'
import sofa from '../image/imagen.png'
import living from '../image/living1.png'
import works from '../image/workspace.png'
import library from '../image/librareis.png'
import kalamby from '../image/kalamby.png'
import mayou from '../image/mayou.png'
import geulis from '../image/geulis.png'
import signature from '../image/signature.png'
import girl from '../image/girl.jpg'

import '../components/Home.css'







const Home = () => {
 
    
    const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'template_vqykr9p', form.current, 'user_27ub5CiYjdjz1NARrFIza')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

        e.target.reset()

         
      };

    
        
    const videoJS = Kitchen;


    return (
        <>
            <Container>
                <section className="flip">
                <Row>
                    <Col md="6">
                        <div className="get-design">
                            <h1>Get the inspiration of interior design here</h1>
                            <p>architecture not only about engineering, it even lands to art and aesthetics. 
                                With us, you will get a residentical design with an extraordinary touch of art.</p>
                            <button className="btn-lets">Let's go</button>    
                        </div>
                    </Col>
                    <Col md="6" className="twice-img">
                       <Roll left>
                         <div className="home-img">
                            <img className="cyan-image" src={cyans} href="" />
                            <img className="cyan-image-one" src={cyan} href="" />
                        </div>    
                       </Roll>

                    </Col>
                </Row>
                </section>
                <section className=''>
                    <div className="work-line">
                        <h1>
                            How it works
                        </h1>
                        <p>Spice up your space even simpler than you think</p>
                    </div>
                    <Row className="mt-5">
                        <Col md="8" className="p-0 video">
                            <VideoPlayer className="video-play" src={videoJS} />
                        </Col>
                        <Col md="4" className="text-col">
                            <div>
                                <p>We provide design and build for commercial building, interior and furniture to improve the better life. </p>
                                <h2>S E E  V I D E O</h2>
                            </div>
                        </Col>
                    </Row>
                </section>
                <section className="home-sofa">
                    <Row>
                        <Col md="6" className="p-0 slide">
                            <Slide left>
                                <img className="sofas" src={sofa} href="" />
                            </Slide>
                        </Col>
                        <Col md="6">
                            <div className="aesthetic-home">
                               <Rotate left cascade>
                                     <h1>
                                        Our mission is to deliver aesthetic visual for your home
                                    </h1>
                                    <p>
                                         By applying bacis psychology principles, we are going to explain how perceptionworks and how we can use this understanding to maximise the space that we occupy in our homes.
                                    </p>
                               </Rotate>
                            </div>
                        </Col>
                    </Row>
                </section>
                <section className="our-project">
                    <div className="projects">
                        <h1>
                            Our project 
                        </h1>
                        <p>Introducing our first official project</p>
                        <hr/>
                        <hr/>
                    </div>
                    <Row className="mt-3">
                        <Col md="4">
                            <div className="living-room">
                                <Link to="/project livingroom">Project Livingroom</Link>
                                <p>A simple guide to create the perfect livingro-om for . Night Watc works beautifully in a wi-de gamut of arrangements.</p>
                               <Fade right> <img src={living} href=""/></Fade>
                            </div>
                        </Col>
                        <Col md="4">
                            <div className="living-room-art">
                                <Fade left><img className="room-img" src={works} href=""/></Fade>
                               <div className="links-act">
                                    <Link className="link-item" to="/project workspace" >Project workspace</Link>
                                    <p className="library-out">A simple guide to create the perfect livingro-om for . Night Watc works beautifully in a wi-de gamut of arrangements.</p>
                               </div>
                                
                            </div>
                        </Col>
                        <Col md="4">
                            <div className="living-room">
                                <Link to="/library">Library</Link>
                                <p>A simple guide to create the perfect livingro-om for . Night Watc works beautifully in a wi-de gamut of arrangements.</p>
                                <Fade right><img src={library} href=""/></Fade>
                            </div>
                        </Col>
                    </Row>
                </section>
                <section className="teteminal-one">
                    <div className="testemonial">
                        <h1>Testimonial</h1>
                    </div>
                    <Row className="all">
                        <Col md="3" >
                            <img className="brand" src={kalamby} href="" />
                        </Col>
                        <Col md="3">
                            <img className="brand-img" src={geulis} href="" />
                        </Col>
                        <Col md="3">
                            <img className="brand-imd" src={signature} href="" />
                        </Col>
                        <Col md="3">
                            <img className="brand-imh" src={mayou} href="" />
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col md="5" className="girl-custom p-0">
                           <img src= {girl} href="" />
                        </Col>
                        <Col md="7" className="test-number p-0">
                            <div >
                                <Row>
                                    <Col md="4">
                                        <div className="count-num">
                                            <b>105</b> <h1>project done</h1>
                                        </div>
                                    </Col>
                                    <Col md="4">
                                        <div className="count-num">
                                            <b>12</b> <h1>years of experience</h1>    
                                        </div>    
                                    </Col>
                                    <Col md="4" >
                                        <div className="count-num">
                                            <b>10+</b><h1 className="big-comp"> big company partnership</h1>
                                            
                                        </div>
                                    </Col>
                                </Row>
                                <div className="able">
                                    <p>"Not able to tell you how happy I am with interior design. Interior design has completely surpassed our expectations. 
                                        Interior design saved my business. Interior design is worth much more than I paid."</p>
                                    <a src="#" href="">- Roscoe</a>    
                                </div>
                            </div>
                        </Col>
                    </Row>
                </section>
                <section className="form-section">
                    <Row>
                        <Col md="4">
                           <div className="contact-us">
                               <h1>Contact Us</h1>
                               <p>Have any questions? Want help before getting started?</p>
                               <hr/>
                               <hr/>
                           </div>
                        </Col>
                        <Col md="8" className="p-0 main-text">
                            <div className="form-line">
                                                   
                            <form className="form-group" ref={form} onSubmit={sendEmail} id="form">
                                <div class="field">
                                    <label for="from_name">Full name</label>
                                    <input type="text" name="from_name" id="from_name"/>
                                </div>
                                <div class="field">
                                    <label for="to_name">Email address</label>
                                    <input type="email" name="email" id="to_name"/>
                                </div>
                                    <a className="description" src="#" href>Description</a>
                                    <input className="send" type="submit" id="button" value="Send Email" />
                            </form>
                            </div>
                        </Col>
                    </Row>                                                               
                </section>
            </Container>
        </>
    )
}

export default Home
