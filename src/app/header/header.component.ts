import { Component,  EventEmitter,  Input, OnInit, Output, output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
constructor(){}
// @Input() data : {Name:string, email:string} = {Name:'', email:''};
@Output() updateValue = new EventEmitter<string>;
ngOnInit(): void {
  
}
}
