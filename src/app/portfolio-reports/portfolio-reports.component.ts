import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-portfolio-reports',
  templateUrl: './portfolio-reports.component.html',
  styleUrls: ['./portfolio-reports.component.css']
})
export class PortfolioReportsComponent implements OnInit {

  constructor(private api:ApiService,private router:Router) { }
aaa:any=[1,2,3,4];


  arr:any;
  portfolio(){
    this.api.portfolio_reports().subscribe((res)=>{
      this.arr=res;
    });
  }
  ngOnInit(){
    this.portfolio();
    this.arr;
  }
  send_id1(id:any){ this.router.navigate(['/form_inq_3/1',id]); }
  p:any;
  send_id(id:any){
    this.router.navigate(['/third_rd',id]);
    
    }

}
