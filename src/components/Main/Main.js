import React from 'react';
import './Main.css';
function Main({visible}) {
    return (
        <div className="main-content-m">

            <div className={`container ${visible}`}>
                {/* <img src={musicCover} alt="Music" /> */}
                <div className="text-block-m">
                    <div className="aligned">
                        <a href="https://facebook.com/" className="fa fa-facebook">.</a>
                        <a href="https://twitter.com/" className="fa fa-twitter">.</a>
                        <a href="https://google.com/" className="fa fa-google">.</a>
                    </div>
                </div>
            </div>



            <div className="text-container">
                <p>
                Musical is a budding musical storefront with a mission to share the joy of music. These magnificent auditory tools are designed with musical creators, like you, in mind. Hobbyists, beginners, and experts alike can appreciate the resplendent sounds supplied by each and every instrument we carry. Join us in delivering the euphoric vibrations of melodia to the citizens of the world!
                </p>
            </div>

        </div>
    )
}


export default Main;