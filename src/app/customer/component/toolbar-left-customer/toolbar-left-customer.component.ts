import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar-left-customer',
  templateUrl: './toolbar-left-customer.component.html',
  styleUrls: ['./toolbar-left-customer.component.css']
})
export class ToolbarLeftCustomerComponent {

  toggle:boolean = true;
  width:string = "calc(100% - 172px)"

  useToggle(t:boolean){
    this.toggle = t;
    this.width = this.toggle ? "calc(100% - 172px)" : "100%"
  }

}
