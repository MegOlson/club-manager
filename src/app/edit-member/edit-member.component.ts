import { Component, Input, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { Router } from '@angular/router';
import { Member } from '../member.model';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.css'],
  providers: [MemberService]
})
export class EditMemberComponent implements OnInit {
  @Input() selectedMember;

  constructor(
    private router: Router,
    private memberService: MemberService
  ) { }

  ngOnInit() {
  }

  beginUpdatingMember(memberToUpdate) {
    this.memberService.updateMember(memberToUpdate);
    this.router.navigate(['members']);
  }

  beginDeletingMember(memberToDelete) {
    if(confirm("Are you sure you want to delete this?")) {
      this.memberService.deleteMember(memberToDelete);
    }
  }
}
