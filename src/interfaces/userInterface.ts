export interface IUserSchema {
  username: string;
  email: string;
  password: string | unknown;
  avatar: string;
  avatarBackup?: string;
  registrationDate?: Date;
  myRecipes?: Array<string> | unknown;
  myFavorites?: Array<string> | unknown;
  id?: string;
}

export interface ILoginSchema {
  email: string;
  password: string;
}
