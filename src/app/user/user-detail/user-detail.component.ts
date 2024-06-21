import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserType } from '../../shared/helpers/interface';
import { UserService } from '../../shared/service/user.service';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  user: UserType;
  userId: number;

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.userService.selecteduser$.subscribe((selectedUser) => {
      this.user = selectedUser;
      this.spinner.hide();
    });

    this.userId = Number(this.route.snapshot.paramMap.get('id'));
    this.spinner.show();
    this.userService.getUserById(this.userId);
    // this.getUserDetail(this.userId);
  }

  onDeleteUser(id: number): void {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this data!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.deleteUser(id);
        Swal.fire('Deleted!', 'Your data has been deleted.', 'success');
        this.router.navigate(['/user']);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your data is safe :)', 'error');
      }
    });
  }
}
