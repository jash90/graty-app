import { User as UserFirebase } from "firebase/auth";
export interface User extends UserFirebase {
  firstname: string;
  lastname: string;
  age: number;
  isAdmin: boolean;
  city: string;
}
