import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-infograpg-form',
  templateUrl: './infograpg-form.component.html',
  styleUrls: ['./infograpg-form.component.css']
})
export class InfograpgFormComponent implements OnInit {

  
  constructor(
    private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private api:ApiService
  ) { }
  no:any;
  formTitle:string='';
  Requestform:any;
  loading = false;
  submitted = false;
  Req_id:any;
  get_title:any;
  get_infograph_id_related_data(id:number){
    this.api.infograph_data(id).subscribe((res)=>{
        this.Req_id=res;
    });
  }
  
  ngOnInit() {
    
    this.get_title=$('#title').text();
    this.no=this.route.snapshot.params.id;
    this.get_infograph_id_related_data(this.route.snapshot.params.reqid);
    if(this.no==1){
      this.formTitle="Request Sample";
    }else  if(this.no==2){
      this.formTitle="Request Detailed TOC";
    }else  if(this.no==3){
      this.formTitle="Customization Request ";
    }
    this.Requestform = this.formBuilder.group({
      title: [''],
      name: ['', Validators.required],
      company: ['', Validators.required],
      country: ['', Validators.required],
      email: ['', Validators.required],
      contact: ['', Validators.required],
      profession: ['', Validators.required],
      message: ['', Validators.required]
  });
  }
  get f() { return this.Requestform.controls; }

  onSubmit() {
    console.log(this.Requestform);
    this.submitted = true;
    // stop here if form is invalid
    if (this.Requestform.invalid) {
        return;
    }
    

    if(this.no==1){
      this.api.RequstData(this.Requestform.value).subscribe(res=>{
        alert("data requsr");
      });
    }else  if(this.no==2){
      this.api.TocRequstData(this.Requestform.value).subscribe(res=>{
        alert("data requsr");
      });
    }else  if(this.no==3){
      this.api.CoustRequstData(this.Requestform.value).subscribe(res=>{
        alert("data requsr");
      });
    }
    this.router.navigate(['/thanks']);

  }


}
