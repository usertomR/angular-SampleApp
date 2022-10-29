import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent {
  @Input() product!: Product | undefined;
  // ProductAlertsComponentが、notifyプロパティの値が変更されたときにイベントを発行することができる。
  @Output() notify = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
