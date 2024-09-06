import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div class="footer">

            <div class="main-container">
                <div class="hoverText">
                    <p class="hoverFor">
                        Hover For
                    </p>
                    <br />
                    <p class="socials">Socials</p>
                </div>
                <div class="corner-div top-left">
                    <div>
                        <div class="glass">
                            <a href="#">
                                <img class="icon" src="Icons/instagram.png" alt="" />
                            </a>
                        </div>
                        <div class="instagram-gradient">
                        </div>
                    </div>
                </div>

                <div class="corner-div top-right">
                    <div>
                        <div class="glass">
                            <a href="#">
                                <img class="icon" src="Icons/linkedin.png" alt="" />
                            </a>
                        </div>
                        <div class="linkedin-gradient  ">
                        </div>
                    </div>
                </div>

                <div class="corner-div bottom-left">
                    <div>
                        <div class="glass">
                            <a href="#">
                                <img class="icon" src="Icons/twitter.png" alt="" />
                            </a>
                        </div>
                        <div class="twitter-gradient  ">
                        </div>
                    </div>
                </div>

                <div class="corner-div bottom-right">
                    <div>
                        <div class="glass">
                            <a href="#">
                                <img class="icon" src="Icons/fb.png" alt="" />
                            </a>
                        </div>
                        <div class="facebook-gradient  ">
                        </div>
                    </div>
                </div>

            </div>
            <p>Copyright ©️ 2024 Sarva Vidhya Talent Solutions</p>
        </div>
    )
}

export default Footer