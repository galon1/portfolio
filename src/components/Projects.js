import React from 'react';
import '../css/Projects.css';
import amia_paper from '../uploads/amia_paper.png';
import strongsuit from '../uploads/strongsuit.png';
import bcrypt from '../uploads/bcrypt.png';
import whoosh from '../uploads/whoosh.png';
import { Button } from 'antd';

class Projects extends React.Component {
    returnButton(project) {
        switch (project) {
            case "Patient Diagnoses":
                return (
                    <>
                        <Button size="large" className="buttons" onClick={() => window.open('https://www.youtube.com/watch?v=04FNyIpnA5E&feature=youtu.be', '_blank')}> View Video</Button>
                        <Button size="large" className="buttons" onClick={() => window.open('http://brown.edu/Research/AI/files/pubs/amia20b.pdf', '_blank')}> View Publication</Button>
                    </>
                )
            case "StrongSuit.Co":
                return (
                    <Button size="large" className="buttons"> View Video</Button>
                )
            case "Speech4Children":
                return (
                    <Button size="large" className="buttons"> Visit Website</Button>
                )
            case "Search Engine":
                return (
                    <Button size="large" className="buttons" onClick={() => window.open('http://brown.edu/Research/AI/files/pubs/trec19b.pdf', '_blank')}> View Publication</Button>
                )
            case "Dropbox" || "Othello":
                return null
            default:
                break;
        }
    }
    render() {
        const projectnames = ["Patient Diagnoses", "StrongSuit.Co", "Speech4Children", "Search Engine", "Dropbox", "Othello"]
        const projectinfo = ["Feb 2018-Aug 2019: Python, SQL, SciKit", "May 2020-Present: React, Redux, Mongo", "July 2020: Javascript, HTML/CSS", "Jun 2019- Aug 2019: Python (Whoosh)", "May 2020: Python (Bcrypt)", "Dec 2018: Java"]
        const images = [amia_paper, strongsuit, bcrypt, whoosh]
        const descriptions = [`First author of a published paper assessing the quality of machine learning classifers in diagnostic support. Organized
            61,532 patients each with 100+ data points using SQL and ran 44 different classifiers with Python using SciKit Learn. Accepted to AMIA summit.`,]
        return (
            <div className="wrapper">
                <div className="project-container">
                    {projectnames.map((project, index) => {
                        return (
                            <div key={project} className="project-wrapper">
                                <img src={images[index]} className="pictures" alt="" />
                                <p className="title">{project}</p>
                                <p className="dates-languages">{projectinfo[index]}</p>
                                <p>{this.returnButton(project)}</p>
                                <p className="description">{descriptions[index]}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="border"></div>
            </div >
        )
    }
}

export default Projects