import React from 'react'
import style from'./cssfol/edu.module.css'
function Education() {
    return (
        <div>
            <div className={style.edu} id='Education'>
                <div className={style.det}>
                <h2>Education</h2><br />
                <h4>M.C.A. - Computer Applications</h4>
                <ul style={{margin:"1% 3% 0 "}}>
                        <li><p>Department of Computer Science and Applications</p></li>
                        <li><p>2022 - 2024</p></li>
                </ul>
                <h4>B.C.A. - Computer Applications</h4>
                <ul style={{margin:"1% 3% 0 "}}>
                        <li><p>Post Graduation Government College Sector-11, Chandigarh</p></li>
                        <li><p>2018 - 2021</p></li>
                </ul>
                <h4>12th</h4>
                <ul style={{margin:"1% 3% 0 "}}>
                        <li><p>Govt Model Sr Sec School Sector-23-A Chandigarh</p></li>
                        <li><p>2018</p></li>
                        <li><p>CBSE</p></li>
                </ul>
                <h4>10th</h4>
                <ul style={{margin:"1% 3% 0 "}}>
                        <li><p>Govt Model Sr Sec School Sector 16-D Chandigarh</p></li>
                        <li><p>2016</p></li>
                        <li><p>CBSE</p></li>
                </ul>

            </div>
            </div>
        </div>
    )
}

export default Education
