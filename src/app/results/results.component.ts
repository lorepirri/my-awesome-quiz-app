import { Component, Input } from '@angular/core';
import { Answers } from '../quiz.model';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {
  @Input() answers: Answers;
}
