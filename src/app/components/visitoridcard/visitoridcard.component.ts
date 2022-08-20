import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/server/global.service';
import{environment} from 'src/environments/environment'

@Component({
  selector: 'app-visitoridcard',
  templateUrl: './visitoridcard.component.html',
  styleUrls: ['./visitoridcard.component.css']
})
export class VisitoridcardComponent implements OnInit {
  imageBinary: any;
  constructor(public router: Router, @Inject(MAT_DIALOG_DATA) public data: any, public global: GlobalService) {
    this.imageBinary = `http://localhost:3000/file/fileinfo/${this.data.files}`
  }

  ngOnInit(): void {


    console.log("data------------------------>", this.imageBinary);


  }

  clear() {
    this.router.navigate(['/header/checkin-out'])
  }
  



}

