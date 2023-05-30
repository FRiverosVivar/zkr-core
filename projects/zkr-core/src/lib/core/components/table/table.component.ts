import {Component, Input} from '@angular/core';
import {SweetAlert2LoaderService} from "@sweetalert2/ngx-sweetalert2";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() columns: string[] = [];
  @Input() fields: any[] = [];
  constructor() {}

}
