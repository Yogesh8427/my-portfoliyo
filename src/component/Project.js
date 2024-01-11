import React from 'react'
import style from './cssfol/project.module.css'
function Project() {
    return (
        <div className={style.project} id='project'>
            <div className={style.con}>
            <h2>Projects</h2><br />
            <a href=" https://3ab1eec7-daa5-4198-add6-2e08c2073843-00-3n5cyk698ct0c.global.replit.dev/"><h3>1.News App -: https://news-app.yogesh-kumark19.repl.co/</h3></a><br />
            <p>The News App is a dynamic web-based application that delivers the latest news and updates from around the world to its users. Developed using React.js, this user-friendly platform offers an engaging news browsing experience with an aesthetically pleasing and responsive user interface designed using Bootstrap.</p><br />
            <h2>Key Features:</h2>
            <ul>
                <li><p>Real-time news updates.</p></li>
                <li><p>Easy navigation and user-friendly design.</p></li>
                <li><p>Categorized news sections for various interests.</p></li>
                <li><p>Responsive design for optimal viewing on all devices.</p></li>
            </ul><br />
            <h2>Technologies and Tools Used:</h2>
            <ul>
                <li><p>Front-end: React.js, Bootstrap.</p></li>
                <li><p> News Data Source: NewsApi.</p></li>
            </ul>
            </div>
            <div className={style.con}>
            <a href="  "><h3>2. To Do List -: https://to-do-list-by-local-storage.yogesh-kumark19.repl.co/</h3></a><br />
            <p>The To-Do List is a versatile web-based application designed to help users efficiently organize their tasks and boost productivity. Built with a focus on simplicity and functionality, this application offers an intuitive user experience for creating, managing, and tracking tasks.</p><br />
            <h2>Key Features:</h2>
            <ul>
                <li><p>User-friendly task creation and management.</p></li>
                <li><p>Local storage for data persistence.</p></li>
                <li><p>Responsive design for seamless access on various devices.</p></li>
                <li><p>Straightforward and minimalist user interface..</p></li>
            </ul><br />
            <h2>Technologies and Tools Used:</h2>
            <ul>
                <li><p>Front-end Development: HTML, CSS, JavaScript.</p></li>
            </ul>
            </div>
        </div>
    )
}

export default Project
