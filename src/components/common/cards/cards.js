import React, { useState, useEffect } from "react";
import './cards.css';

const Card = ({ id, name, price, image, count, save }) => {
  const [editMode, setEditMode] = useState(false);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productCount, setProductCount] = useState("");
  const [productImage, setProductImage] = useState("");

  useEffect(() => {
    setProductName(name);
    setProductPrice(price);
    setProductCount(count);
    setProductImage(image);
  }, [name, price, image, count]);
  
  const handleCancel = () => {
    setProductName(name);
    setProductPrice(price);
    setProductCount(count);
    setProductImage(image);
    setEditMode(false);
  };
  const handleClick = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    save({
      id,
      name: productName,
      price: productPrice,
      image: productImage,
      count: productCount,
    });
    setEditMode(false);
  };
  return (
    <>
      {!editMode ? (
        <div className="Card-section">
          <img
            src={productImage}
            alt="product image"
            width="150"
            height="150"
          ></img>
          <h2>{productName}</h2>
          <p>{productPrice}</p>
          <p>{productCount}</p>
          <button onClick={handleClick}>Edit</button>
        </div>
      ) : (
          <div className="Card-section">
            <label>
              Name:
              <input
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
            </label>
            <label>
              Price:
              <input
                type="text"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
              />
            </label>
            <label>
              Image:
              <input
                type="text"
                value={productImage}
                onChange={(e) => setProductImage(e.target.value)}
              />
            </label>
            <label>
              Count:
              <input
                type="text"
                value={productCount}
                onChange={(e) => setProductCount(e.target.value)}
              />
            </label>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </div>
      )}
    </>
  );
};

export default Card;
