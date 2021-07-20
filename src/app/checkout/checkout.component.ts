import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ICreateOrderRequest, IPayPalConfig } from 'ngx-paypal';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  all_data:any;
  public payPalConfig ? : IPayPalConfig;

  
  constructor(
    private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private api:ApiService
  ) {
    this.selected_chapter_data=this.api.getData();
   }
  Requestform:any;
  loading = false;
  submitted = false;
 


  selected_chapter_data:any;
  
  
  no:any;
  ngOnInit() {
    this.initConfig();
    this.no=this.route.snapshot.params.fid;
    this.get_indeustry_id_related_data(this.route.snapshot.params.id);
    this.all_data;
    this.Requestform = this.formBuilder.group({
      
      report_id: [''],
      report_name: [''],
      report_price: [''],
      name: ['', Validators.required],
      country: ['', Validators.required],
      email: ['', Validators.required],
      contact: ['', Validators.required],
      country_code: ['', Validators.required],
      company: ['', Validators.required],
      report_user:['', Validators.required],
      profession: ['', Validators.required],
      zip_code: ['', Validators.required],
      state: ['', Validators.required],
      address: ['', Validators.required]
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
    
      
    if(this.no==4){
      this.api.Booking(this.Requestform.value).subscribe(res=>{
        alert("data requsr");
        this.router.navigate(['/thanks']);
      });
    }
    
    if(this.no==5){
      this.api.Booking(this.Requestform.value).subscribe(res=>{
        alert("data requsr");
        this.router.navigate(['/thanks']);
      });
    }

    if(this.no==6){
      this.api.Booking(this.Requestform.value).subscribe(res=>{
        alert("data requsr");
        this.router.navigate(['/thanks']);
      });
    }

  }

  get_indeustry_id_related_data(id:number){
    this.api.Indestry_data(id).subscribe((res)=>{
        this.all_data=res;
    });
  }







  private initConfig(): void {
    this.payPalConfig = {
        currency: 'EUR',
        clientId: 'sb',
        createOrderOnClient: (data) => < ICreateOrderRequest > {
            intent: 'CAPTURE',
            purchase_units: [{
                amount: {
                    currency_code: 'EUR',
                    value: '9.99',
                    breakdown: {
                        item_total: {
                            currency_code: 'EUR',
                            value: '9.99'
                        }
                    }
                },
                items: [{
                    name: 'IGR',
                    quantity: '1',
                    category: 'DIGITAL_GOODS',
                    unit_amount: {
                        currency_code: 'EUR',
                        value: '9.99',
                    },
                }]
            }]
        },
        advanced: {
            commit: 'true'
        },
        style: {
            label: 'paypal',
            layout: 'vertical',
            size :'small',
            color :'blue',
            shape : 'rect'
        },
        onApprove: (data, actions) => {
            console.log('onApprove - transaction was approved, but not authorized', data, actions);
            actions.order.get().then((details: any) => {
                console.log('onApprove - you can get full order details inside onApprove: ', details);
            });

        },
        onClientAuthorization: (data) => {
            console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
          
        },
        onCancel: (data, actions) => {
            console.log('OnCancel', data, actions);
           

        },
        onError: err => {
            console.log('OnError', err);
           
        },
        onClick: (data, actions) => {
            console.log('onClick', data, actions);
           
        },
    };
}

}
