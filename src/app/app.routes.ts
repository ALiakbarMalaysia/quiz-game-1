import { Routes } from '@angular/router';
import { AnswerComponent } from './answer/answer.component';

export const routes: Routes = [
    {
        path: 'answer/:text',
        component: AnswerComponent
    }

];
