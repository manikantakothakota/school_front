import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/users/users.service';
import { SchoolsService } from '../schools.service';

@Component({
  selector: 'app-addschool',
  templateUrl: './addschool.component.html',
  styleUrls: ['./addschool.component.css']
})
export class AddschoolComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private toastr: ToastrService, private router: Router,
    private ss: SchoolsService) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      name: ['', Validators.required],
      typeId: ['', Validators.required],
      anniversary: ['', Validators.required],
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
    this.ss.createSchool(this.addForm.value)
      .subscribe(
        (result: any) => {
          this.toastr.success('School saved sucessfully')
          this.router.navigate(['listschool']);
        }

      );
  }

}
