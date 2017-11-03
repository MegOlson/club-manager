import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { MemberService } from '../member.service';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { ExperiencePipe } from '../experience.pipe';

@Component({
  selector: 'app-young-growers',
  templateUrl: './young-growers.component.html',
  styleUrls: ['./young-growers.component.css'],
  providers: [MemberService]
})
export class YoungGrowersComponent implements OnInit {
  members: FirebaseListObservable<any[]>;

  constructor(
    private router: Router,
    private memberService: MemberService
  ) { }

  ngOnInit() {
    this.members = this.memberService.getMembers();
  }

  goToMemberPage(clickedMember) {
    this.router.navigate(['members', clickedMember.$key]);
  }

}
