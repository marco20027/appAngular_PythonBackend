import { Component } from '@angular/core';
import { UserService } from './userser.service';
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
constructor (private user: UserService){
  
}
getApi(){
  let url ="http://localhost:8000/returnJSON"
  this.user.getApi().subscribe(data => {
    this.arrayData = data
    let keys = Object.keys(this.arrayData[0])
    this.keyData = keys
    this.valueData = Object.values(this.arrayData)
    console.log(this.valueData)
  })
}
}
