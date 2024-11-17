import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '5c88fea6-bb7a-4713-8011-791b80134fb7',
};

export const sampleWithPartialData: IAuthority = {
  name: '87e14c3c-4957-407c-a257-2869d903c6ef',
};

export const sampleWithFullData: IAuthority = {
  name: '7bf5ed7b-af52-465e-a5c9-6c6dc83c1362',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
