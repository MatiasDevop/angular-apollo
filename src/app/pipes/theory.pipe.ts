import { Pipe, PipeTransform } from '@angular/core';
import { of } from 'rxjs';
import { TheoryService } from '../services/theory.service';

@Pipe({
  name: 'theory',
  pure: true
})
export class TheoryPipe implements PipeTransform {
  constructor(private theory: TheoryService) {}

  transform(userId: number, property: 'title' | 'userId'): any {
    console.log(userId);
    const theory = this.theory.getTheory(userId);
    if (theory) {
      return of(theory[property]);// you can also apply pipes on observables https
    }
  }

}
