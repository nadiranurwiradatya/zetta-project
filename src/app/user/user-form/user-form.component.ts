import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subscription } from 'rxjs';
import { userFormInit } from '../../shared/helpers/forms';
import { UserService } from '../../shared/service/user.service';
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup;
  id: number = 0;
  routeSubscription: Subscription;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.userService.selecteduser$.subscribe((selectedUser) => {
      this.userForm.patchValue(selectedUser);
      this.spinner.hide();
    });
    this.userForm = userFormInit(this.fb);
    this.spinner.show();
    this.route.queryParams.subscribe((queryParams) => {
      this.id = queryParams['id'];
      if (!this.id) {
        this.userForm.reset();
      }
    });

    console.log(this.id);

    if (this.id) {
      this.userService.getUserById(this.id);
    }
  }

  // getUserById(id: number): void {
  //   this.userService.getUserById(id).subscribe(
  //     (response: UserType) => {
  //       this.userForm.patchValue(response);
  //       this.spinner.hide();
  //     },
  //     (error) => {
  //       console.error('Error fetching user detail:', error);
  //       this.spinner.hide();
  //       Swal.fire({
  //         icon: 'error',
  //         title: 'Oops...',
  //         text: 'Something went wrong while fetching user detail!',
  //       });
  //     }
  //   );
  // }

  onSubmit(): void {
    const formData = this.userForm.value;
    console.log(formData);
    let successMessage = '';
    let confirmButtonText = '';

    this.userForm.markAllAsTouched();

    if (this.userForm.invalid) {
      Swal.fire({
        title: 'Error!',
        text: 'Please fill all required fields with valid value!',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
      return;
    }
    if (!this.id) {
      formData.id = uuidv4();
      successMessage = 'Successfully added new data!';
      confirmButtonText = 'Yes, add it!';
      this.userService.createUser(formData);
    } else {
      successMessage = 'Your data has been edited!';
      confirmButtonText = 'Yes, edit it!';
      this.userService.updateUser(formData);
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
        this.router.navigate(['/user']);
        Swal.fire('Submitted!', successMessage, 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your form is safe :)', 'error');
      }
    });
  }
}
