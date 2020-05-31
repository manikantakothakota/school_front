import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, 
    private toastr: ToastrService, 
    private router: Router,
     private us: UsersService) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      fatherName: ['', Validators.required],
      motherName: ['', Validators.required],
      userName: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      roles: ['', Validators.required],
      permissions: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      joiningDate: ['', Validators.required],
      endingDate: ['', Validators.required],
      schoolId: ['', Validators.required],
      categoryId: ['', Validators.required],
      address: new FormGroup({
        houseNum: new FormControl('', Validators.required),
        street: new FormControl('', Validators.required),
        village: new FormControl('', Validators.required),
        landmark: new FormControl('', Validators.required),
        mandal: new FormControl('', Validators.required),
        district: new FormControl('', Validators.required),
        state: new FormControl('', Validators.required),
        pincode: new FormControl('', Validators.required)
      })
    });

  }

  onSubmit() {
    this.us.createuser(this.addForm.value)
      .subscribe(
        (result: any) => {
          this.toastr.success('user saved sucessfully')
          this.router.navigate(['listuser']);
        }

      );
  }
}
