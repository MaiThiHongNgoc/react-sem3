import React, { useState, useRef } from "react";
import "./Sale.css";

const Sale = () => {
  const [clickedItems, setClickedItems] = useState([false, false, false, false]);
  const itemsRef = useRef([]);

  const images = [
    {
      url: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmJjMTJicW5uODJ0dGN0Nm5uenYwYjVmYXIwbjlwcXpsN2ZkdWc1cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/isiqjpQhGVvCo/giphy.webp",
      label: "Salmon Curry",
    },
    {
      url: "https://media.giphy.com/media/oeFYnddcjgXtu/giphy.gif?cid=790b7611fa4i81rkz3fs3hp9t0l36fkaqui2y99ve82g7m74&ep=v1_gifs_search&rid=giphy.gif&ct=g",
      label: "Fish Sandwich",
    },
    {
      url: "https://media.giphy.com/media/6Bdx9wl8sIh4A/giphy.gif?cid=790b7611l7ryu4drulz6bb4ec0ip0q7x9fkp036l2nk7dst2&ep=v1_gifs_search&rid=giphy.gif&ct=g",
      label: "Shakshouka",
    },
    {
      url: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdTFpZ2xkZTNyZHRoaDJyc2ZrbGc0cG4xanppNm0zOHAydHBjbDZsZCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/5n5CPcCgv8dkByKoxN/giphy.gif",
      label: "Creme Brulee",
    },
  ];

  const handleClick = (index) => {
    const newClickedItems = clickedItems.map((clicked, i) =>
      i === index ? !clicked : false
    );
    setClickedItems(newClickedItems);
  };

  return (
    <div className="Sale">
      <h2>
        Helloresto <br />
        <span>menulist</span>
      </h2>
      <div className="group">
        {images.map((image, index) => (
          <div
            key={index}
            className={`item-list ${clickedItems[index] ? "expanded" : ""}`}
            ref={(el) => (itemsRef.current[index] = el)}
            style={{ "--url": `url('${image.url}')` }}
            onClick={() => handleClick(index)}
          >
            <div className="overlay"></div>
            <div className="menu">
              <label>{image.label}</label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sale;