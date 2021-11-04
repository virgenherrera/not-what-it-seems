import { useEffect, useState } from "react";
import { GetProductState } from "../models/get-product-state.model";
import { getProducts } from "../utils/get-products.util";

export function useGetProduct() {
  const [state, setState] = useState(new GetProductState());

  useEffect(() => {
    const subscription$ = getProducts().subscribe({
      next: (data) => {
        setState(new GetProductState({ loading: false, ...data }));

        subscription$.unsubscribe();
      },
    });
  }, []);

  return state;
}
