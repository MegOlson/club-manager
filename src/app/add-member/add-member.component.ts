import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { MemberService } from '../member.service';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css'],
  providers: [MemberService]
})
export class AddMemberComponent implements OnInit {

  constructor(
    private router: Router,
    private memberService: MemberService
  ) { }

  ngOnInit() {
  }

  submitForm(
    name: string,
    age: number,
    email: string,
    specialty: string,
    experience: string,
    favoriteCrop: string
  ) {
    let newMember: Member = new Member(name, age, email, specialty, experience, favoriteCrop);
    this.memberService.addMember(newMember);
    this.router.navigate(['members']);
  }

}
