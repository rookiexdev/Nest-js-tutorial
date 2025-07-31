import { Injectable } from '@nestjs/common';

export interface IUser {
  id: number,
  username: string,
  password: string,
}

@Injectable()
export class UserService {
  private users: IUser[] = [];
  private userCnt = 1;

  getAllUsers () {
    return this.users;
  }

  getUser(id: number) {
    const user = this.users.find( u => u.id === Number(id));
    if(!user){
      return {
        message: "User not found",
        success: false
      }
    }
    return {
      success: true,
      user,
    };
  }

  createUser({ username, password}: Omit<IUser, "id">) {
    const newUser = { id: this.userCnt++, username, password};
    this.users.push(newUser);
    return {
      message: "User created successfully",
      newUser,
      success: true
    }
  }

  updateUser(id: number, updatedUser: Omit<IUser, 'id'>) {
    const prevUser = this.users.find(u => u.id === Number(id));
    
    if(!prevUser){
      return {
        message: "No user found!",
        success: false,
      }
    }
    const filterdUser = this.users.filter(u => u.id !== Number(id));
    this.users = [...filterdUser, {...prevUser, ...updatedUser}];
    return {
      message: "User update successful!",
      success: true,
    }
  }

  deleteUser (id: number){
    const userExists = this.users.some((u) => u.id === Number(id));

    if (!userExists) {
      return {
        message: 'User not found',
        id,
      };
    }

    this.users = this.users.filter((u) => u.id !== Number(id));
    return {
      message: 'User deleted successfully',
      id,
    };
  }
}
