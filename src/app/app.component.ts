import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

export interface Quastion {
  description: string;
  category?: string;
  value: number;
  quastion: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'model-demo';
  isAdmin = signal(false);
  someText = signal('');

  categories = [
    {
      description: `whos's whow`,
      quastions: [
        {

          description: 'he is the angular uber TL',
          value: 200,
          quastion: 'who is aliakbar esmaeili?',
        },
        {
          description: 'he has been angular developer over 8 years',
          value: 300,
          quastion: 'who is ali abbaszade?',
        },
      ]
    },
    {
      description: `There onc was`,
      quastions: [
        {
          description: 'Q1',
          value: 200
        },
        {
          description: 'Q2',
          value: 300
        },
      ]
    }
  ]
  constructor() {
  }

}
