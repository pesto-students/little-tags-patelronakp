import React from "react";
import * as ROUTES from "../../constants/Routes";
import { Link } from "react-router-dom";
import { FiSend } from "react-icons/fi";
import "./styles.scss";
import Payment1 from "../../assets/images/payment_1.png";
import Payment2 from "../../assets/images/payment_2.png";
import Payment3 from "../../assets/images/payment_3.png";
import Payment4 from "../../assets/images/payment_4.png";
import vectorCollection from "../../assets/images/vector-collections.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__main wrapper">
        <div className="row">
          <div className="col-6">
            <h3 className="footer-title">Why buy from Urbun Touch?</h3>
            <p className="footer-description">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters
            </p>
          </div>
          <div className="col-3">
            <h3 className="footer-title">Categories</h3>
            <div>
              <ul className="footer_link">
                <li>
                  <Link to={ROUTES.MENS_COLLECTION}>Mens</Link>
                </li>
                <li>
                  <Link to={ROUTES.WOMENS_COLLECTION}>Womens</Link>
                </li>
                <li>
                  <Link to={ROUTES.KIDS_COLLECTION}>Kids</Link>
                </li>
                <li>
                  <Link to={ROUTES.ACCESSORIES_COLLECTION}>Accessories</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-3">
            <h3 className="footer-title">Newsletter</h3>
            <p className="footer-description">
              Subscribe to be the first to hear about deals, offers and upcoming
              collections.
            </p>
            <div className="subscription">
              <input
                className="subscription__input"
                type="email"
                placeholder="Enter your email"
              />
              <button className="subscription__button" type="submit">
                <FiSend />
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div class="footer__bottom">
            <div class="footer__cols">
              <div class="footer__left">
                <span class="copyrights">
                  © All right reserved. Urbun Touch 2021
                </span>
              </div>
              <div class="footer__right">
                <div class="payments">
                  <div class="payments__col">
                    <span class="payments__text">Payment methods:</span>
                  </div>
                  <div class="payments__col">
                    <ul class="payments__list">
                      <li class="payments__item">
                        <img
                          class="payments__image"
                          alt=""
                          src={Payment1}
                          data-lazy={Payment1}
                        />
                      </li>
                      <li class="payments__item">
                        <img
                          class="payments__image"
                          alt=""
                          src={Payment2}
                          data-lazy={Payment2}
                        />
                      </li>
                      <li class="payments__item">
                        <img
                          class="payments__image"
                          alt=""
                          src={Payment3}
                          data-lazy={Payment3}
                        />
                      </li>
                      <li class="payments__item">
                        <img
                          class="payments__image"
                          alt=""
                          src={Payment4}
                          data-lazy={Payment4}
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
