import {Component, EventEmitter, Output} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-toolbar-top',
  templateUrl: './toolbar-top.component.html',
  styleUrls: ['./toolbar-top.component.css']
})
export class ToolbarTopComponent {

  showMenu: boolean = false;
  selectedRole: string = '';
  toggleSideNav: boolean = true;
  @Output() useToggleSideNav = new EventEmitter<boolean>();

  constructor(private router: Router) {}

  emitToggleSideNav(){
    this.toggleSideNav = !this.toggleSideNav;
    this.useToggleSideNav.emit(this.toggleSideNav);
  }


  toggleMenu() {
    this.showMenu = !this.showMenu;
    if (this.showMenu) {
      document.addEventListener('click', this.hideMenuOnClick);
    } else {
      document.removeEventListener('click', this.hideMenuOnClick);
    }
  }

  hideMenu() {
    this.showMenu = false;
  }

  hideMenuOnClick(event: any) {
    if (!event.target.closest('.profile') && this.showMenu) {
      this.hideMenu();
    }
  }

  selectRole(role: string) {
    this.selectedRole = role;
    this.hideMenu();

    if (role === 'Seller') {
      this.router.navigate(['toolbar-left-seller']);
    } else if (role === 'Customer') {
      this.router.navigate(['home']);
    }
  }

}
