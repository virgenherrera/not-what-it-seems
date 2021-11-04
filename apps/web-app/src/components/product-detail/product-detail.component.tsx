import React from "react";
import { GetProductState } from "../../models/get-product-state.model";
import { ProductDetailMeta } from "../product-detail-meta/product-detail-meta.component";
import "./product-detail.scss";

export interface ProductDetailProps {
  productDetail: GetProductState["productDetail"];
  relatedProducts: GetProductState["relatedProducts"];
}

export function ProductDetail({ productDetail }: ProductDetailProps) {
  return (
    <div className="product-detail-wrapper">
      <div className="product-highlight">
        <div className="product-image">Image Here!</div>

        <div className="product-header">
          <div className="product-title">{productDetail?.name}</div>
          <div className="product-subtitle">{productDetail?.createdBy}</div>
        </div>

        <div className="product-description">{productDetail?.description}</div>
      </div>

      <ProductDetailMeta productDetail={productDetail} />
    </div>
  );
}
