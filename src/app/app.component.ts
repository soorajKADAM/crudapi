import { Component, NgIterable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonService } from './common.service';
import {user} from './app'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})





export class AppComponent {
  
response: any;
  title = 'crudapi';

  eachUser: Object

  

 
 
 
  
  
  constructor(private commonService:CommonService){}
  ngOninit(){
  
  
    this.getLatestUser();
  }
  adduser(formsObj){
    console.log(formsObj)
    this.commonService.createUser(formsObj).subscribe((response)=>{
      this.getLatestUser();
     
    })

  

  }
  
  getLatestUser(){
    
      this.commonService.getallUser().subscribe((response)=>{
        this.eachUser = response 

       
      })
  }
}
