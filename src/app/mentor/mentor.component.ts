import { Component, OnInit } from '@angular/core';
import { MentorService } from '../service/mentor.service';
import { MentorType } from '../service/helper/interface';
import { MatDialog } from '@angular/material/dialog';
import { MentorFormComponent } from '../mentor-form/mentor-form.component';

@Component({
  selector: 'app-mentor',
  templateUrl: './mentor.component.html',
  styleUrls: ['./mentor.component.scss'],
})
export class MentorComponent implements OnInit {
  mentorList: MentorType[] = [];

  constructor(
    private mentorService: MentorService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.mentorService.mentor$.subscribe((mentor) => {
      this.mentorList = mentor;
    });
  }
}
