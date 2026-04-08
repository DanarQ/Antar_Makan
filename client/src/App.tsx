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

const mapMarkers = [
  {
    position: 0,
    lat: -0.024751799321233225,
    lng: 109.33841193739606,
    name: "Restoran A",
  },
  { position: 1, lat: -0.025, lng: 109.338, name: "Restoran B" },
  // Add more markers as needed
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
          <Map markers={mapMarkers} />
        </div>
      </section>
    </>
  );
}

export default App;
