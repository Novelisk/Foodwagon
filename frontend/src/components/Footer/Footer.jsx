import React from 'react';

import instagramIcon from '../../assets/images/footer/instagram_icon.png';
import facebookIcon from '../../assets/images/footer/facebook_icon.png';
import twitterIcon from '../../assets/images/footer/twitter_icon.png';
import emailIcon from '../../assets/images/footer/envelope_icon.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top-container">
        <nav className="footer__top-container_navbar">
          <div className="footer__top-container_navbar_company">
            <h2 className="footer__top-container_navbar_company_title">
              Company
            </h2>
            <ul className="footer__top-container_navbar_company-list">
              <li className="footer__top-container_navbar_company-list-item">
                About us
              </li>
              <li className="footer__top-container_navbar_company-list-item">
                Team
              </li>
              <li className="footer__top-container_navbar_company-list-item">
                Careers
              </li>
              <li className="footer__top-container_navbar_company-list-item">
                Blog
              </li>
            </ul>
          </div>
          <div className="footer__top-container_navbar_contact">
            <h2 className="footer__top-container_navbar_contact_title">
              Contact
            </h2>
            <ul className="footer__top-container_navbar_contact-list">
              <li className="footer__top-container_navbar_contact-list-item">
                Help & Support
              </li>
              <li className="footer__top-container_navbar_contact-list-item">
                Partner with us
              </li>
              <li className="footer__top-container_navbar_contact-list-item">
                Ride with us
              </li>
            </ul>
          </div>
          <div className="footer__top-container_navbar_legal">
            <h2 className="footer__top-container_navbar_legal_title">Legal</h2>
            <ul className="footer__top-container_navbar_legal-list">
              <li className="footer__top-container_navbar_legal-list-item">
                Terms & Conditions
              </li>
              <li className="footer__top-container_navbar_legal-list-item">
                Refund & Cancellation
              </li>
              <li className="footer__top-container_navbar_legal-list-item">
                Privacy Policy
              </li>
              <li className="footer__top-container_navbar_legal-list-item">
                Cookie Policy
              </li>
            </ul>
          </div>
        </nav>
        <aside className="footer__top-container_aside">
          <div className="footer__top-container_aside_socials">
            <h2 className="footer__top-container_aside_socials_title">
              FOLLOW US
            </h2>
            <div className="footer__top-container_aside_socials_links">
              <a
                href="#"
                className="footer__top-container_aside_socials_links_item"
              >
                <img
                  src={instagramIcon}
                  alt="Instagram icon"
                  className="footer__top-container_aside_socials_links_item_image"
                />
              </a>
              <a
                href="#"
                className="footer__top-container_aside_socials_links_item"
              >
                <img
                  src={facebookIcon}
                  alt="Facebook icon"
                  className="footer__top-container_aside_socials_links_item_image"
                />
              </a>
              <a
                href="#"
                className="footer__top-container_aside_socials_links_item"
              >
                <img
                  src={twitterIcon}
                  alt="twitterIcon icon"
                  className="footer__top-container_aside_socials_links_item_image"
                />
              </a>
            </div>
          </div>
          <div className="footer__top-container_aside_newsletter_container">
            <h2 className="footer__top-container_aside_newsletter_container_title">
              Receive exclusive offers in your mailbox
            </h2>
            <div className="footer__top-container_aside_newsletter_container_box">
              <div className="footer__top-container_aside_newsletter_container_box_email">
                <img
                  src={emailIcon}
                  alt="Email letter icon"
                  className="footer__top-container_aside_newsletter_container_box_email_image"
                />
                <input
                  type="text"
                  className="footer__top-container_aside_newsletter_container_box_email_input"
                  placeholder="Enter Your email"
                />
              </div>
              <button
                type="button"
                className="footer__top-container_aside_newsletter_container_box_button"
              >
                Subscribe
              </button>
            </div>
          </div>
        </aside>
      </div>
      <hr />
      <div className="footer__bot-container">
        <div className="footer__bot-container_left">
          <p className="footer__bot-container_left_text">
            All rights Reserved{' '}
            <span className="footer__bot-container_left_text_span">
              &copy; Foodwagon, 2026
            </span>
          </p>
        </div>
        <div className="footer__bot-container_right">
          <p className="footer__bot-container_right_text">
            Made with{' '}
            <span className="footer__bot-container_right_text_heart">
              &hearts;
            </span>{' '}
            by{' '}
            <span className="footer__bot-container_right_text_span">
              Marco Ramirez
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};
