import { Component, HostListener } from '@angular/core';
import { TheoryService } from 'src/app/services/theory.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-theory',
  templateUrl: './theory.component.html',
  styleUrls: ['./theory.component.css']
})
export class TheoryComponent{
  @HostListener('click')
  clicked(){
    console.log('clicked....');
  }
  public users: any;
  constructor(public user: UsersService, public theory: TheoryService) { }

  getTheory(userId: number): any {
    console.log(
      ' - file: app.components. ts line 16 getTheory.........', userId
    );
    return this.theory.getTheory(userId);
  }
}
