import React from 'react';
import '../css/Navigation.css';
import { Button } from 'antd';
import { LinkedinOutlined, GithubOutlined } from '@ant-design/icons';
import PDF from '../uploads/resume.pdf';
import { Link } from 'react-router-dom';

class Navigation extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <div className="header-container">
                    <h2 className="information"> Gil Alon
                    <Button type="ghost" size="large" className="avatar-icon" icon={<LinkedinOutlined />} onClick={() => {  window.open("https://www.linkedin.com/in/gil-alon/", "_blank") }}></Button>
        <Button type="ghost" size="large" className="avatar-icon" icon={<GithubOutlined />} onClick={() => { window.open("https://github.com/galon1", "_blank")}}></Button></h2>
                    <div className="information">
                    <Link to="/" className="tabs">Home</Link>
                        <Link to="/projects" className="tabs">Projects</Link>
                        <a href={PDF} target="_blank" rel="noopener noreferrer" className="tabs">Resumé</a>
                        <a href="mailto:gil_alon@brown.edu" className="tabs">Contact</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navigation