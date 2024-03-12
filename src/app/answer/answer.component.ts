import { Component, input } from '@angular/core';

@Component({
  selector: 'app-answer',
  standalone: true,
  imports: [],
  template: `
    <p>
    {{text()}}
    </p>
  `,
  styles: ``
})
export class AnswerComponent {
  text = input('')

}
