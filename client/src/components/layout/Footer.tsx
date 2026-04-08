import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <h2 className="footer-brand">ANTAR MAKAN</h2>

          <ul className="footer-col">
            <h3>Perusahaan</h3>
            <li>
              <a href="#">Tentang</a>
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
                <a href="#" aria-label="Facebook">
                  &#xf09a;
                </a>
                <a href="#" aria-label="Twitter">
                  &#xf099;
                </a>
                <a href="#" aria-label="Instagram">
                  &#xf16d;
                </a>
                <a href="#" aria-label="YouTube">
                  &#xf167;
                </a>
              </li>
            </ul>
            <ul className="footer-col">
              <h3>Download App</h3>
              <li className="footer-icon-row">
                <a href="#" aria-label="Google Play">
                  &#xf3ab;
                </a>
                <a href="#" aria-label="App Store">
                  &#xf179;
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
          &copy; 2024 Antar Makan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
