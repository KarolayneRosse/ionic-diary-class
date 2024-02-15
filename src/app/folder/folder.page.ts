import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent } from '@ionic/angular/standalone';
import { SchoolsComponent } from '../schools/schools.component';
import { StudentsComponent } from '../students/students.component';
import { GradesComponent } from '../grades/grades.component';
import { ClassesComponent } from '../classes/classes.component';
import { NgSwitch, NgSwitchCase } from '@angular/common';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, SchoolsComponent,
  StudentsComponent, GradesComponent, ClassesComponent, NgSwitch, NgSwitchCase]
})
export class FolderPage implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  constructor() {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }
}
