import "./Footer.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutube,
  FaAppStoreIos,
  FaGooglePlay,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <h2 className="footer-brand">ANTAR MAKAN</h2>

          <ul className="footer-col">
            <h3>Perusahaan</h3>
            <li>
              <Link to="/about">Tentang</Link>
            </li>
            <li>
              <a href="#">Produk</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>

          <ul className="footer-col">
            <h3>Gabung</h3>
            <li>
              <a href="#">Mitra Driver</a>
            </li>
            <li>
              <a href="#">Mitra Usaha</a>
            </li>
          </ul>

          <ul className="footer-col">
            <h3>Karir</h3>
            <li>
              <a href="#">Pelajar</a>
            </li>
            <li>
              <a href="#">Profesional</a>
            </li>
          </ul>

          <ul className="footer-col">
            <h3>Hubungi Kami</h3>
            <li>
              <a href="#">Bantuan</a>
            </li>
            <li>
              <a href="#">Lokasi Kami</a>
            </li>
          </ul>

          <div className="footer-connect">
            <ul className="footer-col">
              <h3>Connect With Us</h3>
              <li className="footer-icon-row">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  aria-label="Facebook"
                >
                  <FaFacebookSquare />
                </a>
                <a href="https://x.com" target="_blank" aria-label="Twitter">
                  <FaSquareXTwitter />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  aria-label="Instagram"
                >
                  <FaInstagramSquare />
                </a>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  aria-label="YouTube"
                >
                  <FaYoutube />
                </a>
              </li>
            </ul>
            <ul className="footer-col">
              <h3>Download App</h3>
              <li className="footer-icon-row">
                <a
                  href="https://play.google.com"
                  target="_blank"
                  aria-label="Google Play"
                >
                  <FaGooglePlay />
                </a>
                <a
                  href="https://apps.apple.com"
                  target="_blank"
                  aria-label="App Store"
                >
                  <FaAppStoreIos />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom">
          <ul className="footer-legal">
            <li>
              <a href="#">Pemberitahuan Privasi</a>
            </li>
            <li>
              <a href="#">Syarat dan Ketentuan</a>
            </li>
            <li>
              <a href="#">Cookie Setting</a>
            </li>
            <li>
              <a href="#">Atribusi Data</a>
            </li>
          </ul>
        </div>

        <p className="footer-copyright">
          &copy; 2026 Antar Makan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
