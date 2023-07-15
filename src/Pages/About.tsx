import React from 'react';
import mutiplepicture from '../assets/image/USED/Background/K01.png';
import Yellow from '../assets/image/Yellow.png';
import "../styles/About.css";

const About = () => {
    return (
        <div className="about">
            <div className="aboutTop"
                style={{ backgroundImage: `url(${mutiplepicture})` }}>
            </div>
            <div className="aboutBottom">
                <h1>ABOUT</h1>
                <p>
                    Welcome to our plant website! There are many weeds in our daily lives, but have you ever paid attention to them? Our website aims to help the public gain a better understanding of the wild plants around them, especially those that are edible, and appreciate their beauty and nutritional value.<br /><br />

                    This website is a unique resource that provides detailed information about various edible plants. Here, you can find common names, descriptions of characteristics, as well as information on their culinary and dietary applications. Our goal is to help everyone delve deeper into these overlooked or considered weed-like edible plants.<br /><br />

                    Whether for foraging in the wild or cultivating at home, these edible plants offer diverse and nutritionally rich ingredients. We are dedicated to providing accurate and easily understandable information to help everyone learn and enjoy the unique charms of these edible plants. Additionally, our website offers abundant pictures and illustrations to provide a visual understanding of the appearance, edible parts, and identification features of various plants.

                    Let's explore and savor the deliciousness and nutritional benefits that these edible plants bring together!</p>
            </div>
        </div>
    );
};

export default About;