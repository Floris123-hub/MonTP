import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn:"root"
})
export class DataService {

    constructor(private _httpClient: HttpClient) {
    }

    getUsers(){
        return this._httpClient.get("/assets/data/data.json");
    }

}