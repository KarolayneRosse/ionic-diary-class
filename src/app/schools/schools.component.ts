import { Component, OnInit } from '@angular/core';
import { IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.scss'],
  standalone: true,
  imports: [IonButton,]
})
export class SchoolsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
