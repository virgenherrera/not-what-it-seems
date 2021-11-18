import React from "react";
import { ProductDetail } from "../product-detail/product-detail.component";
import { RelatedProducts } from "../related-products/related-products.component";
import "./content-grid.scss";

export function ContentGrid() {
  return (
    <div className="content-grid">
      <ProductDetail />
      <RelatedProducts />
    </div>
  );
}
