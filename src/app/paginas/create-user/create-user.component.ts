import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UsersService } from '../../servicios/users.service';
import { CreateUser } from '../../interfaces/create-user';
import { CreatedUserResponse } from '../../interfaces/created-user-response';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss'
})
export class CreateUserComponent {
  form: FormGroup;
  createdUser: CreatedUserResponse | null = null;

  constructor(private usersService: UsersService, private router: Router) {
    this.form = new FormGroup({
      name: new FormControl(''),
      job: new FormControl('')
    });
  }

  onSubmit() {
    const user: CreateUser = {
      name: this.form.value.name ?? '',
      job: this.form.value.job ?? ''
    };
    this.usersService.createUser(user).subscribe({
      next: (response: CreatedUserResponse) => {
        console.log('User created successfully:', response);
        this.createdUser = response;
      },
      error: (error) => {
        console.error('Error creating user:', error);
      }
    });
  }
  editUser() {
    const user: CreateUser = {
      name: this.form.value.name ?? '',
      job: this.form.value.job ?? ''
    };
    this.usersService.updateUser(user, this.createdUser!).subscribe({
      next: (response: CreatedUserResponse) => {
        console.log('User updated successfully:', response);
        this.createdUser = response;
      },
      error: (error) => {
        console.error('Error updating user:', error);
      }
    });
  }
  editUserPartial() {
    let userData: Partial<CreateUser> = {};
    if (this.form.value.name) {
      userData.name = this.form.value.name;
    }else if (this.form.value.job) {
      userData.job = this.form.value.job;
    }
    this.usersService.updateUserPartial(userData, this.createdUser!).subscribe({
      next: (response: CreatedUserResponse) => {
        console.log('User updated successfully:', response);
        this.createdUser = response;
      },
      error: (error) => {
        console.error('Error updating user:', error);
      }
    });
  }
  deleteUser(){
    if(this.createdUser){
      this.usersService.deleteUser(this.createdUser.id).subscribe({
        next: () => {
          console.log('User deleted successfully');
          alert('Usuario eliminado correctamente');
          this.form.reset();
        },
        error: (error) => {
          console.error('Error deleting user:', error);
        }
      });
    }
  }
}
