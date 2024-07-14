import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MemberdataService {

  constructor() { }
  user(){
    return[
      {name:'Noname', age:20, email:'Noname@test.com'},
      {name:'sharma', age:10, email:'sharma@test.com'},
      {name:'harshit', age:25, email:'harshit@test.com'}
    ]
  }
}
