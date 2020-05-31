import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SchoolsService } from '../schools.service';

@Component({
  selector: 'app-listschool',
  templateUrl: './listschool.component.html',
  styleUrls: ['./listschool.component.css']
})
export class ListschoolComponent implements OnInit {
  schools: any = [];
  schoolId: any;
  name: any;
  anniversary: any;
  village: any;
  schoolobj = {};

  constructor(private router: Router, private toastr: ToastrService, private ss: SchoolsService) { }

  ngOnInit() {
    this.getschools();
  }

  getschools() {
    this.ss.getSchoolsList().subscribe(
      (result: any) => {
        this.schools = result;
      }, (error: any) => {

        alert('error');
      }
    );
  }
  deleteSchool(id: number) {
    this.ss.deleteSchool(id).subscribe(
      (result: any) => {
        console.log(result);
        this.toastr.success('deleted sucessfully' + id);
        this.getschools();
      }, (error: any) => {
        console.log(error);
        this.toastr.error('deleted sucessfully' + id);
      }
    );
  };

  editSchool(id: any) {
    this.router.navigate(['editschool', id]);
  }
  addSchool(): void {
    this.router.navigate(['addschool']);
  }

}
