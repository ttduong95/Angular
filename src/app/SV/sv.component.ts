import {Component,Input} from "@angular/core";
@Component({
  selector:"SV",
  templateUrl:"./sv.component.html",
  styleUrls:["./sv.component.css"],
})
export class SvComponent{
  @Input() name: string | undefined;
n1:number=7;
n2:number=8;
n3:number=8.5;
n4:number=5;

tbdiemthi(){
  return(this.n1+this.n2+this.n3+this.n4)/4;
}

}
