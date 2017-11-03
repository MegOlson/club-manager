import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { MemberService } from '../member.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [MemberService]
})
export class AboutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
