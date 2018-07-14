import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { emp } from './app-emp';
import {} from './custom-dir/ayattributedir';
import { customHoverDir } from './custom-dir/myattributedir';
import { PipeComponent } from './pipe/pipe.component';
import {Customepipe} from './pipe/myCustompipe';
import {service1} from './custom-dir/service1'
import { httpreq } from './custom-dir/httpreq';
import { HttpModule } from '@angular/http';
import { homepage } from '../loginapp/home.comp';
import { loginpage } from '../loginapp/login.comp';
import { regpage } from '../loginapp/registration.comp';
import { successpage } from '../loginapp/success.comp';
import { routes } from '../loginapp/app.loginroute';
import { landingpage } from '../loginapp/landing.comp';
import {FormsModule} from '@angular/forms';
import {fromsdemo} from './custom-dir/templetfrom';
import {reactivefromsdemo} from './custom-dir/rectiveform';
import { ReactiveFormsModule } from '@angular/forms';
import { child2 } from './custom-dir/child2.comp';
import { child1 } from './custom-dir/child1.comp';
import { parant } from './custom-dir/parant.comp';
import { test } from './testing/add.comp';
import { javapage } from './view/java.comp';
import { androidpage } from './view/android.comp';
import { webhome } from './view/homepage.comp';
import { viewroutes } from './view/viewroutes.config';
import { viewlanding } from './view/viewlanding';
import { springpage } from './view/spring.comp';
import { corejavapage } from './view/corejava.comp';
import { loading } from './loding.comp';
//import { MycustModule } from './myLazyloading/custModule';
import { lazyRouting } from './myLazyloading/lazyloading.route';
import { deptcomp } from './department.comp';
@NgModule({
  declarations: [
    AppComponent,
    /* emp,
    customHoverDir,
    PipeComponent,
    Customepipe,
    service1,
    httpreq,
    landingpage,
    homepage,
    loginpage,
    regpage,
    successpage,
    fromsdemo,
    reactivefromsdemo,
    parant,
    child1,
    child2,
    test,
    webhome,
    javapage,
    androidpage,
    viewlanding,
    corejavapage,
    springpage,
    */loading,
    deptcomp
  ],
  imports: [
    //BrowserModule,
    //HttpModule,
    //RouterModule.forRoot(routes),
    //FormsModule,
    //ReactiveFormsModule,
    //RouterModule.forRoot(viewroutes),
    RouterModule,
    //MycustModule,
    lazyRouting
  ],
  providers: [],
  bootstrap: [loading]
})
export class AppModule { }
