import { Component, OnInit } from '@angular/core';
import { Person } from '../models/person';
import { PersonService } from '../services/person.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {
  persons: Person[] = [];
  personForm: FormGroup;
  isPostPersonFormSubmitted: boolean = false;

  constructor(private personService: PersonService) {
    this.personForm = new FormGroup({
      PersonName: new FormControl(null, [Validators.required]),
      Email: new FormControl(null, [Validators.required]),
      Gender: new FormControl(null, [Validators.required]),
      Address: new FormControl(null, [Validators.required]),
      Country: new FormControl(null, [Validators.required]),
      PersonalId: new FormControl(null, [Validators.required]),
    });
  }

  loadPersons() {
    this.personService.getPersons().subscribe({
      next: (response: Person[]) => { this.persons = response },
      error: (error: any) => { console.log(error) },
      complete: () => { }
    });
  }

  ngOnInit(): void {
    this.loadPersons();
  }

  get postPerson_personNameControl(): any {
    return this.personForm.controls['PersonName'];
  }

  get postPerson_personEmailControl(): any {
    return this.personForm.controls['Email'];
  }

  get postPerson_personGenderControl(): any {
    return this.personForm.controls['Gender'];
  }

  get postPerson_personAddressControl(): any {
    return this.personForm.controls['Address'];
  }

  get postPerson_personCountryControl(): any {
    return this.personForm.controls["Country"];
  }

  get postPerson_personPersonalIdControl(): any {
    return this.personForm.controls["PersonalId"];
  }

  public postPersonSubmitted(): any {
    this.isPostPersonFormSubmitted = true;

    this.personService.postPerson(this.personForm.value).subscribe(
      {
        next: (response: Person) => {
          console.log(response);
          this.persons.push(new Person(response.name,
            response.email,
            response.gender,
            response.address,
            response.country,
            response.personalId));
        },

        error: (error: any) => { console.log(error) },

        complete: () => { }
      });
  }

}