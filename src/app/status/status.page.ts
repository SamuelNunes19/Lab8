import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {  IonRadio,IonRadioGroup,IonItem, IonLabel, 
  IonList,IonContent, IonHeader, IonTitle, IonToolbar,
  IonButtons,IonBackButton,IonButton } from '@ionic/angular/standalone';
  import { Storage } from '@ionic/storage-angular';
  import { Router } from '@angular/router';

@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, 
    CommonModule, FormsModule,
    IonButtons,IonBackButton,IonList,IonItem,IonLabel, 
    IonRadioGroup,IonRadio,IonButton]
})
export class StatusPage implements OnInit {
status:string="";
constructor(private storage:Storage,private router:Router){

}
async onButtonClick(){
  console.log(this.status)
  await this.storage.create();
  await this.storage.set('status',this.status);
  this.router.navigate(['/home'])
}

async ionviewWillEnter(){
  console.log("ionviewWillEditor")
  await this.storage.create();
  this.status= await this.storage.get('status');
}

  ngOnInit() {
  }

}
