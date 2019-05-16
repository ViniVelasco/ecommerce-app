import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductDTO } from '../../models/product.dto';

/**
 * Generated class for the ProductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
})
export class ProductsPage {

  items: ProductDTO[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.items = [
      {
        id: "1",
        name: "Mouse",
        price: 80.88
      },
      {
        id: "2",
        name: "teclado",
        price: 100.00
      }
    ]
  }

}
