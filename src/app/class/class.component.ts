import {Component} from "@angular/core";
@Component({
  selector:"classroom",
  templateUrl:"./class.component.html",
  styleUrls:["./class.component.css"],
})
export class ClassComponent{
  alowAddStudent: boolean= false;
  studentname: string="";
  notification: string="No student was created";
  creaded: boolean=false;
  sinhvien=[
      "Tran The Duong",
      "Nguyen Tuong Linh",
  ]
  constructor() { // la ham khoi tao thuc thi ngay tai thoi diem tao doi tuong
    setTimeout(()=>{
      this.alowAddStudent=true;
    },2000);
  }

  oncreatesudent(){
    if(this.studentname.length >0){
      this.sinhvien.push(this.studentname);

    this.notification="student "+this.studentname+" was created";
    this.studentname="";
    this.creaded= true;
    }
  }
}
