import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  readonly users = [
    { id: 1, name: 'Niels Bohr' },
    { id: 2, name: 'Albert Enstien' }
  ];
  constructor() { }
}
