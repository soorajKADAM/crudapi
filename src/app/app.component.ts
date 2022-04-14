import { Component, NgIterable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonService } from './common.service';
import { User } from './app';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})





export class AppComponent {
  

  title = 'crudapi';
eachUser:any=[]
isEdit=false;
userObj={
  name:'',
  mobile:'',
  email:'',
  password:'',
  id:''
}
 
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
        this.eachUser = response   ;    
      });
  }
  editUser(user){
    this.isEdit=true;
    this.userObj=user;
  }
  deleteUser(user){
    this.commonService.deleteUser(user).subscribe(()=>{
      this.getLatestUser();

    })
  }
  updateUser(){
    this.isEdit = !this.isEdit;
    this.commonService.updateUser(this.userObj).subscribe(()=>{
      this.getLatestUser();
    })
  }
}
