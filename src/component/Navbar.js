import React from 'react'
import AnchorLink from "react-anchor-link-smooth-scroll";
import style from'./cssfol/navbar.module.css'
function Navbar() {
  return (
    <div>
        <div className={style.navbar}>
          <div className={style.name}>
          <h2>Yogesh Kumar</h2>
          </div>
          <div className={style.group}>
          <AnchorLink href="#footer">Contact</AnchorLink>
          <AnchorLink href="#about">About (Yogesh Kumar)</AnchorLink>
          <AnchorLink href="#Education">Education</AnchorLink>
          <AnchorLink href="#project">Projects</AnchorLink>
          </div>
        </div>
    </div>
  )
}

export default Navbar
