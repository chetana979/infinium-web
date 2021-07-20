import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http:HttpClient ) { }
 url:any="http://localhost:8000";

  //url:any="http://132.148.242.126:8000";
 /* 
  home_select(){ return this._http.get(this.url+"/get_data");}
  fetch(){ return this._http.get(this.url+"/db");}
  Survey_Reports(){ return this._http.get(this.url+"/Survey_Reports");}
  portfolio_reports(){ return this._http.get(this.url+"/portfolio_reports");}
  infographics(){ return this._http.get(this.url+"/infographics");}

  Press_Releases(){ return this._http.get(this.url+"/Press_Releases");  }
  Press_Releases_one(arry:any){ return this._http.post(this.url+"/Press_Releases_one",arry);  }
  postid(id:any){ return this._http.post(this.url+"/industry",id);  }
  mytext(arry:any){ return this._http.post(this.url+"/mydata",arry);  }
  Indestry_data(arry:any){ return this._http.post(this.url+"/Indestry_data",arry);  }

  survey_data(arry:any){  return this._http.post(this.url+"/survey_data",arry);  }
  portfolio_data(arry:any){  return this._http.post(this.url+"/portfolio_data",arry);  }
  infograph_data(arry:any){  return this._http.post(this.url+"/infograph_data",arry);  }
  RequstData(req_data:any){  return this._http.post(this.url+'/RequstData',req_data);  }
  TocRequstData(req_data:any){  return this._http.post(this.url+'/TocRequstData',req_data);  }

  CoustRequstData(req_data:any){  return this._http.post(this.url+'/CoustRequstData',req_data);  }
  Contact_us(req_data:any){  return this._http.post(this.url+'/Contact_us',req_data);  }
  Booking(req_data:any){  return this._http.post(this.url+'/Booking',req_data);  }
  C_id(req_data:any){  return this._http.post(this.url+'/Category_id_data',req_data);  }

*/ 
serviceData: any ;
getData():string{
    return this.serviceData;
}
setData(value:string){
  this.serviceData = value;
}
  
  home_select(){ return this._http.get(this.url+"/get_data");}
  fetch(){ return this._http.get(this.url+"/igr_report_details");}
  Survey_Reports(){ return this._http.get(this.url+"/igr_tb_survey_reports");}
  portfolio_reports(){ return this._http.get(this.url+"/igr_tb_portfolio_reports");}
  infographics(){ return this._http.get(this.url+"/igr_infographics_data");}

  Press_Releases(){ return this._http.get(this.url+"/igr_blog_data");  }
  Press_Releases_one(arry:any){ return this._http.post(this.url+"/Press_Releases_one",arry);  }
  postid(id:any){ return this._http.post(this.url+"/industry",id);  }
  mytext(arry:number){ return this._http.get(this.url+"/igr_report_details/"+arry);  }
  Indestry_data(arry:number){ return this._http.get(this.url+"/igr_report_details_one/"+arry);  }

  survey_data(arry:number){  return this._http.get(this.url+"/igr_tb_survey_reports/"+arry);  }
  portfolio_data(arry:number){  return this._http.get(this.url+"/igr_tb_portfolio_reports/"+arry);  }
  infograph_data(arry:number){  return this._http.get(this.url+"/igr_infographics_data/"+arry);  }
  RequstData(req_data:any){  return this._http.post(this.url+'/igr_sample_request',req_data);  }
  TocRequstData(req_data:any){  return this._http.post(this.url+'/igr_toc_request',req_data);  }

  CoustRequstData(req_data:any){  return this._http.post(this.url+'/igr_report_customization_query',req_data);  }
  Contact_us(req_data:any){  return this._http.post(this.url+'/igr_contact_details',req_data);  }
  Booking(req_data:any){  return this._http.post(this.url+'/igr_report_booking',req_data);  }
  C_id(req_data:number){  return this._http.get(this.url+'/igr_category_master/'+req_data);  }
  C_name(req_data:string){  return this._http.get(this.url+'/igr_category_master_name/'+req_data);  }
  chapter(arry:number){ return this._http.get(this.url+"/igr_toc_chapters_sub_point/"+arry);  }
 
  
}
