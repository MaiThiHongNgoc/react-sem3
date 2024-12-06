import React from "react";
import "./Promotions.css";

const promotions = [
  {
    id: 1,
    title: "Giảm giá 50% cho đơn hàng đầu tiên",
    description:
      "Đừng bỏ lỡ cơ hội sở hữu các sản phẩm yêu thích với giá cực ưu đãi.",
    image:
      "https://lavenderstudio.com.vn/wp-content/uploads/2017/03/chup-san-pham.jpg", // Thay bằng link ảnh thực tế
    validUntil: "Hết hạn: 15/12/2024",
  },
  {
    id: 2,
    title: "Flash Sale cuối tuần",
    description: "Giảm giá đến 70% các sản phẩm thời trang và phụ kiện.",
    image:
      "https://beptueu.vn/hinhanh/tintuc/top-15-hinh-anh-mon-an-ngon-viet-nam-khien-ban-khong-the-roi-mat-1.jpg",
    validUntil: "Hết hạn: 10/12/2024",
  },
  {
    id: 3,
    title: "Mua 1 tặng 1 - Duy nhất hôm nay",
    description: "Áp dụng cho các sản phẩm được chọn, số lượng có hạn.",
    image:
      "https://www.foodstylistvn.com/wp-content/uploads/2014/08/sausage-on-fire-vietnam-food-stylist.jpg",
    validUntil: "Hết hạn: 05/12/2024",
  },
];

const Promotions = () => {
  return (
    <div className="promotions-container">
      <h1 className="promotions-title">Khuyến mãi & Ưu đãi</h1>
      <div className="promotions-grid">
        {promotions.map((promo) => (
          <div className="promotion-card" key={promo.id}>
            <img
              src={promo.image}
              alt={promo.title}
              className="promotion-image"
            />
            <h2 className="promotion-title">{promo.title}</h2>
            <p className="promotion-description">{promo.description}</p>
            <p className="promotion-valid">{promo.validUntil}</p>
            <button className="promotion-button">Xem chi tiết</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Promotions;
