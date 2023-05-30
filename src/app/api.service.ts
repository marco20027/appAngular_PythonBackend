import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
const httpOptions = {
    headers: new HttpHeaders({ 
        'Access-Control-Allow-Origin': ' *',

        'Access-Control-Allow-Methods': 'POST, PUT, PATCH, GET, DELETE, OPTIONS',
        
        'Access-Control-Allow-Headers': '*' ,
       
    })
  };
@Injectable({
    providedIn:'root'
})

export class ApiService {
    constructor(private http:HttpClient) { }
    

    viewList() {
        let url = "http://localhost:8000/returnCollection"
        console.log(url)
        return this.http.get(url)
    }
    
    updateData(data:any){
        console.log(data._id)
        const id = data._id
        let url = "http://localhost:8000/updateData/" + id
        const headers = { 'content-type': 'application/json'}
        return this.http.post(url,data, {'headers':headers})

        }
    getElement(valueId: string){
        let dataid = Object.values(valueId)
        const id = dataid[0]
        let url = "http://localhost:8000/data/"+id
        console.log(valueId)
        return this.http.get(url)
    }

    deleteData(id:any){
        const idDelete = id._id
        let url = "http://localhost:8000/deleteData/" + idDelete
        const headers = { 'content-type': 'application/json'}
        return this.http.post(url,id, {'headers':headers})
    }
}
