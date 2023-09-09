import React from 'react'
import yogesh from './compimg/1675851305038.jpg'
import style from './cssfol/about.module.css'
function About() {
    return (
        <div>
            <div className={style.about} id='about'>
                <div className={style.contant}>
                    <p>"I'm <span>Yogesh Kumar</span>, a Computer Applications enthusiast with a Master's degree and a strong background in programming. My skills span languages like C, C++, HTML, CSS, JavaScript, React.js, and SQL. I enjoy crafting responsive web applications and have a flair for creative problem-solving. Passionate about technology, I'm excited to contribute my expertise to innovative projects."</p>
                    <br />
                    <p>My <span>technical prowess</span> includes proficiency in <span>C, C++, HTML, CSS, JavaScript, React.js, and SQL,</span> enabling me to take on a wide range of software development and web design challenges.</p>
                </div>
                <div className={style.img}>
                    <img src={yogesh} alt="yogesh kumar" />
                </div>
            </div>
        </div>
    )
}

export default About
