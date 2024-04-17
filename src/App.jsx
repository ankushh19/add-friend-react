import React, { useState } from "react";
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";

function App() {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1713236252021-00d5792e69e5?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Challenger",
      artist: "Ankush",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1713127686686-7d8892fff7f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "One Love",
      artist: "Bharti",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1713101888073-76cc3a9e441a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Fake Love",
      artist: "Vishal",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1713208176864-13e6c9d04eec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "True Artist",
      artist: "Raman",
      added: false,
    },
  ];
  const [songData, setSongData] = useState(data);
  const handleClick = (index) => {
    setSongData((prev) => {
      return prev.map((item, itemIndex) => {
        if (itemIndex === index) return { ...item, added: !item.added };
        return item;
      });
    });
  };
  return (
    <>
      <div className="w-full lg:h-screen md:h-screen sm:h-auto bg-zinc-300 ">
        <Navbar data={songData} />
        <div className="px-20 flex flex-wrap gap-10 mt-10">
          {songData.map((obj, index) => (
            <Card
              data={obj}
              index={index}
              key={index}
              handleClick={handleClick}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
