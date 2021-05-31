import { useState } from "react";
import "./App.css";
import AppHeader from "./components/AppHeader";
import AppSearch from "./components/AppSearch";
import TattooItem from "./components/TattooItem";
import TattooPost from "./components/TattooPost";
import tattoos from "./data/tattoos"; // เอาข้อมูลมาจาก data/tattoos เพราะที่นี่เก็บข้อมูลไว้หมดเลย

function App() {
  const [selectedTattoo, setSelectedTattoo] = useState(null);
  const [searctText, setSearchText] = useState("");

  let onTattooClick = (whichTattoo) => {
    setSelectedTattoo(whichTattoo);
  };

  let onTattooClose = () => {
    setSelectedTattoo(null);
  };

  const filteredTatoos = tattoos.filter((tatoo) => {
    // เอาไว้ค้นหา title ที่ตรงกัน
    return tatoo.title.includes(searctText);
  });
  const tatooElements = filteredTatoos.map((tattoo, index) => {
    return (
      <TattooItem key={index} tattoo={tattoo} onTattooClick={onTattooClick} /> // นอกจากรับข้อมูลแล้วยังสามารถรับ function ได้อีกด้วย
    );
  });

  let tattooPost = null;
  if (selectedTattoo) {
    tattooPost = (
      <TattooPost tattoo={selectedTattoo} onBgClick={onTattooClose} />
    );
  }
  return (
    <div className="app">
      <AppHeader />
      <section className="app-section">
        <div className="app-container">
          <AppSearch value={searctText} onValueChange={setSearchText} />
          <div className="app-grid">{tatooElements}</div>
        </div>
      </section>
      {tattooPost}
    </div>
  );
}

export default App;
