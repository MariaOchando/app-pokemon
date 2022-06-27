import { Component, OnInit } from '@angular/core';
import { AbilitiesService } from 'src/app/services/abilities.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-abilities-details',
  templateUrl: './abilities-details.component.html',
  styleUrls: ['./abilities-details.component.scss']
})
export class AbilitiesDetailsComponent implements OnInit {

  constructor(
    private abilitiesService: AbilitiesService,
    private route: ActivatedRoute,
  ) { 

    // const abilityName = this.route.snapshot.paramMap.get('ability');
    // this.abilitiesService.getByName(String(abilityName))
    // .then((result => {
    //   console.log(result);
    // }))
  }

  ngOnInit(): void {
  }

}
