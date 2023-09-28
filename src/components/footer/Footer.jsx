import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                
                <div className="infoText">
                    Movix is your go-to platform for discovering the latest trends in movies and shows. Our mission is to provide a seamless and intuitive media exploration experience. With a vast array of categories and detailed insights into each title, we aim to cater to every movie enthusiast's curiosity. Enjoy endless scrolling through our carefully curated lists, and find your next favorite show or movie right here on Movix!
                </div>
                
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
