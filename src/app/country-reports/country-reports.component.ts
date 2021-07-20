import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-country-reports',
  templateUrl: './country-reports.component.html',
  styleUrls: ['./country-reports.component.css']
})
export class CountryReportsComponent implements OnInit {

  constructor(
    private api:ApiService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
    ) {
      this.idd;
}
imgid:any;
arr:any;
idd:any;
send_id(id:any,sr:any){
this.router.navigate(['/RD',id,this.route.snapshot.params.no,sr]);

}

send_id6(cid:any){ this.router.navigate(['/checkout/6',cid]); }
send_id1(id:any){ this.router.navigate(['/form_inq/1',id]); }
aaa:any=[1,2,3];
title2:any;
ck_now:any;
img:string="";
iid:number=0;
  ngOnInit(){
    this.imgid=this.route.snapshot.params.id;
    this.arr2;
    this.idd=this.route.snapshot.params.id;
    this.myfun(this.route.snapshot.params.id);
    this.arr;
    this.c_id({id:this.route.snapshot.params.id});
    this.Category_name;
    this.ck_now=this.route.snapshot.params.id;
   this.img;

  
   
  }

  p:any;
Category_name:any;
  c_id(id:any){
  this.api.C_id(id).subscribe((res)=>{
   this.Category_name=res;
  });
  }
  arr2:any;
  myfun2(arry:string){
    this.api.C_name(arry).subscribe((res)=>{
      this.arr2=res;
    });
  }

  myfun(arry:number){
    this.api.mytext(arry).subscribe((res)=>{
      this.arr=res;
    });
  }



  
}
