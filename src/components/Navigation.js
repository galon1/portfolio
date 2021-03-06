import React from 'react';
import '../css/Navigation.css';
import { Button } from 'antd';
import PDF from '../uploads/Gil_Alon_Resumé.pdf';

class Navigation extends React.Component {

    render() {
        return (
            <div className="wrapper">
                <div className="header-container">
                    <Button  type="primary" className="tag-buttons"> <a href="#about">ABOUT</a></Button>
                    <Button  type="primary" className="tag-buttons"><a href="#projects" >PROJECTS</a></Button>
                    <Button  type="primary" className="tag-buttons"><a href={PDF} target="_blank" rel="noopener noreferrer">RESUMÉ</a></Button>
                    <Button  type="primary" className="tag-buttons"><a href="mailto:gilscjm@gmail.com" > CONTACT ME</a></Button>
                    </div>
                
                </div>
            // </div>
        )
    }
}

export default Navigation