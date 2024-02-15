import { Component, OnInit } from '@angular/core';
import { IonButton } from '@ionic/angular/standalone';
import { TableComponent } from '../components/table/table.component';

@Component({
  selector: 'schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.scss'],
  standalone: true,
  imports: [IonButton, TableComponent]
})
export class SchoolsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
