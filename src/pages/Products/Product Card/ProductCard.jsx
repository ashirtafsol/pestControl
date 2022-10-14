import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  removeFromBasket,
  selectBasketItemsWithID,
  selectBasketTotal,
} from "../../../features/counter/basketSlice";
import "./ProductCard.css";

function ProductCard({ productImage, productName, productPrice, id, index }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => selectBasketItemsWithID(state, index));

  const addItemToBasket = () => {
    dispatch(addToBasket({ productImage, productName, productPrice, id }));
    console.log("data", productImage, productName, productPrice, id);
  };
  const removeItemFromBasket = () => {
    if (!items.length > 0) return;
    dispatch(removeFromBasket({ id }));
  };

  return (
    <div className="productCard">
      <img className="productImg" src={productImage} alt="" />
      <p>{productName}</p>
      <p>${productPrice}</p>
      <div className="volumeTab">
        <button className="addSubBtn" onClick={removeItemFromBasket}>
          -
        </button>
        <p>{items.length}</p>
        <button className="addSubBtn" onClick={addItemToBasket}>
          +
        </button>
      </div>
      <button className="">Add To Cart</button>
    </div>
  );
}

export default ProductCard;
