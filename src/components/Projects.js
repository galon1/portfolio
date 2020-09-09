import React from 'react';
import '../css/Projects.css';
import amia_paper from '../uploads/amia_paper.png';
import strongsuit from '../uploads/strongsuit.png';
import amitalon from '../uploads/amitalon.png';
import bcrypt from '../uploads/bcrypt.png';
import whoosh from '../uploads/whoosh.png';
import portfolio from '../uploads/portfolio.png';
import othello from '../uploads/othello.png';
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
            case "Portfolio":
                return (
                    <Button size="large" className="buttons" onClick={() => window.open('https://github.com/galon1/portfolio', '_blank')}> View Code</Button>
                    )
            case "Speech4Children":
                return (
                    <>
                        <Button size="large" className="buttons" onClick={() => window.open('https://amitalon-speech4children.com', '_blank')}> Visit Website</Button>
                        <Button size="large" className="buttons" onClick={() => window.open('https://github.com/galon1/speech4children', '_blank')}> View Code</Button>
                    </>
                )
            case "Search Engine":
                return (
                    <Button size="large" className="buttons" onClick={() => window.open('http://brown.edu/Research/AI/files/pubs/trec19b.pdf', '_blank')}> View Publication</Button>
                )
            case "Dropbox" || "Othello" || "StrongSuit.Co":
                return null
            default:
                break;
        }
    }
    render() {
        const projectnames = ["Patient Diagnoses", "StrongSuit.Co", "Speech4Children", "Portfolio", "Search Engine", "Dropbox", "Othello"]
        const projectinfo = ["Feb 2018-Aug 2019: Python, SQL, SciKit", "May 2020-Present: React, Redux, MongoDB", "July 2020: Javascript, HTML/CSS", "Jun-Aug 2020: React", "Jun 2019- Aug 2019: Python (Whoosh)", "May 2020: Python (Bcrypt)", "Dec 2018: Java"]
        const images = [amia_paper, strongsuit, amitalon, portfolio, whoosh, bcrypt, othello]
        const descriptions = [`First author of a published paper assessing the quality of machine learning classifers in diagnostic support. Organized
            61,532 patients each with 100+ data points using SQL and ran 44 different classifiers with Python using SciKit Learn. Accepted to AMIA summit as a poster presentation.`,
            `Built an automated process for onboarding new members using React-Redux working with a server and client. This process involved creating 2 new web pages which I designed and using 5 APIs (Typeform, Airtable, Google, Zingle, Sendgrid) and 2 webhooks.
            Also, I built features for the website such as individualized member profile pages and allowing members to bookmark and filter posts.`, `I worked with a small business client to build a professional website for her Speech Language Pathologist private clinic.
            I built the website using React and CSS for design. The website is formatted also for mobile access. Features include a slideshow of images that members can click through or slide through on their own, click through testimonial quotes and an automatic email opening button.`,
            `Designed and built this website as my portfolio using React and Ant Design library. I built this website from scratch using Create-React-App to set up the framework. Features include icon buttons, modals and redirect buttons.`,
        `Worked on a team to build a retrieval model for the TREC 2019 Preicision Medicine competition. We used the Python Whoosh library to index thousands of PubMed articles, retrieve documents using Okapi BM25F model and implemented query expansion using the Lexigram API. We submitted a written publication to TREC.`, 
        `Built a secure database system for file user accounts, file download, upload and storage. I used SQL to construct a secure database of users, session ids and hashed and salted passwords. All inputs were parsed and paths santized using Python and bcrypt library. Client-side and server communications were secured and SQL injection attacks prevented by writing complete SQL statements.`, `Built a working Othello game using AI MiniMax algorithm with 3 depth levels in Java and using JavaFX. Built a working GUI allowing players to choose to play with a human or aganist a computer.`]
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