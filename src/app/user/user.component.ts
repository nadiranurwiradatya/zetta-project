import { Component, OnInit } from '@angular/core';
import { UserType } from '../shared/helpers/interface';
import { UserService } from '../shared/service/user.service';
import { FilterPipe } from '../shared/pipes/filter.pipe';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  providers: [FilterPipe],
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  userList: UserType[] = [];
  searchTerm: string = '';

  constructor(
    private userService: UserService,
    private filterPipe: FilterPipe
  ) {}

  ngOnInit(): void {
    this.userService.user$.subscribe((user) => {
      this.userList = user;
    });
  }

  get filteredUser(): UserType[] {
    return this.userList.filter((user) =>
      this.filterPipe
        .transform(user.name)
        .includes(this.filterPipe.transform(this.searchTerm))
    );
  }
}
