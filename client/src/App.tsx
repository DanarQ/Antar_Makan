import "./App.css";
import FoodCategoryCard from "./components/ui/FoodCategoryCard";
import Map from "./components/ui/Map";
import { images } from "./assets/Gambar";
import { useEffect, useState } from "react";

const categoies = [
  { imgsrc: images.imgNasipadang, title: "Nasi Padang", url: "#" },
  { imgsrc: images.imgNasikuning, title: "Nasi Kuning", url: "#" },
  { imgsrc: images.imgNasigoreng, title: "Nasi Goreng", url: "#" },
  { imgsrc: images.imgMieayam, title: "Mie Ayam", url: "#" },
  { imgsrc: images.imgSate, title: "Sate", url: "#" },
  { imgsrc: images.imgSoto, title: "Soto", url: "#" },
  { imgsrc: images.imgBubur, title: "Bubur", url: "#" },
  { imgsrc: images.imgWestern, title: "Western", url: "#" },
  { imgsrc: images.imgKumpulanmakanan, title: "Lihat yang Lainnya", url: "#" },
];

// nanti ini di pindah kan ke database, di handle oleh backend
const mapMarkers = [
  {
    lat: -0.024751799321233225,
    lng: 109.33841193739606,
    name: "Restoran A",
  },
  { lat: -0.025, lng: 109.338, name: "Restoran B" },
];

function App() {
  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <h1>Selamat Datang di Antar Makan</h1>
          <p>Makanan favorit Anda dikirim ke alamat Anda</p>
          <button className="order-now">Pesan Sekarang</button>
        </div>
      </section>

      <section className="categories">
        <div className="container">
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
        </div>
      </section>

      <section className="map">
        <div className="container">
          <h2>Peta Restoran Mitra Kami</h2>
          <div className="map-container">
            <Map markers={mapMarkers} />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
