import "./Contact.css";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

function Contact() {
  return (
    <>
      <section className="contact-hero">
        <div className="container contact-hero-inner">
          <span className="contact-tag">Hubungi Kami</span>
          <h1>Kami Siap Membantu Anda</h1>
          <p>
            Punya pertanyaan, masukan, atau butuh bantuan terkait layanan kami?
            Tim dukungan kami siap merespons dengan cepat dan ramah.
          </p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container contact-content-inner">
          <div className="contact-cards">
            <div className="contact-card">
              <div className="contact-icon">
                <MdEmail />
              </div>
              <div className="contact-card-text">
                <h3>Email</h3>
                <p>contact@antar-makan.com</p>
              </div>
            </div>
            <div className="contact-card">
              <div className="contact-icon">
                <MdPhone />
              </div>
              <div className="contact-card-text">
                <h3>Telepon</h3>
                <p>+62 812 3456 7890</p>
              </div>
            </div>
            <div className="contact-card">
              <div className="contact-icon">
                <MdLocationOn />
              </div>
              <div className="contact-card-text">
                <h3>Alamat</h3>
                <p>Jl. Sepakat No. 123, Ayani Pontianak</p>
              </div>
            </div>
          </div>

          <form className="contact-form">
            <h2>Kirim Pesan</h2>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Nama</label>
                <input type="text" id="name" placeholder="Nama lengkap Anda" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="email@anda.com" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subjek</label>
              <input type="text" id="subject" placeholder="Topik pesan Anda" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Pesan</label>
              <textarea
                id="message"
                rows={5}
                placeholder="Tuliskan pesan Anda di sini..."
              />
            </div>
            <button type="submit" className="form-submit">
              Kirim Pesan
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
