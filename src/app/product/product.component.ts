import {Component, Input} from "@angular/core";
import {Productdata} from "../data/productdata";

@Component({
  selector:"product",
  templateUrl:"./product.component.html",

})
export class ProductComponent{
@Input() product!: Productdata;

}
