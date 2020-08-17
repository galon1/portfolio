import React from 'react';
import '../css/Home.css';
import Navigation from './Navigation.js'
import { Button, Tooltip, Modal } from 'antd';
import { LinkedinOutlined, GithubOutlined } from '@ant-design/icons';
import Projects from './Projects.js';
import mypicture from '../uploads/mypicture.JPG'

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false
        }
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
      }

      openModal() {
          this.setState({modalVisible: true});
      }

      closeModal() {
        this.setState({modalVisible: false});
    }

    render() {
        return (
            <>
            <div className="background-image">
            <div className="wrapper">
                <Navigation />
                    <h2 className="name-title">GIL <br />ALON 
                    <Tooltip title="Press to see my LinkedIn!" color='geekblue'>
                    <Button type="ghost" className="avatar-icon" icon={<LinkedinOutlined className="avatar-size"/>} onClick={() => {  window.open("https://www.linkedin.com/in/gil-alon/", "_blank") }}></Button>
                    </Tooltip>
        <Tooltip title="Press to see my GitHub!" color='geekblue'>
         <Button type="ghost" size="large" className="avatar-icon" icon={<GithubOutlined className="avatar-size"/>} onClick={() => { window.open("https://github.com/galon1", "_blank")}}></Button>
         </Tooltip></h2>
         <h2 style={{ fontSize: '55px', }} >Computer Science Student: <br />Brown University </h2>
         <div className="border"></div>
            </div>
            </div>
            <h2 className="section-title" id="about">ABOUT ME</h2>
            <div className="wrapper">
            <p className="about-text"> 
            Hi! My name is Gil Alon and I am currently a junior studying computer science at Brown University.
                                I am very interested in machine learning and cybersecurity and how using those technologies can better lives. I am very open to 
                                most types of development. However, I need to work in a highly collaborative environment and I like
                                to solve complex problems.
                                <Button onClick= {()=> this.openModal()} type="primary" size="small" className="see-me-button"> SEE ME! </Button>
                                </p>
        <Button  type="primary" className="back-to-top-buttons" onClick={()=> document.documentElement.scrollTop = 0}> Back To Top</Button>
                                <div className="border"></div>
           </div>
            <h2 className="section-title" id ="projects">PROJECTS <br /> </h2>
            <Projects />
            <Button  type="primary" className="back-to-top-buttons" onClick={()=> document.documentElement.scrollTop = 0}> Back To Top</Button>
            <Modal
            title="My Picture"
            visible={this.state.modalVisible}
            footer={null}
            onCancel={this.closeModal}>
            <img src={mypicture} className="me-picture" alt="" />
            </Modal>
            </>
        )
    }
}

export default Home