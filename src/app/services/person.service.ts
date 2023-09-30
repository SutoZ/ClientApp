import { Injectable } from '@angular/core';
import { Person } from '../models/person';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const API_BASE_URL: string = 'http://localhost:13882/persons/';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  persons: Person[] = [];
  constructor(private httpClient: HttpClient) {

  }

  public getPersons(): Observable<Person[]> {
    let headers = new HttpHeaders();
    headers.append("Authorization", "Bearer mytoken");
    return this.httpClient.get<Person[]>(`${API_BASE_URL}`, { headers: headers });
  }

  public postPerson(person: Person): Observable<Person> {
    let headers = new HttpHeaders();
    headers.append("Authorization", "Bearer mytoken");

    return this.httpClient.post<Person>(`${API_BASE_URL}`, person, {headers: headers});
  }
}
