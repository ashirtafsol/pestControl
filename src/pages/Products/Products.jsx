import { ShoppingBasket } from "@mui/icons-material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  selectBasketItems,
  selectBasketItemsWithID,
} from "../../features/counter/basketSlice";
import ProductCard from "./Product Card/ProductCard";
import "./Products.css";

const products = [
  {
    id: 0,
    productName: "Shirt",
    productPrice: 200,
    productImage:
      "https://cashout-backend.herokuapp.com/api/images/71a27299-2ba9-4897-9f13-35a9e92d8ea7.jpg",
  },
  {
    id: 1,
    productName: "Pant",
    productPrice: 100,
    productImage:
      "https://cashout-backend.herokuapp.com/api/images/ff501792-5a3a-4f17-a97a-dfc4083e50f7.jpg",
  },
  {
    id: 2,
    productName: "Art",
    productPrice: 300,
    productImage:
      "https://cashout-backend.herokuapp.com/api/images/ff501792-5a3a-4f17-a97a-dfc4083e50f7.jpg",
  },
];

function Products() {
  const items = useSelector(selectBasketItems);

  useEffect(() => {
    console.log("items", items);
  }, [items]);

  return (
    <div className="products">
      <div className="products__map">
        {products.map((val, i) => (
          <ProductCard
            id={val.id}
            productName={val.productName}
            productPrice={val.productPrice}
            productImage={val.productImage}
            index={i}
          />
        ))}
      </div>
      {items.length > 0 && (
        <Link to="cart">
          <div className="products__cart">
            <ShoppingBasket />
          </div>
        </Link>
      )}
    </div>
  );
}

export default Products;
