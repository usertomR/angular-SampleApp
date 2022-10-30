import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// productsの配列をインポート
import { Product, products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  // どうやらユニオン型らしい
  product: Product | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    // routeParamsの中身の表示。ex: {"params":{"productId":"1"}}
    window.alert(JSON.stringify(routeParams))
    const productIdFromRoute = Number(routeParams.get('productId'));
    this.product = products.find(product => product.id === productIdFromRoute);
  }

}
