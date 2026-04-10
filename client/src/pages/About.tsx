import "./About.css";
import { FaBoltLightning } from "react-icons/fa6";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { MdPeopleAlt } from "react-icons/md";

function About() {
  return (
    <>
      <section className="about-hero">
        <div className="container about-hero-inner">
          <span className="about-tag">Tentang Kami</span>
          <h1>
            Menghadirkan Cita Rasa Terbaik
            <br />
            Langsung ke Pintu Anda
          </h1>
          <p>
            Kami adalah layanan pengantaran makanan yang berdedikasi untuk
            memberikan pengalaman terbaik — menghubungkan Anda dengan restoran
            favorit secara cepat, mudah, dan terpercaya.
          </p>
        </div>
      </section>

      <section className="about-mission">
        <div className="container about-mission-inner">
          <div className="mission-text">
            <h2>Misi Kami</h2>
            <p>
              Tim kami berkomitmen untuk memastikan setiap pesanan sampai tepat
              waktu dan dalam kondisi sempurna. Kami bekerja erat dengan mitra
              restoran untuk memenuhi standar kualitas dan pelayanan tertinggi.
            </p>
            <p>
              Terima kasih telah memilih layanan kami. Kami menantikan
              kesempatan untuk terus melayani Anda dengan sepenuh hati.
            </p>
          </div>
          <div className="mission-stats">
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Mitra Restoran</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">1.000+</span>
              <span className="stat-label">Pesanan per Hari</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">30 mnt</span>
              <span className="stat-label">Rata-rata Pengiriman</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">4.8★</span>
              <span className="stat-label">Rating Pelanggan</span>
            </div>
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="container">
          <h2>Mengapa Memilih Kami?</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <FaBoltLightning />
              </div>
              <h3>Pengiriman Cepat</h3>
              <p>
                Makanan diantarkan dalam waktu rata-rata 30 menit. Tidak perlu
                menunggu lama untuk menikmati makanan favorit Anda.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <IoShieldCheckmarkOutline />
              </div>
              <h3>Kualitas Terjamin</h3>
              <p>
                Setiap mitra restoran telah melalui seleksi ketat untuk
                memastikan standar kualitas dan kebersihan makanan terbaik.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <MdPeopleAlt />
              </div>
              <h3>Mitra Terpercaya</h3>
              <p>
                Jaringan lebih dari 50 restoran lokal pilihan yang siap
                menyajikan cita rasa autentik langsung ke tangan Anda.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-team">
        <div className="container">
          <div className="team-header">
            <h2>Tim Kami</h2>
            <p>Orang-orang berdedikasi di balik layanan Antar Makan</p>
          </div>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-img-wrap">
                <img
                  src="https://randomuser.me/api/portraits/men/1.jpg"
                  alt="John Doe"
                />
              </div>
              <div className="team-info">
                <h3>John Doe</h3>
                <span className="team-role">CEO &amp; Co-Founder</span>
              </div>
            </div>
            <div className="team-card">
              <div className="team-img-wrap">
                <img
                  src="https://randomuser.me/api/portraits/women/1.jpg"
                  alt="Jane Smith"
                />
              </div>
              <div className="team-info">
                <h3>Jane Smith</h3>
                <span className="team-role">CTO &amp; Co-Founder</span>
              </div>
            </div>
            <div className="team-card">
              <div className="team-img-wrap">
                <img
                  src="https://randomuser.me/api/portraits/men/2.jpg"
                  alt="Bob Johnson"
                />
              </div>
              <div className="team-info">
                <h3>Bob Johnson</h3>
                <span className="team-role">Head of Operations</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
