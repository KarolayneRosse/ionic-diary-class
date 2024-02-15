import { Component, OnInit } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { pencilSharp, trashSharp } from 'ionicons/icons';

@Component({
  selector: 'table-component',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  standalone: true,
  imports: [IonIcon]
})
export class TableComponent  implements OnInit {

  constructor() {
    addIcons({ pencilSharp, trashSharp });
  }

  ngOnInit() {}

}
