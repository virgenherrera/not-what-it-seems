import { Dispatch } from "react";
import { ProductDetail } from "../models/product-detail.mode";

export const productDetailInitialState = {} as ProductDetail;
export enum ProductOption {
  load = "PRODUCT_LOAD",
}

export type ActionClickOption = {
  type: ProductOption.load;
  payload: ProductDetail;
};

export function ProductDetailReducer(
  state: ProductDetail,
  action: ActionClickOption
): ProductDetail {
  switch (action.type) {
    case ProductOption.load:
      return { ...state, ...action.payload };
    default:
      throw new Error("no default action for ProductReducer.");
  }
}

export type ProductDetailStore = {
  state: ProductDetail;
  dispatch: Dispatch<ActionClickOption>;
};
