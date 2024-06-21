import { FormBuilder, Validators } from '@angular/forms';

export const userFormInit = (fb: FormBuilder) => {
  return fb.group({
    id: [null],
    name: ['', [Validators.required]],
    username: ['', [Validators.required]],
    email: ['', [Validators.required]],
    address: fb.group({
      street: ['', Validators.required],
      suite: ['', Validators.required],
      city: ['', Validators.required],
      zipcode: ['', Validators.required],
      geo: fb.group({
        lat: ['', Validators.required],
        lng: ['', Validators.required],
      }),
    }),
    phone: ['', Validators.required],
    website: ['', Validators.required],
    company: fb.group({
      name: ['', Validators.required],
      catchPhrase: ['', Validators.required],
      bs: ['', Validators.required],
    }),
  });
};
