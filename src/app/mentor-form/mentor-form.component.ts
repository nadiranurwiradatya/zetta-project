import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { MentorService } from '../service/mentor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-mentor-form',
  templateUrl: './mentor-form.component.html',
  styleUrls: ['./mentor-form.component.scss'],
})
export class MentorFormComponent implements OnInit {
  mentorForm: FormGroup;
  id: string = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private mentorService: MentorService,
    private router: Router,
    private route: ActivatedRoute,
    private dialogRef: MatDialogRef<MentorFormComponent>
  ) {}

  ngOnInit(): void {
    this.createForm();

    if (this.data && this.data.mentor) {
      // Jika ada, ini adalah mode edit
      this.id = this.data.mentor._id;
      console.log(this.data === this.data.mentor._id); // Mengambil id dari data mentor yang diterima
      this.mentorForm.patchValue(this.data.mentor); // Mengisi form dengan data mentor
    }
  }

  createForm(): void {
    this.mentorForm = this.fb.group({
      _id: [''],
      email: ['', [Validators.required, Validators.email]],
      civility: ['', Validators.required], // Pastikan ini menggunakan Validators.required agar tidak ada pilihan kosong
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      company: this.fb.group({
        name: ['', Validators.required],
        user_type: ['', Validators.required],
      }),
      user_status: [''],
      count_document: ['', Validators.required],
      birthdate: ['', Validators.required],
      gender: ['', Validators.required],
    });
  }

  onSubmit(): void {
    const formData = this.mentorForm.value;
    let successMessage = '';
    let confirmButtonText = '';

    if (this.mentorForm.invalid) {
      Swal.fire({
        title: 'Error!',
        text: 'Please fill all required fields with valid value!',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
      return;
    }

    if (!this.id) {
      successMessage = 'Successfully added new data!';
      confirmButtonText = 'Yes, add it!';
      // this.mentorService.addNewMentor(formData);
    } else {
      successMessage = 'Your data has been edited!';
      confirmButtonText = 'Yes, edit it!';
      // this.mentorService.updateMentor(formData);
    }

    Swal.fire({
      title: 'Are you sure?',
      text: 'You are about to submit this form!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: confirmButtonText,
      cancelButtonText: 'No, keep it',
    }).then((result) => {
      if (result.isConfirmed) {
        if (!this.id) {
          this.mentorService.addNewMentor(formData);
        } else {
          this.mentorService.updateMentor(formData);
        }
        this.router.navigate(['/home']);
        this.dialogRef.close();
        Swal.fire('Submitted!', successMessage, 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your form is safe :)', 'error');
      }
    });
  }
}
