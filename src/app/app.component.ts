import { Component, OnInit } from '@angular/core';
import { Member } from './member.model';
import { MemberService } from './member.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fullImagePath: string;

  constructor(){
    this.fullImagePath = 'src/app/flower.png';
  }

}
