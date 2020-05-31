import { Component, OnInit } from '@angular/core';
import { SchoolsService } from '../schools.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editschool',
  templateUrl: './editschool.component.html',
  styleUrls: ['./editschool.component.css']
})
export class EditschoolComponent implements OnInit {

  id: any;
  sub: any;
  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private ss: SchoolsService) { }

  ngOnInit() {
    this.getSchoolid();

  }
  getSchoolid() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      // alert(this.id);

      this.editForm = this.formBuilder.group({
        name: ['', Validators.required],
        typeId: ['', Validators.required],
        anniversary: ['', Validators.required],
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
      this.ss.getSchool(this.id).subscribe(
        (schooldata: any) => {
          this.editForm.patchValue(schooldata);
        }
      );
    });
  }
  onSubmit() {
    this.ss.updateSchool(this.id, this.editForm.value)
      .subscribe(
        (result: any) => {
          this.toastr.success('school updated sucessfully')
          this.router.navigate(['listschool']);
        }

      );
  }

}
