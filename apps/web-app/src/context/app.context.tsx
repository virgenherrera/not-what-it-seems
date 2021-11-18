/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from "react";
import {
  ActionClickReducer,
  clickActionInitialState,
  ClickActionStore,
} from "../store/click-option.reducer";
import {
  productDetailInitialState,
  ProductDetailReducer,
  ProductDetailStore,
  ProductOption,
} from "../store/products-state.reducer";
import {
  relatedProductInitialState,
  RelatedProductOption,
  RelatedProductReducer,
  RelatedProductStore,
} from "../store/related-products.reducer";
import { getProducts } from "../utils/get-products.util";

interface AppContext {
  clickAction: ClickActionStore;
  productDetail: ProductDetailStore;
  relatedProduct: RelatedProductStore;
}

const appContextDefaultValue = {} as AppContext;
const AppStore = createContext(appContextDefaultValue);

export function UseAppContext() {
  return useContext(AppStore);
}

export function UseAppProvider({ children }: PropsWithChildren<any>) {
  const productTuple = useReducer(
    ProductDetailReducer,
    productDetailInitialState
  );
  const relatedProductTuple = useReducer(
    RelatedProductReducer,
    relatedProductInitialState
  );
  const actionClickTuple = useReducer(
    ActionClickReducer,
    clickActionInitialState
  );
  const appContext: AppContext = {
    clickAction: { state: actionClickTuple[0], dispatch: actionClickTuple[1] },
    productDetail: {
      state: productTuple[0],
      dispatch: productTuple[1],
    },
    relatedProduct: {
      state: relatedProductTuple[0],
      dispatch: relatedProductTuple[1],
    },
  };

  const getProductsCb = useCallback(() => {
    const subscription$ = getProducts().subscribe({
      next: (data) => {
        appContext.productDetail.dispatch({
          type: ProductOption.load,
          payload: data.productDetail,
        });

        appContext.relatedProduct.dispatch({
          type: RelatedProductOption.load,
          payload: data.relatedProducts,
        });

        subscription$.unsubscribe();
      },
    });
  }, []);

  useEffect(() => {
    getProductsCb();
  }, []);

  return <AppStore.Provider value={appContext}>{children}</AppStore.Provider>;
}
