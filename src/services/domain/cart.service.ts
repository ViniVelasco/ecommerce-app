import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { CategoryDTO } from "../../models/category.dto";
import { Observable } from "rxjs/Rx";
import { StorageService } from "../storage.service";
import { Cart } from "../../models/cart";
import { ProductDTO } from "../../models/product.dto";

@Injectable()
export class CartService {

  constructor(public storage: StorageService) {}

  createOrClearCart() : Cart {
    let cart: Cart = {items: []};
    this.storage.setCart(cart);
    return cart;
  }

  getCart() : Cart {
    let cart: Cart = this.storage.getCart();

    if(cart == null) {
      cart = this.createOrClearCart();
    }
    return cart;
  }

  addProduct(product: ProductDTO) : Cart {
    let cart = this.getCart();
    let position = cart.items.findIndex(x => x.product.id == product.id);

    if(position == -1) {
      cart.items.push({quantity: 1, product});
    }
    this.storage.setCart(cart);
    return cart;
  }

}
