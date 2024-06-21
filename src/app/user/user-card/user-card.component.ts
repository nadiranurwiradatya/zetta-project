import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserType } from '../../shared/helpers/interface';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
})
export class UserCardComponent implements OnInit {
  @Input() user: UserType;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToDetailUser(id: number) {
    if (id > 10) {
      id = 10;
    }
    this.router.navigate(['user/detail', id]);
  }
}
