import React from 'react';
import '../css/Navigation.css';
import { Button } from 'antd';
import PDF from '../uploads/resume.pdf';

class Navigation extends React.Component {

    render() {
        return (
            <div className="wrapper">
                <div className="header-container">
                    <Button  type="primary" className="tag-buttons"> <a href="#about">ABOUT</a></Button>
                    <Button  type="primary" className="tag-buttons"><a href="#projects" >PROJECTS</a></Button>
                    <Button  type="primary" className="tag-buttons"><a href={PDF} target="_blank" rel="noopener noreferrer">RESUMÉ</a></Button>
                    <Button  type="primary" className="tag-buttons"><a href="mailto:gil_alon@brown.edu" > CONTACT ME</a></Button>
                    </div>
                
                </div>
            // </div>
        )
    }
}

export default Navigation