import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MentorService } from '../service/mentor.service';
import { MentorType } from '../service/helper/interface';
import { MatDialog } from '@angular/material/dialog';
import { MentorFormComponent } from '../mentor-form/mentor-form.component';

@Component({
  selector: 'app-mentor-detail',
  templateUrl: './mentor-detail.component.html',
  styleUrls: ['./mentor-detail.component.css'],
})
export class MentorDetailComponent implements OnInit {
  mentor: MentorType;
  mentorId: string;
  constructor(
    private router: Router,
    private mentorService: MentorService,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    const mentorId = this.route.snapshot.paramMap.get('id');
    if (mentorId) {
      this.mentorId = mentorId;
      this.mentor = this.mentorService.getMentorById(mentorId);
    }
  }

  goBack(): void {
    this.router.navigate(['/home']);
  }

  openEditDialog(): void {
    const dialogRef = this.dialog.open(MentorFormComponent, {
      width: '400px',
      minHeight: '100px',
      data: { mentor: this.mentor }, // Kirim data mentor sebagai objek dengan properti 'mentor'
    });
  }
}
