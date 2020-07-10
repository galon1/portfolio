import React from 'react';
import picture from '../uploads/profile.png';
import '../css/Home.css';

class Home extends React.Component {

    render() {
        return (
            <div className="wrapper">
                <table className="center">
                    <tbody>
                        <tr>
                            <td>
                                <>
                                    <img src={picture} className="displayed" alt="" />
                                </>
                            </td>
                            <td>
                                <p className="text">Hi! My name is Gil Alon and I am currently a junior studying computer science at Brown University.
                                I am very interested in machine learning and how using that technology to better lives. I am very open to 
                                most types of development. I need to work in a highly collaborative environment and I llike
                                to solve complex problems.  </p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="border"></div>
            </div>
        )
    }
}

export default Home