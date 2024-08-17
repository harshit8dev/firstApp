import { Component } from '@angular/core';
import { MemberdataService } from '../services/memberdata.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  memberEmail:any;
  constructor(private memberdate:MemberdataService){
    this.memberEmail = memberdate.user();
  }
}
