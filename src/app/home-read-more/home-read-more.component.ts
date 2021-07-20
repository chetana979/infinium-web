import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home-read-more',
  templateUrl: './home-read-more.component.html',
  styleUrls: ['./home-read-more.component.css']
})
export class HomeReadMoreComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router,
    private api:ApiService) {
      this.api.setData(this.idarr);
     }

  id:any;
  all_data:any;

  toc_list:any;
  get_val(allId:number){
  this.toc_list.push(allId);
  this.total();
  }
  my_price:any;
 total(){
   let arr;
   for(let a of this.toc_list){
    arr +=this.toc_list[a].Chapter_prise;
   }
   this.my_price= arr;
   console.log(arr);
 }
  get_chapter_data:any;
  get_chapter(id:number){
    this.api.chapter(id).subscribe((res)=>{
     this.get_chapter_data=res;
    });
  }
 new_chapter:any;


  idarr:any=[];
 addId(idno:any){
   if(!this.idarr.includes(idno)){
    this.idarr.push(idno);
    //console.log(this.idarr);
   }else{
    var index = this.idarr.indexOf(idno);
    if (index > -1) {
      this.idarr.splice(index, 1);
     // console.log(this.idarr);
    }
   }
 }

 arr:any=[1,2,3,4,5,6,7,8,9];
 

  ngOnInit() {
     this.idarr;
   
     
    this.new_chapter;
    this.get_chapter(26455);
    //this.get_chapter(this.route.snapshot.params.id);
    this.get_indeustry_id_related_data(this.route.snapshot.params.id);
    this.all_data;
    this.toc_list;
    
  }
  send_id1(id:any){ this.router.navigate(['/form_inq/1',id]); }
  send_id2(id:any){ this.router.navigate(['/form_inq/2',id]); }
  send_id3(id:any){ this.router.navigate(['/form_inq/3',id]); }
  send_id4(id:any){ this.router.navigate(['/checkout/4',id]); }
  send_id5(id:any){ this.router.navigate(['/checkout/5',id]); }
  send_id6(id:any){ this.router.navigate(['/checkout/6',id]); }
  
get_indeustry_id_related_data(id:number){
  this.api.Indestry_data(id).subscribe((res)=>{
      this.all_data=res;
  });
}
 
/* code for checked */

}
