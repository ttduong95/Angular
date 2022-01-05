import {Component} from "@angular/core";
import {Productdata} from "../data/productdata";
@Component({
  selector:"list-product",
  templateUrl:"./listproduct.component.html",
})
export class ListproductComponent{
  products: Productdata[]=[
    {
      name:"San Pham 1",
      image:"img.png",
      price:1000,
    },
    {
      name:"San Pham 2",
      image:"img.png",
      price:2000,
    }
  ];
}
