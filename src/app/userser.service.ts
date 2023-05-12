import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
const httpOptions = {
    headers: new HttpHeaders({ 
        'Access-Control-Allow-Origin': ' *',

        'Access-Control-Allow-Methods': 'POST, PUT, PATCH, GET, DELETE, OPTIONS',
        
        'Access-Control-Allow-Headers': '*' 
    })
  };
@Injectable({
    providedIn:'root'
})

export class UserService {
    constructor(private http:HttpClient) { }

    

    getApi() {
        let url = "http://localhost:8000/returnJSON"
        console.log(url)
        return this.http.get(url)
    }
    addData(){
        let url = "http://localhost:8000/updateJson"
        const body = {title: "post"}
        console.log(this.http.post(url,body,httpOptions))
        return this.http.post(url,body,httpOptions)

        }
    getId(){
        let url = "http://localhost:8000/returnJSON"
        console.log(url)
        return this.http.get(url)
    }
}
