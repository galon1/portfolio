import React from 'react';
import '../css/Home.css';
import Navigation from './Navigation.js'
import { Button } from 'antd';
import { LinkedinOutlined, GithubOutlined } from '@ant-design/icons';
import Projects from './Projects.js';

class Home extends React.Component {

    render() {
        return (
            <>
            <div className="background-image">
            <div className="wrapper">
                <Navigation />
                    <h2 className="name-title">GIL <br />ALON 
                    <Button type="ghost" className="avatar-icon" icon={<LinkedinOutlined className="avatar-size"/>} onClick={() => {  window.open("https://www.linkedin.com/in/gil-alon/", "_blank") }}></Button>
         <Button type="ghost" size="large" className="avatar-icon" icon={<GithubOutlined className="avatar-size"/>} onClick={() => { window.open("https://github.com/galon1", "_blank")}}></Button></h2>
         <h2 style={{ fontSize: '55px', }} >Computer Science Student: <br />Brown University </h2>
         <div className="border"></div>
            </div>
            </div>
            <h2 className="section-title" id="about">ABOUT ME</h2>
            <div className="wrapper">
            {/* <Button > SEE ME! </Button> */}
            <p className="about-text"> 
            Hi! My name is Gil Alon and I am currently a junior studying computer science at Brown University.
                                I am very interested in machine learning and how using that technology to better lives. I am very open to 
                                most types of development. I need to work in a highly collaborative environment and I llike
                                to solve complex problems.</p>
        <Button  type="primary" className="back-to-top-buttons" onClick={()=> document.documentElement.scrollTop = 0}> Back To Top</Button>
                                <div className="border"></div>
           </div>
            <h2 className="section-title" id ="projects">PROJECTS <br /> </h2>
            <Projects />
            <Button  type="primary" className="back-to-top-buttons" onClick={()=> document.documentElement.scrollTop = 0}> Back To Top</Button>
            </>
        )
    }
}

export default Home