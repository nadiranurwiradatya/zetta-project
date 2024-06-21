import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserType } from '../helpers/interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user: BehaviorSubject<UserType[]> = new BehaviorSubject<UserType[]>(
    []
  );
  user$ = this.user.asObservable();

  private selecteduser: BehaviorSubject<UserType | null> =
    new BehaviorSubject<UserType | null>(null);
  selecteduser$ = this.selecteduser.asObservable();

  apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.http
      .get<UserType[]>(`${this.apiUrl}/users`, { observe: 'response' })
      .subscribe({
        next: (response: HttpResponse<any>) => {
          this.user.next(response.body);
        },
        error: (error) => {
          console.error('There was an error!', error);
        },
      });
  }

  getUserById(userId: number): void {
    this.http
      .get<UserType>(`${this.apiUrl}/users/${userId}`, { observe: 'response' })
      .subscribe({
        next: (response: HttpResponse<any>) => {
          this.selecteduser.next(response.body);
        },
        error: (error) => {
          console.error('There was an error!', error);
        },
      });
  }

  deleteUser(id: number): void {
    this.http
      .delete<any>(`${this.apiUrl}/users/${id}`, { observe: 'response' })
      .subscribe({
        next: (response: HttpResponse<any>) => {
          console.log(response);
          if (response.status === 200 && response.statusText === 'OK') {
            console.log('Delete successful!');

            const userList = this.user.getValue();
            const index = userList.findIndex((user) => user.id === id);
            if (index !== -1) {
              userList.splice(index, 1);
              this.user.next(userList);
            }
          } else {
            console.error('Delete failed with status code:', response.status);
          }
        },
        error: (error) => {
          console.error('There was an error!', error);
        },
      });
  }

  createUser(userData: UserType): void {
    this.http
      .post<any>(`${this.apiUrl}/users`, userData, { observe: 'response' })
      .subscribe({
        next: (response: HttpResponse<any>) => {
          console.log(response);
          if (response.status === 201 && response.statusText === 'OK') {
            this.user.next([...this.user.getValue(), response.body]);
            console.log('User added successfully!');
          } else {
            console.error('Add user failed with status code:', response.status);
          }
        },
        error: (error) => {
          console.error('There was an error!', error);
        },
      });
  }

  updateUser(updateData: UserType): void {
    this.http
      .put<UserType>(`${this.apiUrl}/users/${updateData.id}`, updateData, {
        observe: 'response',
      })
      .subscribe({
        next: (response: HttpResponse<any>) => {
          console.log(response);
          if (response.status === 200 && response.statusText === 'OK') {
            const users = this.user.getValue();
            const index = users.findIndex((user) => user.id === updateData.id);
            if (index !== -1) {
              users[index] = updateData;
              this.user.next([...users]);
            }
          } else {
            console.error('Add user failed with status code:', response.status);
          }
        },
        error: (error) => {
          console.error('There was an error!', error);
        },
      });
  }
}
