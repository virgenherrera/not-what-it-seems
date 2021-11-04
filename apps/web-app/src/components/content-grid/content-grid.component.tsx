import React from "react";
import { useGetProduct } from "../../hooks/use-get-product.hook";
import { ProductDetail } from "../product-detail/product-detail.component";
import "./content-grid.scss";

export function ContentGrid() {
  const { loading, productDetail, relatedProducts } = useGetProduct();

  return loading ? (
    <div className="content-grid"></div>
  ) : (
    <div className="content-grid">
      <ProductDetail
        productDetail={productDetail}
        relatedProducts={relatedProducts}
      />
    </div>
  );
}
