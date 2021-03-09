import React, { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { useDispatch } from "react-redux";
import "./style.css";

const ProductList: React.FC = () => {
  return (
    <section className="c-section-wrapin">
      <div className="p-grid__row">
        <ProductCard></ProductCard>
      </div>
    </section>
  );
};

export default ProductList;
