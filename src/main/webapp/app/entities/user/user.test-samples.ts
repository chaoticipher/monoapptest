import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 10599,
  login: '1irOm',
};

export const sampleWithPartialData: IUser = {
  id: 31578,
  login: '3aofPM',
};

export const sampleWithFullData: IUser = {
  id: 6054,
  login: 'Z',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
