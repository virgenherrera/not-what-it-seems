import { Dispatch } from "react";
import { RelatedProduct } from "../models/related-product.model";

export const relatedProductInitialState: RelatedProduct[] = [];
export enum RelatedProductOption {
  load = "RELATED_PRODUCT_LOAD",
}

export type ActionClickOption = {
  type: RelatedProductOption.load;
  payload: RelatedProduct[];
};

export function RelatedProductReducer(
  state: RelatedProduct[],
  action: ActionClickOption
): RelatedProduct[] {
  switch (action.type) {
    case RelatedProductOption.load:
      return [...state, ...action.payload];
    default:
      throw new Error("no default action for ProductReducer.");
  }
}

export type RelatedProductStore = {
  state: RelatedProduct[];
  dispatch: Dispatch<ActionClickOption>;
};
