import { Component, OnInit } from '@angular/core';
import { AbilitiesService } from 'src/app/services/abilities.service';
import { Ability } from 'src/app/models/models';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-abilities',
  templateUrl: './abilities.component.html',
  styleUrls: ['./abilities.component.scss'],
})
export class AbilitiesComponent implements OnInit {
  abilitiesList: Ability[] = [];
  p: number = 1;
  collection: Ability[] = this.abilitiesList;
  errorMsg: string | undefined;

  constructor(private abilitiesService: AbilitiesService) {}

  ngOnInit(): void {
    this.abilitiesService
      .getAll()
      .pipe(
        catchError((error) => {
          this.errorMsg = error.message;
          return of([]);
        })
      )
      .subscribe((response) => {
        this.abilitiesList = response.results;
        console.log(response);
      });
  }
}
