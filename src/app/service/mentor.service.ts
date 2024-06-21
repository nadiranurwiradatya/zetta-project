import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MentorType } from './helper/interface';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MentorService {
  //membuat behavior berisi mentor type
  private mentor: BehaviorSubject<MentorType[]> = new BehaviorSubject<
    MentorType[]
  >([]);
  mentor$ = this.mentor.asObservable();

  private selectedMentor: BehaviorSubject<MentorType | null> =
    new BehaviorSubject<MentorType | null>(null);
  selectedmentor$ = this.selectedMentor.asObservable();

  constructor(private http: HttpClient) {
    this.getMentors();
  }

  getMentors(): void {
    this.http.get<MentorType[]>('assets/mentor.json').subscribe({
      next: (mentors: MentorType[]) => {
        // console.log(mentors);
        this.mentor.next(mentors);
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
    });
  }

  getMentorById(id: string) {
    return this.mentor.getValue().find((mentor) => mentor._id === id);
  }

  deleteMentor(id: string) {
    const mentorList = this.mentor.getValue();
    const index = mentorList.findIndex((mentor) => mentor._id === id);
    if (index !== -1) {
      mentorList.splice(index, 1);
      this.mentor.next(mentorList);
    }
  }

  addNewMentor(newMentor: MentorType) {
    const currentMentors = [...this.mentor.value];
    let highestId = 0;
    // Mencari ID tertinggi yang sudah ada di dalam daftar mentor
    currentMentors.forEach((mentor) => {
      const mentorId = parseInt(mentor._id);
      if (mentorId > highestId) {
        //jika mentorId lebih besar dari Id Tertinggi mak
        highestId = mentorId;
        console.log(highestId);
      }
    });
    // Menambahkan 1 ke ID tertinggi untuk mendapatkan ID baru
    const newId = highestId + 1;
    newMentor._id = newId.toString();
    currentMentors.unshift(newMentor); // Agar newMentor berada di atas
    this.mentor.next(currentMentors);
  }

  updateMentor(updatedMentor: MentorType) {
    const mentor = this.mentor.getValue();
    const index = mentor.findIndex(
      (mentor) => mentor._id === updatedMentor._id
    );
    if (index !== -1) {
      mentor[index] = updatedMentor;
      this.mentor.next([...mentor]);
    }
  }
}