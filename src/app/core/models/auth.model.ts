export interface IUser {
  id: number;
  name: string;
  email: string;
}

export interface ILoginResonse {
  message: string;
  token: string;
  user: IUser;
}

export interface ILogin {
  email: string;
  password: string;
}
