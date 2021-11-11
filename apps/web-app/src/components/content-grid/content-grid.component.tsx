import React from "react";
import { UseAppContext } from "../../context/app.context";
import { useGetProduct } from "../../hooks/use-get-product.hook";
import { ProductDetail } from "../product-detail/product-detail.component";
import { RelatedProducts } from "../related-products/related-products.component";
import "./content-grid.scss";

export function ContentGrid() {
  const { clickAction } = UseAppContext();
  const { loading, productDetail, relatedProducts } = useGetProduct();

  console.log(clickAction.state);

  return loading ? (
    <div className="content-grid"></div>
  ) : (
    <div className="content-grid">
      <ProductDetail productDetail={productDetail} />
      <RelatedProducts {...{ relatedProducts }} />
      <pre>{JSON.stringify(clickAction.state, null, 2)}</pre>
    </div>
  );
}
