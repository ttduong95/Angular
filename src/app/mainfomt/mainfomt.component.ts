import {Component} from "@angular/core";
@Component({
  selector:"main-fomt",
  templateUrl:"./mainfomt.component.html",
})
export class MainfomtComponent{
  email: string="";
  emails =[""];
  user: string="";
  pass: string="";
  name: string="";
  names=[""];
  date: string="";
  dates=[""];
  gender:string="";


  onmenu(){
    if(this.emails.length>0 && this.names.length>0){
      this.emails.push(this.email);
      this.names.push(this.name);
      this.dates.push(this.date);
      this.email="";
      this.name="";
      this.date="";
    }
  }
}
