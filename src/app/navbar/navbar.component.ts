import { Component } from '@angular/core';
import { APP_NAME } from '../config/constants';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  public appName = APP_NAME;
}
