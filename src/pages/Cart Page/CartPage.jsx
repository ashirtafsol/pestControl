import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  removeFromBasket,
  selectBasketItems,
  selectBasketTotal,
} from "../../features/counter/basketSlice";
import "./CartPage.css";

function CartPage() {
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);
  const [groupItemsInBasket, setGroupItemsInBasket] = useState([]);
  const dispatch = useDispatch();

  // const addItemToBasket = () => {
  //   dispatch(addToBasket({ productImage, productName, productPrice, id }));
  //   console.log("data", productImage, productName, productPrice, id);
  // };
  // const removeItemFromBasket = () => {
  //   if (!items.length > 0) return;
  //   dispatch(removeFromBasket({ id }));
  // };

  useEffect(() => {
    console.log("basketTotal", basketTotal);
  }, [basketTotal]);
  useMemo(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});

    setGroupItemsInBasket(groupedItems);
  }, [items]);

  useEffect(() => {
    // console.log("groupItemsInBasket", groupItemsInBasket);
    {
      Object.entries(groupItemsInBasket).map(([key, items]) =>
        console.log("itemsVal", items)
      );
    }
  }, []);
  return (
    <div className="cartPage">
      {Object.entries(groupItemsInBasket).map(([key, items]) => (
        <div className="cartItems">
          <img className="cartImg" src={items[0]?.productImage} alt="" />
          <p className="cartItemName">{items[0]?.productName}</p>
          <h5 className="cartItemPrice">{items[0]?.productPrice}</h5>
          <div className>
            <div className="volumeTab">
              <button
                className="addSubBtn"
                onClick={() => dispatch(removeFromBasket({ id: key }))}
              >
                -
              </button>
              <p>{items.length}</p>
              <button
                className="addSubBtn"
                onClick={() => dispatch(addToBasket(items[0]?.id))}
              >
                +
              </button>
            </div>
            <h5>{basketTotal}</h5>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CartPage;
