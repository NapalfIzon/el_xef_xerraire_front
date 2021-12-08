import { INavigation } from "../types/propTypes";

export interface IShowTitle {
  title: string;
}

export interface IAlertMessage {
  title: string;
  body: string;
  close: string;
  action: string;
}

export interface IAlertComponent {
  navigation: INavigation;
  recipeId?: string;
  message: IAlertMessage;
  openCancelMenu: any;
}
s;
