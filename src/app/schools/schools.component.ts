import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SchoolsService } from './schools.service';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.css']
})
export class SchoolsComponent implements OnInit {

  constructor(private toastr:ToastrService,private ss:SchoolsService) { }

  ngOnInit() {
  }
  

}
