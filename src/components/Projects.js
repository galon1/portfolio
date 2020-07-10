import React from 'react';
import '../css/Projects.css';
import amia_paper from '../uploads/amia_paper.png';
import strongsuit from '../uploads/strongsuit.png';
import bcrypt from '../uploads/bcrypt.png';
import whoosh from '../uploads/whoosh.png';
import { Button } from 'antd';

class Projects extends React.Component {

    render() {
        return (
            <div className="wrapper">
                <h2 className="page-title">Projects </h2>
                <div  className="project-container">
                <div className="project-wrapper">
                    <img src={amia_paper} className="pictures" alt="" />
                        <p className="title">Patient Diagnoses:</p>
                        <p className="dates-languages">Feb 2018-Aug 2019: Python, SQL, SciKit</p>
                        <Button className="buttons" onClick= {() => window.open('https://www.youtube.com/watch?v=04FNyIpnA5E&feature=youtu.be', '_blank')}> View Video</Button>
                        <Button className="buttons" onClick= {() => window.open('http://brown.edu/Research/AI/files/pubs/amia20b.pdf', '_blank')}> View Publication</Button>
                        <p className="description">First author of a published paper assessing the quality of machine learning classifers in diagnostic support. Organized
                            61,532 patients each with 100+ data points using SQL and ran 44 different classifiers with Python using SciKit Learn. Accepted to AMIA summit.
                        </p>
                    </div>
                    <div className="project-wrapper">
                    <img src={strongsuit} className="pictures" alt="" />
                        <p className="title">StrongSuit.Co:</p>
                        <p className="dates-languages">May 2020-Present: React, Redux, Mongo </p>
                        <Button className="buttons"> View Video</Button>
                        <p className="description">Developed multiple features to bookmark posts, and automate onboarding process for new members. Coded in React, redux and 
                        utilized multiple APIs to automate email and text notifications.</p>
                    </div>
                    <div className="project-wrapper">
                        <p className="title">Speech4Children:</p>
                        <p className="dates-languages">July 2020: Javascript, HTML/CSS</p>
                        <Button className="buttons"> Visit Website</Button>
                        <p className="description">Developed the entire website for a private speech pathologist practice. Increased new patient inquiries with more publicity. Entire website
                            built using javascript and styled with html/css.
                        </p>
                    </div>
                    <div className="project-wrapper">
                    <img src={whoosh} className="pictures" alt="" />
                        <p className="title">Search Engine:</p>
                        <p className="dates-languages">Jun 2019- Aug 2019: Python (Whoosh)</p>
                        <Button className="buttons" onClick= {() => window.open('http://brown.edu/Research/AI/files/pubs/trec19b.pdf', '_blank')}> View Publication</Button>
                        <p className="description">Helped to build a search engine to search through 50,000 PubMed articles. 
                            Implemented Query Expansion using the Lexigram API, increasing the accuracy of the search.
                            Wrote the Query Expansion section of the publication.
                        </p>
                    </div>
                    <div className="project-wrapper">
                    <img src={bcrypt} className="pictures" alt="" />
                        <p className="title">Dropbox:</p>
                        <p className="dates-languages">May 2020: Python (Bcrypt)</p>
                        <p className="description">Secure file system allowing users to register, log in, upload and download files.
                            Built the database management using SQL and secured passwords by generating salts and
                            hashing passwords using the bcrypt library in Python. 
                        </p>
                    </div>
                </div>
                <div className="border"></div>
            </div>
        )
    }
}

export default Projects