import { Component } from '@angular/core';
import { APP_NAME } from '../config/constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  public appName = APP_NAME;
}
