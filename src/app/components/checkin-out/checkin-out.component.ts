import { Component, OnInit, ViewChild } from '@angular/core';
import { GlobalService } from 'src/app/server/global.service';
import { MatDialog } from '@angular/material/dialog';
import { LeftSidenavComponent } from '../left-sidenav/left-sidenav.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { VisitoridcardComponent } from '../visitoridcard/visitoridcard.component';
@Component({
  selector: 'app-checkin-out',
  templateUrl: './checkin-out.component.html',
  styleUrls: ['./checkin-out.component.css'],
})
export class CheckinOutComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  data: any;
  searchedText: String = '';
  companyArr: MatTableDataSource<any>;
  displayedColumns: string[] = [
    'Visitor Name',
    'Phone Number',
    'Vehicle Number',
    'Visit Date',
    'Visit Time',
    'Visit To',
    'Visit From',
    'Members',
    'Visit Type',
    'Check In/Out',
  ];
  value:any = [];
  constructor(
    private global: GlobalService,
    private dialog: MatDialog,
    public snackbar: MatSnackBar,
    public router : Router
  ) {}

  ngOnInit() {
    this.getvisitor();
  }
  //----------------------------get visitor---------------------------------//
  getvisitor() {
    this.global.visitorget().subscribe(
      (res: any) => {
        let test = res.filter((company: any) => {
          // console.log(res)
          if (company.checkout && company.checkout == 'false') {
            return company;
          } else {
            return !Object.keys(company).includes('checkout');
          }

        });
        this.companyArr = test;

        this.companyArr = new MatTableDataSource(test);
        this.value=test

        this.companyArr.paginator = this.paginator;
        // this.companyArr = data?.res;
        // this.companyArr = new MatTableDataSource(data?.res);
        // this.tableData=data?.res;
        // this.companyArr.paginator = this.paginator;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  //-------------------------------------check in -------------------------------//

  checkinupdate(data: any) {
    const dialogRef = this.dialog.open(LeftSidenavComponent, {
      width: '600px',
      data: data,
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res == 'updated') {
        this.dialog.open(VisitoridcardComponent, {
          width: '600px',
          data: data,});

        this.getvisitor();
      }
    });
  }
  //---------------------------------------check out -----------------------------------//
  checkoutupdate(obj: any) {
    this.global.visitorcheckout(obj).subscribe(
      (data: any) => {
        if ((data['res'] = 'update')) {

          this.getvisitor();
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }
     //------------------------------------------search by name -------------------------------------//
     applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.companyArr.filter = filterValue.trim().toLowerCase();
  }
  //-------------------------------------------clear ----------------------------------------//
  clear() {
    this.searchedText = ""
  }
}
