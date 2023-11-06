import { ErrorService } from './../../services/error.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-global-error',
  templateUrl: './global-error.component.html',
  styleUrls: ['./global-error.component.scss']
})
export class GlobalErrorComponent {
  constructor(public errorService: ErrorService){}
}
