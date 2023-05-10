import { Component } from '@angular/core';
import { UserService } from './userser.service';
import { Route, Router } from '@angular/router';
import { ModalDismissReasons, NgbAlertConfig, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
  listValue :any
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
  listaValue :any =  []
  listaValueTable:any = []

constructor (private user: UserService,private router:Router,alertConfig: NgbAlertConfig){
  
}
getApi(){
  let url ="http://localhost:8000/returnJSON"
  this.user.getApi().subscribe(data => {
    this.arrayData = data
    console.log(this.arrayData)
   this.listaValueTable.push(Object.values(this.arrayData[0]))
    let keys = Object.keys(this.arrayData[0])
    this.keyData = keys
    console.log(this.keyData[1])
    let keyModal = Object.keys(this.arrayData[1])
    this.keyDataModal = keyModal
    this.valueData = Object.values(this.arrayData)
    console.log(this.valueData)
    for (let i in this.valueData){
      this.listValue = ([this.valueData[i]])
    }
   
  })
}
goToPage(pageName:string):void{
  window.open(`${pageName}`, '_blank')
}



exportJson() {
  this.user.getApi().subscribe(data => {
    this.arrayData = data
    this.valueModal2 = [this.arrayData[1]]
    console.log(this.valueModal2)
    let json = JSON.stringify(this.valueModal2)
    console.log(json)
    this.valueModal2.href = "valueModal2:application/json;charset=utf-8," + json
  }) 
}
saveTable(){
  this.user.getApi().subscribe(data => {
    if(data == data){
    this.arrayData = data
    for (let i in this.valueData){
      this.valueData = (this.valueData[i])
    }
    let json = JSON.stringify(this.valueData)
    console.log(json)
    alert("json salvato !")
    }
    else{
      alert("error")
    }
  })

  
}
test(item:any){
  if(this.arrayData[0] == this.valueData)
  console.log(this.arrayData[0])
   
}
saveJson(){
  this.user.getApi().subscribe(data => {
    this.arrayData = data
    for (let i in this.valueData){
      if(this.valueData == this.valueData[0])
      this.valueData = ([this.valueData[i]])
    }
    let json = JSON.stringify(this.valueData)
    console.log(json)
    //const myBtn = document.querySelector('#myBtn');
    const datas = {
    name: 'jsonFile',
    url: json,
    };
    const jsonFile = new Blob([JSON.stringify(datas)]);
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(jsonFile);
    downloadLink.download = 'demo.json';
    downloadLink.click();
    console.log(jsonFile)
    
}) 
}
uploadJson(){
 this.user.addData().subscribe(data =>{
  console.log(data)
  if(data){
    alert("json aggiunto al database !")
  }else{
    alert("Error!")
  }
 })
}

}

