import { Component } from '@angular/core';
import { UserService } from './userser.service';
import { Route, Router } from '@angular/router';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  arrayData:any
  keyData:any
  valueData: any
  dialog: any;
  keyDataModal:any
  valueModal1:any
  valueModal2:any
  valueModal3:any
  valueModal4:any
  valueModal5:any
  valueModal6:any
  valueModal7:any
  valueModal8:any
  valueModal9:any


constructor (private user: UserService,private router:Router){
  
}
getApi(){
  let url ="http://localhost:8000/returnJSON"
  this.user.getApi().subscribe(data => {
    this.arrayData = data
    let keys = Object.keys(this.arrayData[0])
    this.keyData = keys
    let keyModal = Object.keys(this.arrayData[1])
    this.keyDataModal = keyModal
    this.valueData = Object.values(this.arrayData)
    this.valueModal1 = Object.values(this.arrayData[0])
    this.valueModal2 = Object.values(this.arrayData[1])
    this.valueModal3 = Object.values(this.arrayData[2])
    this.valueModal4 = Object.values(this.arrayData[3])
    this.valueModal5 = Object.values(this.arrayData[4])
    this.valueModal6 = Object.values(this.arrayData[5])
    this.valueModal7 = Object.values(this.arrayData[6])
    this.valueModal8 = Object.values(this.arrayData[7])
    this.valueModal9 = Object.values(this.arrayData[8])
    console.log(this.valueModal1,this.valueModal9)
  })
}
goToPage(pageName:string):void{
  window.open(`${pageName}`, '_blank')
}
addData() {
  this.user.addData().subscribe(data => {
    console.log("add", data)
  })
}
}
