import { Component, OnInit } from '@angular/core';
import { AbilitiesService } from 'src/app/services/abilities.service';
import { ActivatedRoute } from '@angular/router';
import { Ability } from 'src/app/models/models';
@Component({
  selector: 'app-abilities-details',
  templateUrl: './abilities-details.component.html',
  styleUrls: ['./abilities-details.component.scss']
})
export class AbilitiesDetailsComponent implements OnInit {
  
  //specify info we want
  ability: Ability = {
    name: "",
    id: 0,
    effect_entries: [{
      short_effect: "",
    }, {
      short_effect: "",
    }],
   generation: {
    name: "",
   }
  }

  constructor(
    private abilitiesService: AbilitiesService,
    private route: ActivatedRoute,
  ) { 
    this.loadAbility();
  }
  loadAbility(): void {
   const abilityName = this.route.snapshot.paramMap.get('ability');
    this.abilitiesService.getByName(String(abilityName))
    .subscribe((result) => {
      this.ability = result
      console.log(this.ability);

    });
  
  } 

  ngOnInit(): void {
  }

}
