import React from 'react'
import style from './cssfol/contact.module.css'
function Contact() {
    return (
        <div>
            <div className={style.footer} id='footer'>
                {/* <h3>-: Contact us :-</h3> */}
                <div className={style.group}>
                    <a href="https://github.com/Yogesh8427"><i className="fa-brands fa-github fa-xl" style={{ color: "#20bcb1" }}></i></a>
                    <a href="https://www.hackerrank.com/yk24150"><i className="fa-brands fa-hackerrank fa-xl" style={{ color: "#20bcb1" }}></i></a>
                    <a href="https://www.linkedin.com/in/yogesh-kumar-6a8a7021b/"><i className="fa-brands fa-linkedin-in fa-xl" style={{ color: "#20bcb1" }}></i></a>
                    <i className="fa-solid fa-envelope fa-sm" style={{ color: "#20bcb1" }}> yk24150@gmail.com</i>
                    <i className="fa-solid fa-phone fa-sm fa-beat-fade" style={{ color: "#20bcb1" }}>+91 - 8427403032</i>
                </div>
            </div>
        </div>
    )
}

export default Contact
