import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class GlobalService {

  constructor(public global: HttpClient) {
    // this.headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    // this.headers.append('Access-Control-Allow-Origin', '*')
    // this.headers.append("Access-Control-Allow-Headers","*");
    // this.headers.append('Access-Control-Allow-Methods', 'GET');

  }

  //----------------Login----------------//

  login(data: any) {
    return  this.global.post(`${environment.baseUrl}login`, data);
  }

  isLoggedIn() {
    return !!localStorage.getItem('token');
  }
  gettoken() {
    localStorage.getItem('token');
  }

  //------------------------------visitor--------------------------------//
  visitorinsert(data: any) {
    return this.global.post(
      `${environment.baseUrl}visitor/visitordatainsert`,
      data
    );
  }
  visitorget() {
    return this.global.get(`${environment.baseUrl}visitor/visitordataget`);
  }
  visitorcheckin(data:any){
  return this.global.post(`${environment.baseUrl}visitor/check_in`,data)

  }
  visitorcheckout(data:any){
  return this.global.put(`${environment.baseUrl}visitor/check_out`,data)
  }

  //-------------------------- guard,subadmin----------------------------//

  createrole(data: any) {
    return this.global.post(`${environment.baseUrl}create-users`, data);
  }
  getroledata() {
    return this.global.get(`${environment.baseUrl}gettinguser`);
  }
  getsubadminlist(){
   return this.global.get(`${environment.baseUrl}getUsers?role=subadmin`)
  }
  getguardlist(){
   return this.global.get(`${environment.baseUrl}getUsers?role=guard`)
  }



  //----------------------------checkin otp --------------------------------//






  //----------------------------referal api  start--------------------------------//
  getreferal(){
    return this.global.get(`${environment.baseUrl}refer/referget`)
   }
  //---------------------------- upload api---------------------------------//
  fileData(obj:File){
    let uploadData:FormData=  new FormData();
    uploadData.append('avatar',obj);
    return this.global.post(`${environment.baseUrl}file/photos/upload`, uploadData, {reportProgress:true});
  }

  getImage(fileName:any){
    return this.global.get(`${environment.baseUrl}file/fileinfo/${fileName}`,{ responseType: 'text' })
  }
}
