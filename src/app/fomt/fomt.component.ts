import {Component, Input} from "@angular/core";
@Component({
  selector:"fomt",
  templateUrl:"./fomt.component.html",
})
export class FomtComponent{
  @Input () name: string | undefined;
  @Input() email: string | undefined;
  @Input() date: string | undefined;

}
