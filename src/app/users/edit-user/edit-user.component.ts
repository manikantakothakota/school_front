import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UsersService } from '../users.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  id: any;
  sub: any;
  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private us: UsersService) { }

  ngOnInit() {
    this.getuserid();

  }
  getuserid() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      // alert(this.id);

      this.editForm = this.formBuilder.group({
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
        createdBy: ['', Validators.required],
        
        createdDate: ['', Validators.required],
       
        address: new FormGroup({
          addressId: new FormControl('', Validators.required),
          houseNum: new FormControl('', Validators.required),
          street: new FormControl('', Validators.required),
          village: new FormControl('', Validators.required),
          landmark: new FormControl('', Validators.required),
          mandal: new FormControl('', Validators.required),
          district: new FormControl('', Validators.required),
          state: new FormControl('', Validators.required),
          pincode: new FormControl('', Validators.required),
          createdBy: new FormControl('', Validators.required),
          createdDate: new FormControl('', Validators.required)
        })
      });
      this.us.getuser(this.id).subscribe(
        (userdata: any) => {
          this.editForm.patchValue(userdata);
        }
      );
      // API call to fetch the data based on ID
      // in result block
      // this.group.patchValue(this.data or data);
    });
  }
  onSubmit() {
    this.us.updateuser(this.id, this.editForm.value)
      .subscribe(
        (result: any) => {
          this.toastr.success('user updated sucessfully')
          this.router.navigate(['listuser']);
        }

      );
  }

}
