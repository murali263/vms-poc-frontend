import { NgModule,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../app/material/material.module';
import {myrouting} from './app-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import {GlobalService}from 'src/app/server/global.service';
import {GenericService} from 'src/app/server/generic.service';
import {HttpClientModule, HTTP_INTERCEPTORS,HttpHeaders, HttpClient } from '@angular/common/http';
import {AuthGuard} from 'src/app/guards/auth.guard'
import { TokenintercepterService } from './server/tokenintercepter.service';
import { HeaderComponent } from './components/header/header.component';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import {FlexLayoutModule} from '@angular/flex-layout';
import { LeftSidenavComponent } from './components/left-sidenav/left-sidenav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { UsernameValidatorsDirective } from './directives/username-validators.directive';
import { AadharValidatorsDirective } from './directives/aadhar-validators.directive';
import { MatTimepickerModule } from 'mat-timepicker';
import { WebCamComponent } from './components/web-cam/web-cam.component';
import { VisitoridcardComponent } from './components/visitoridcard/visitoridcard.component';
import {NgxPrintModule} from 'ngx-print';
import { NgxUiLoaderConfig, NgxUiLoaderModule, NgxUiLoaderHttpModule, SPINNER, POSITION, PB_DIRECTION, NgxUiLoaderRouterModule } from 'ngx-ui-loader';




const ngxUiLoaderConfig:NgxUiLoaderConfig =
{
  "bgsColor": "red",
  "bgsOpacity": 0.5,
  "bgsPosition": "bottom-right",
  "bgsSize": 60,
  "bgsType": "ball-spin-clockwise",
  "blur": 5,
  "delay": 0,
  "fastFadeOut": true,
  "fgsColor": "red",
  "fgsPosition": "center-center",
  "fgsSize": 60,
  "fgsType": "ball-spin-clockwise-fade-rotating",
  "gap": 24,
  "logoPosition": "center-center",
  "logoSize": 120,
  "logoUrl": "",
  "masterLoaderId": "master",
  "overlayBorderRadius": "0",
  "overlayColor": "rgba(40, 40, 40, 0.8)",
  "pbColor": "red",
  "pbDirection": "ltr",
  "pbThickness": 3,
  "hasProgressBar": true,
  "text": "",
  "textColor": "#FFFFFF",
  "textPosition": "center-center",
  "maxTime": -1,
  "minTime": 300
}




@NgModule({
  declarations: [
    AppComponent,
    myrouting,
    DashboardComponent,
    LoginComponent,
    HeaderComponent,
    LeftSidenavComponent,
    UsernameValidatorsDirective,
    AadharValidatorsDirective,
    WebCamComponent,
    VisitoridcardComponent,


  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxMaterialTimepickerModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTimepickerModule,
    NgxPrintModule,
    NgxUiLoaderRouterModule,
    NgxUiLoaderHttpModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),




  ],
  providers: [
    GlobalService,
    GenericService,
    AuthGuard,

    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenintercepterService,
      multi:true
    }
  ],

  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
