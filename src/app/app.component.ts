import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { Route, Router } from '@angular/router';
import { ModalDismissReasons, NgbAlertConfig, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { mockJson } from './mockJson';
import { empty } from 'rxjs';

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
  listValue1 :any 
  listValue2 :any 
  dialog: any;
  keyDataModal:any
  valueModal1:any
  valueModal2:any
  valueModal3:any

  listaValue :any =  []
  listaValueTable:any = []
  listValueModal:any= []
  listValueModal2: any = [];
  detailData: any;
  detailId:any
  header : any
  selector: any;
  b: any;
  result : any
  keyResult : any
  arrayDataEdit : any = mockJson
  alert : boolean = false
  alertDelete :boolean = false
  alertcopy : boolean = false
  alertinsert : boolean = false
  alertinsertSuccess:boolean = false
  alertMessageInsertSucces:string='dati inseriti correttamente !'
  alertMessage : string = 'dati aggiornati correttamente'
  alertMessageDelete: string ='Eliminazione effettuata!'
  alertMessageCopy :string = 'Copiato !'
  alertMessageInsert: string = "Errore: compilare almeno un campo !"
  idDelete: any;
  closeResult: any;
  getDismissReason: any;
  keysModalInsert :any;
constructor (private user: ApiService,private router:Router,alertConfig: NgbAlertConfig,private modalService: NgbModal){
   
}


open(content:any,id:any) {
    console.log(id)
  this.detailData = id
  this.modalService.open(content,{ ariaLabelledBy: 'modal-basic-title' }).result.then(
    (result) => {
      this.closeResult = `Closed with: ${result}`;
    },
    (reason) => {
      console.log(reason)
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    },
  ); 
}



onClickGetApi(){
  this.user.viewList().subscribe(data => {
    this.arrayData = data
    let keys = Object.keys(this.arrayDataEdit)
    this.keyData = keys
    this.valueData = Object.values(this.arrayData)
    console.log(this.valueData)
   
  })
}

exportJson() {
  this.user.viewList().subscribe(data => {
    this.arrayData = data
    this.valueModal2 = [this.arrayData[1]]
    console.log(this.valueModal2)
    let json = JSON.stringify(this.detailData)
    console.log(json)
    this.valueModal2.href = "valueModal2:application/json;charset=utf-8," + json
  }) 
}
copyClipborad(item:any){
   let jsonCopy = item
   let jsonString = JSON.stringify(jsonCopy)
   navigator.clipboard.writeText(jsonString)
  }


onClickDetail(item:any){
  console.log("start onClickDetail")
  console.log(item)
  this.user.getElement(item).subscribe(data => {
    console.log(data)
    this.detailId = data
    this.detailData = item;
    console.log("contenuto dettaglio" +this.detailData)

  })
  this.detailData = item;
  console.log("end onClickDetail")
}

dowloadJson(item:any){
  this.user.viewList().subscribe(data => {
    this.arrayData = data
    for (let i in this.valueData){
      if(this.valueData == this.valueData[0])
      this.valueData = ([this.valueData[i]])
    }
    let json = JSON.stringify(item)
    console.log(json)
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

updateData(dataJson:any ){
  let idCell:any = document.getElementById("saveId")?.textContent
  let cell:any = document.getElementById("save")?.textContent
  let cell2 : any = document.getElementById("save2")?.textContent
  let cell3 : any = document.getElementById("save3")?.textContent
  let cell4 : any = document.getElementById("save4")?.textContent
  let cell5 : any = document.getElementById("save5")?.textContent
  let cell6 : any = document.getElementById("save6")?.textContent
  let cell7 : any = document.getElementById("save7")?.textContent
  let cell8 : any = document.getElementById("save8")?.textContent
  let cell9 : any = document.getElementById("save9")?.textContent
  let cell10 : any = document.getElementById("save10")?.textContent
  let cell11 : any = document.getElementById("save11")?.textContent
  let cell12 : any = document.getElementById("save12")?.textContent
  let cell13 : any = document.getElementById("save13")?.textContent
  let cell14 : any = document.getElementById("save14")?.textContent
  let cell15 : any = document.getElementById("save15")?.textContent
  let cell16 : any = document.getElementById("save16")?.textContent
  let cell17 : any = document.getElementById("save17")?.textContent
  let cell18 : any = document.getElementById("save18")?.textContent
  let cell19 : any = document.getElementById("save19")?.textContent
  let cell20 : any = document.getElementById("save20")?.textContent
  let cell21 : any = document.getElementById("save21")?.textContent
  let cell22 : any = document.getElementById("save22")?.textContent
  let cell23 : any = document.getElementById("save23")?.textContent
  let cell24 : any = document.getElementById("save24")?.textContent
  let cell25 : any = document.getElementById("save25")?.textContent
  let cell26 : any = document.getElementById("save26")?.textContent
  let cell27 : any = document.getElementById("save27")?.textContent
  let cell28 : any = document.getElementById("save28")?.textContent
  let cell29 : any = document.getElementById("save29")?.textContent
  let cell30 : any = document.getElementById("save30")?.textContent
  let cell31: any = document.getElementById("save31")?.textContent
  let cell32 : any = document.getElementById("save32")?.textContent
  let cell33 : any = document.getElementById("save33")?.textContent
  let cell34 : any = document.getElementById("save34")?.textContent
  let cell35 : any = document.getElementById("save35")?.textContent
  let cell36 : any = document.getElementById("save36")?.textContent
  let cell37 : any = document.getElementById("save37")?.textContent
  let cell38 : any = document.getElementById("save38")?.textContent
  let cell39 : any = document.getElementById("save39")?.textContent

 
  
   let  JsonEdit  = {
    "_id":idCell,
    "Entity": cell,
    "Isin": cell2,
    "InstrumentName": cell3,
    "MaturityDate": cell4,
    "IssuerName": cell5,
    "IssuerCode": cell6,
    "Currency": cell7,
    "MarketCode":cell8,
    "AgentName": cell9,
    "SettledQty": cell10,
    "LatestCleanPrice": 0,
    "LatestDirtyPrice": 0,
    "PriceSource": cell13,
    "SettledValue": cell14,
    "Current6A6Value": cell15,
    "BVALScore": cell16,
    "Moodys": cell17,
    "StandardAndPoors": cell18,
    "Fitch": cell19,
    "EligibileBCE": cell20,
    "HaircutBCE": cell21,
    "EligibileFED": cell22,
    "HaircutFED": cell23,
    "EligibileHKM": cell24,
    "HaircutHKM": cell25,
    "EligibileBOE":  cell26,
    "HaircutBOE":cell27,
    "Marketability": cell28,
    "LiquidityClass": cell29,
    "LiquidityClassHaircut": cell30,
    "LiquidityClassStressHaircut": cell31,
    "LiquidityClassPolicyHaircut": cell32,
    "LiquidityTypeName": cell33,
    "SecurityTypeName": cell34,
    "BBGLiquidityClassDate": cell35,
    "BBGLiquidityClass": cell36,
    "LRSNarrative": cell37,
    "FactorType": cell38,
    "BloombergCode": cell39

  }
  dataJson = JsonEdit

  console.log(JsonEdit)
  this.user.updateData(JsonEdit).subscribe(data =>{
  console.log(data)
  this.alert = true
  })

}




deleteDataApi (data:any) {
  this.user.deleteData(data).subscribe(data=>{

    console.log(data)
    if(data != null){
      this.alertDelete = true
      setTimeout(() => {
        this.alertDelete = false
      }, 3000);
    }else{
      this.alertDelete = false
    }
    setTimeout(() => {
      this.modalService.dismissAll()
    }, 4000);
  })

}


downloadCsv(item:any){
  console.log(item)
  let fileName = "download.csv";
  const data = item;
  let csv = new Blob([data[0]], {
    type: "application/octet-stream",
    
  });
  console.log(csv)
  const link = document.createElement("a");
  link.href = URL.createObjectURL(csv);
  console.log(link)
  document.body.appendChild(link);
  console.log(document.body.appendChild(link));
  link.download = fileName;
  link.click();
}

insertData() {
  let id:any = document.getElementById("id")?.textContent
  let cell1 :any = document.getElementById("save1") ?.textContent
  let cell:any = document.getElementById("save")?.textContent
  let cell2 : any = document.getElementById("save2")?.textContent
  let cell3 : any = document.getElementById("save3")?.textContent
  let cell4 : any = document.getElementById("save4")?.textContent
  let cell5 : any = document.getElementById("save5")?.textContent
  let cell6 : any = document.getElementById("save6")?.textContent
  let cell7 : any = document.getElementById("save7")?.textContent
  let cell8 : any = document.getElementById("save8")?.textContent
  let cell9 : any = document.getElementById("save9")?.textContent
  let cell10 : any = document.getElementById("save10")?.textContent
  let cell11 : any = document.getElementById("save11")?.textContent
  let cell12 : any = document.getElementById("save12")?.textContent
  let cell13 : any = document.getElementById("save13")?.textContent
  let cell14 : any = document.getElementById("save14")?.textContent
  let cell15 : any = document.getElementById("save15")?.textContent
  let cell16 : any = document.getElementById("save16")?.textContent
  let cell17 : any = document.getElementById("save17")?.textContent
  let cell18 : any = document.getElementById("save18")?.textContent
  let cell19 : any = document.getElementById("save19")?.textContent
  let cell20 : any = document.getElementById("save20")?.textContent
  let cell21 : any = document.getElementById("save21")?.textContent
  let cell22 : any = document.getElementById("save22")?.textContent
  let cell23 : any = document.getElementById("save23")?.textContent
  let cell24 : any = document.getElementById("save24")?.textContent
  let cell25 : any = document.getElementById("save25")?.textContent
  let cell26 : any = document.getElementById("save26")?.textContent
  let cell27 : any = document.getElementById("save27")?.textContent
  let cell28 : any = document.getElementById("save28")?.textContent
  let cell29 : any = document.getElementById("save29")?.textContent

  
 
  
   let  JsonEdit  = {
    "Entity": cell1,
    "Isin": cell,
    "InstrumentName": cell2,
    "MaturityDate": cell3,
    "IssuerName": cell4,
    "IssuerCode": cell5,
    "Currency": cell6,
    "MarketCode": cell7,
    "AgentName": cell8,
    "SettledQty": cell9,
    "LatestCleanPrice": cell10,
    "LatestDirtyPrice": cell11,
    "PriceSource": cell12,
    "SettledValue": cell13,
    "BVALScore": cell14,
    "EligibileBCE": cell15,
    "EligibileFED": cell16,
    "EligibileHKM": cell17,
    "EligibileBOE": cell18,
    "Marketability": cell19,
    "LiquidityClass": cell20,
    "LiquidityClassHaircut": cell21,
    "LiquidityClassStressHaircut": cell22,
    "LiquidityClassPolicyHaircut": cell23,
    "LiquidityTypeName": cell24,
    "SecurityTypeName": cell25,
    "BBGLiquidityClassDate":cell26,
    "BBGLiquidityClass": cell27,
    "LRSNarrative": cell28,
    "BloombergCode": cell29

  }
  console.log(JsonEdit)
  let values = Object.values(JsonEdit)
  console.log(values)
  for (let x in values){
    console.log(values[x])
    if(values[x]==""){
      console.log("error")
      this.alertinsert = true
    }else{
      this.alertinsertSuccess=true
      this.user.insertData(JsonEdit).subscribe(data=>{
        console.log(data)    
      })
    
    }
  }
  
}

openModalInsert(data:any) {
 this.keysModalInsert  = Object.keys(this.arrayDataEdit)
this.modalService.open(data,{ ariaLabelledBy: 'modal-basic-title' }).result.then(
  (result) => {
    this.closeResult = `Closed with: ${result}`;
  },
  (reason) => {
    console.log(reason)
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  },
); 
}

}




