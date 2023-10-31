import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar-left-seller',
  templateUrl: './toolbar-left-seller.component.html',
  styleUrls: ['./toolbar-left-seller.component.css']
})
export class ToolbarLeftSellerComponent {

  toggle:boolean = true;
  width:string = "calc(100% - 172px)"

  useToggle(t:boolean){
    this.toggle = t;
    this.width = this.toggle ? "calc(100% - 172px)" : "100%"
  }
}
