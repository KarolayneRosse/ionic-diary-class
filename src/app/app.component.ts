import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { albumsSharp,peopleSharp, documentsSharp, storefrontSharp } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet],
})
export class AppComponent {
  public appPages = [
    {title: 'Escolas', url: '/folder/escolas', icon: 'storefront' },
    { title: 'Turmas', url: '/folder/turmas', icon: 'albums' },
    { title: 'Alunos', url: '/folder/alunos', icon: 'people' },
    { title: 'Notas', url: '/folder/notas', icon: 'documents' },
  ];

  constructor() {
    addIcons({ albumsSharp,peopleSharp,documentsSharp, storefrontSharp });
  }
}
