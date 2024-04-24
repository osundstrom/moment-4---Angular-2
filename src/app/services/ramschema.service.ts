import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Schema } from '../model/schema';

@Injectable({
  providedIn: 'root'
})
export class RamschemaService {
  private url: string ="https://webbutveckling.miun.se/files/ramschema_ht23.json"


  constructor(private http:HttpClient) { }


  getRamschema(): Observable<Schema[]> {
    return this.http.get<Schema[]>(this.url);
  }
}
