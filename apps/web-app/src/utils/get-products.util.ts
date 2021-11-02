import { map, pluck } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { ProductDetail } from '../models/product-detail.mode';

export function getProducts() {
    const url = 'https://virtserver.swaggerhub.com/don-chambitas/duro_code_challenge/1.0.0/view-detail';
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

    return ajax({
        url,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: {
            "catalog": "products",
            "country": "us",
            "id": 25
          }
      })
      .pipe(
        pluck('response'),
        map(res => new ProductDetail(res))
      )
}