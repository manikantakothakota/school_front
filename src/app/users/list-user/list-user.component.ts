import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  users: any = [];
  firstName: any;
  lastName: any;
  email: any;
  phone: any;
  userName: any;
  userId: any;
  userobj = {};

  constructor(private router: Router,
     private toastr: ToastrService,
      private us: UsersService,
      private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.getusers();
  }

  getusers() {
    this.spinner.show();
    this.us.getusersList().subscribe(
      
      (result: any) => {
        this.spinner.hide();
        this.users = result;
      }, (error: any) => {
        this.spinner.hide();
        alert('error');
      }
    );
  }
  deleteUser(id: number) {
    this.us.deleteuser(id).subscribe(
      (result: any) => {
        console.log(result);
        this.toastr.success('deleted sucessfully' + id);
        this.getusers();
      }, (error: any) => {
        console.log(error);
        this.toastr.error('deleted sucessfully' + id);
      }
    );
  };

  editUser(id: any) {
    this.router.navigate(['edituser', id]);
  }
  addUser(): void {
    this.router.navigate(['adduser']);
  }
}
