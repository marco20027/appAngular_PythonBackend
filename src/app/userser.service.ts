import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
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
        const body = { title: 'test' };
        let url = "http://localhost:8000/updateJson"
        console.log(url,body)
        return this.http.post(url, body)
    }
}