import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlayerDataService } from '../service/player-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PlayerType } from '../service/interface';
import { kMaxLength } from 'buffer';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  playerForm: FormGroup;
  isEdit: boolean = false;

  constructor(
    private fb: FormBuilder,
    private playerDataService: PlayerDataService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const playerId = +params['id'];
      if (playerId) {
        const player = this.playerDataService.getPlayerById(playerId);
        if (player) {
          this.initializeForm(player);
          this.isEdit = true;
        }
      } else {
        this.initializeForm();
      }
    });
  }

  initializeForm(playerData?: PlayerType): void {
    this.playerForm = this.fb.group({
      nickname: [playerData ? playerData.nickname : '', Validators.required],
      origin: [playerData ? playerData.origin : '', Validators.required],
      role: [playerData ? playerData.role : '', Validators.required],
      hero: [playerData ? playerData.hero : '', Validators.required],
      imageUrl: [playerData ? playerData.imageUrl : '', Validators.required],
      email: [playerData ? playerData.email : '', Validators.email],
      bio: [playerData ? playerData.bio : '', Validators.required],
      flag: [playerData ? playerData.flag : '', Validators.required],
      addresses: this.fb.array([]),
    });

    if (playerData && playerData.addresses) {
      this.updatedAddresses(playerData.addresses);
    }
  }

  //memasukkan addres ke form array
  get addresses(): FormArray {
    return this.playerForm.get('addresses') as FormArray;
  }

  //mengisi form array dengan address yang sudah ada ,menambahkan formulir untuk setiap alamat baru ke FormArray addresses.
  updatedAddresses(addressesData: any[]): void {
    if (Array.isArray(addressesData)) {
      addressesData.forEach((addressData) => {
        this.addresses.push(this.createAddressFormGroup(addressData));
      });
    } else {
      console.error('Invalid addresses data:', addressesData);
    }
  }

  //membuat formgrop addres dengan data awal kosong yang bisa di isi
  createAddressFormGroup(addressData: any): FormGroup {
    return this.fb.group({
      address: [addressData.address || '', Validators.required],
      city: [addressData.city || '', Validators.required],
      zipcode: [addressData.zipcode || '', Validators.pattern(/^[0-9]*$/)],
      country: [addressData.country || '', Validators.required],
    });
  }

  //push create address ke form group
  addAddress(): void {
    this.addresses.push(this.createAddressFormGroup({}));
  }

  //hapus address dari form array
  removeAddress(index: number): void {
    this.addresses.removeAt(index);
  }
  //balik ke
  goToPlayer(): void {
    this.router.navigate(['']);
  }

  onSubmit(): void {
    console.log(this.playerForm.value);

    if (this.playerForm.valid) {
      const formData = { ...this.playerForm.value };
      const flag = formData.flag.value;
      if (flag == 'indo') {
        formData.flag.value = 'assets/img/indo.png';
      }
      if (this.isEdit) {
        formData.id = +this.route.snapshot.params['id'];
        this.playerDataService.editPlayer(formData);
      } else {
        this.playerDataService.addPlayer(formData);
      }
      this.router.navigate(['']);
    } else {
      Object.keys(this.playerForm.controls).forEach((controlName) => {
        this.playerForm.get(controlName)?.markAsTouched();
      });
    }
  }
}
