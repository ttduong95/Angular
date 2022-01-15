import {Component,ViewChild} from "@angular/core";
import {NgForm} from "@angular/forms";

@Component({
  selector:'create',
  templateUrl:'./create.component.html',
})

export class CreateComponent{
  @ViewChild("f") createForm!: NgForm;
  onSubmit(){
    console.log(this.createForm.value);
  }
}
