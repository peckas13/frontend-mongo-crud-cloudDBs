import { Component } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { AngularDelegate } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  rentalData:any;
  constructor(public service:ServiceService) {}
  ngOnInit(){
    this.obtenerRentas()
  }

  obtenerRentas(){
    this.service.getRentals().then((resp: any)=>{
      this.rentalData = resp.resp;
      console.log(resp.resp);
    }).catch((err)=>{
      console.log(err);
    })
  }
}
