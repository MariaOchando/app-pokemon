import { Component, OnInit } from '@angular/core';
import { AbilitiesService } from 'src/app/services/abilities.service';
import { Ability } from 'src/app/services/abilities.service';


@Component({
  selector: 'app-abilities',
  templateUrl: './abilities.component.html',
  styleUrls: ['./abilities.component.scss']
})
export class AbilitiesComponent implements OnInit {

  abilitiesList:Ability[] = [];

  constructor(private abilitiesService: AbilitiesService) { }

  ngOnInit(): void {
    this.abilitiesService.getAll()
    .subscribe(response => {
      this.abilitiesList = response.results;
      console.log(response);
    })
  }

}
