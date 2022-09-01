export interface UserInterface {
  email: string;
  id: string;
  isAdmin: boolean;
}
export interface DBUserInterface {
  _id: string;
  email: string;
  password: string;
  isAdmin: boolean;
}
