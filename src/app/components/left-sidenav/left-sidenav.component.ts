import { Component, Inject, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GlobalService } from 'src/app/server/global.service';
@Component({
  selector: 'app-left-sidenav',
  templateUrl: './left-sidenav.component.html',
  styleUrls: ['./left-sidenav.component.css']
})
export class LeftSidenavComponent implements OnInit {

  constructor(public global:GlobalService, @Inject(MAT_DIALOG_DATA) public data:any,
  public snackbar:MatSnackBar,public fb:FormBuilder,public dialogRef:MatDialogRef<LeftSidenavComponent>,) { }

  ngOnInit(): void {
  }
  otpform = this.fb.group({
    verificationCode: ['', Validators.required],
  });


  updateintime() {
     let inputData = {mobile:  this.data.mobile, verificationCode: this.otpform.value.verificationCode}
      if (this.data.verificationCode == this.otpform.value.verificationCode) {
        this.global.visitorcheckin(inputData).subscribe((data:any) => {
        });
          this.dialogRef.close('updated');
          this.snackbar.open('Checkin Successfull', 'ok', { duration:2000 });
        }
        else{
          this.snackbar.open('Please enter valid 4-digit otp number', 'ok', { duration:2000 });
        }
      }
   
  
}
