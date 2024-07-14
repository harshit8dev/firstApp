import { Component } from '@angular/core';
import { MemberdataService } from './services/memberdata.service'
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { warn } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
title = "BasicForm"
userData : any={};
member:any;
childValue= 'x';
display = false;
constructor(private memberdate:MemberdataService){
  console.warn("memberdata", memberdate.user())
  this.member = memberdate.user();
}
list :any[] = [];
userDetails = [
  {Name:'abc', email:'abc@gmail.com'},
  {Name:'xyz', email:'xyz@gmail.com'}
]

memberData = [
  {name:'abc', email:'abc@test.com'},
  {name:'xyz', email:'xyz@test.com'},
  {name:'harshit', email:'harshit@test.com'}
]
logindetails = new FormGroup({
  name:new FormControl('', [Validators.required, Validators.pattern('[A-Za-z]+$')]),
  password:new FormControl('', [Validators.required, Validators.minLength(5)])
})

get name(){
  return this.logindetails.get('name');
}

get password(){
  return this.logindetails.get('password');
}

loginUser(){
  console.log(this.logindetails.value);
}

updateValues(item:string){
  this.childValue = item;
}

  getData(data:NgForm){
    console.warn(data);
    this.userData = data;
  }
  toggle() {
   this.display = !this.display;
  }

  addtask(item:string) {
    this.list.push({id: this.list.length, name:item});
    console.log(this.list)
  }
  removetask(id:number){
    this.list = this.list.filter(item => item.id !== id)
  }
   
}
