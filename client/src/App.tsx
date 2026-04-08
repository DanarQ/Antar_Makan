import "./App.css";
import FoodCategoryCard from "./components/ui/FoodCategoryCard";
import Map from "./components/ui/Map";
const categoies = [
  { imgsrc: "#", title: "Nasi Padang", url: "#" },
  { imgsrc: "#", title: "Nasi Kuning", url: "#" },
  { imgsrc: "#", title: "Nasi Goreng", url: "#" },
  { imgsrc: "#", title: "Mie Ayam", url: "#" },
  { imgsrc: "#", title: "Sate", url: "#" },
  { imgsrc: "#", title: "Lihat yang Lainnya", url: "#" },
];

function App() {
  return (
    <>
      <section className="hero">
        <h1>Selamat Datang di Antar Makan</h1>
        <p>Makanan favorit Anda dikirim ke alamat Anda</p>
        <button className="order-now">Pesan Sekarang</button>
      </section>

      <section className="categories">
        <h2>Kategori Makanan</h2>
        <div className="category-cards">
          {categoies.map((category, index) => (
            <FoodCategoryCard
              key={index}
              imageSrc={category.imgsrc}
              title={category.title}
              url={category.url}
            />
          ))}
        </div>
      </section>

      <section className="map">
        <h2>Peta Restoran</h2>
        <div className="map-container">
          <Map />
        </div>
      </section>
    </>
  );
}

export default App;
