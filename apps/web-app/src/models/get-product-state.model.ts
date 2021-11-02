import { ProductDetail } from "./product-detail.mode";

export class GetProductState {
    loading:boolean;
    data:ProductDetail|null;

    constructor({loading=true, data=null}: Partial<GetProductState> = {}) {
        this.loading = loading;
        this.data = data;
    }
}