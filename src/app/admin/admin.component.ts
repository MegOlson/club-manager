import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { MemberService } from '../member.service';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { AddMemberComponent } from '../add-member/add-member.component';
import { EditMemberComponent } from '../edit-member/edit-member.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [MemberService]
})
export class AdminComponent implements OnInit {

  constructor(private memberService: MemberService, private router: Router) { }

  ngOnInit() {
  }

}
