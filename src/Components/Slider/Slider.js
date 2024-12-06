import React from "react";
import "./Slider.css"; // Đảm bảo bạn import file CSS ở đây
import Header from "../Header/Header";

const Slider = () => {
  const sliderRef = React.useRef(null);

  const activate = (e) => {
    const items = sliderRef.current.querySelectorAll(".item");
    if (e.target.classList.contains("next")) {
      sliderRef.current.append(items[0]);
    } else if (e.target.classList.contains("prev")) {
      sliderRef.current.prepend(items[items.length - 1]);
    }
  };

  return (
    <div className="slider-container">
      <Header />
      <ul className="slider" ref={sliderRef}>
        {[
          {
            title: "Lossless Youths",
            description: "Lorem ipsum dolor sit amet...",
            image:
              "https://mediawinwin.vn/upload/images/sanpham/bao-gia-chup-mon-an-dich-vu-chup-anh-do-an-chuyen-nghiep-3.JPG",
          },
          {
            title: "Estrange Bond",
            description: "Lorem ipsum dolor sit amet...",
            image:
              "https://png.pngtree.com/thumb_back/fw800/background/20231221/pngtree-gourmet-daytime-seafood-hodgepodge-indoor-food-photography-with-illustrations-photo-image_15540722.png",
          },
          {
            title: "The Gate Keeper",
            description: "Lorem ipsum dolor sit amet...",
            image:
              "https://cdn.popsww.com/blog-kids/sites/3/2022/12/mon-an-dac-trung-ngay-tet.jpg",
          },
          {
            title: "Last Trace Of Us",
            description: "Lorem ipsum dolor sit amet...",
            image:
              "https://marketingbox.vn/wp-content/uploads/2024/08/loi-ich-chup-anh-mon-an-han.webp",
          },
          {
            title: "Urban Decay",
            description: "Lorem ipsum dolor sit amet...",
            image:
              "https://mediawinwin.vn/upload/images/sanpham/bao-gia-chup-mon-an-dich-vu-chup-anh-do-an-chuyen-nghiep-5.JPG",
          },
          {
            title: "The Migration",
            description: "Lorem ipsum dolor sit amet...",
            image:
              "https://statics.vincom.com.vn/xu-huong/chi_tiet_xu_huong/mon-an-han-quoc/gimpapne-1200x676.jpeg",
          },
        ].map((slide, index) => (
          <li
            className="item"
            key={index}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="content">
              <h2 className="title">{slide.title}</h2>
              <p className="description">{slide.description}</p>
              <button>Read More</button>
            </div>
          </li>
        ))}
      </ul>
      <nav className="nav">
        <button className="btn prev" onClick={activate}>
          ❮
        </button>
        <button className="btn next" onClick={activate}>
          ❯
        </button>
      </nav>
    </div>
  );
};

export default Slider;
