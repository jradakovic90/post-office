import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs"

@Injectable()
export abstract class ApiBaseService {
    protected httpClient: HttpClient
    protected apiBaseUrl = ""

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient
        //TODO in core folder i would add configuration folder and create configuration service and use it in this class to get apiURl from environments.json
        this.apiBaseUrl = "http://localhost:3000";
    }

    protected get<T>(url: string, httpParams: HttpParams | undefined = undefined): Observable<T> {
        return this.httpClient.get<T>(`${this.apiBaseUrl}/${url}`, { params: httpParams });
    }

    protected post<T>(url: string, body: any): Observable<any> {
        return this.httpClient.post<T>(`${this.apiBaseUrl}/${url}`, body)
    }
}
