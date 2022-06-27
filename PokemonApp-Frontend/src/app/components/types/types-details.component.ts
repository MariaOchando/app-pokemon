import { Component, OnInit } from '@angular/core';
import { TypesService } from 'src/app/services/types.service';
import { ActivatedRoute } from '@angular/router';
import { Type } from 'src/app/services/types.service';
@Component({
  selector: 'app-types-details',
  templateUrl: './types-details.component.html',
  styleUrls: ['./types-details.component.scss']
})
export class TypesDetailsComponent implements OnInit {

  type: Type = {
    name: "",
  id: 0,
  move_damage_class: {
    name: ""
  },

  }

  constructor(
    private route: ActivatedRoute,
    private typesService: TypesService,
  ) { 
    this.loadType();
  }
  loadType(): void {
    const typeId = this.route.snapshot.paramMap.get('type');
     this.typesService.getById(String(typeId))
    .subscribe ((result => {
      this.type = result
       console.log(result);
     }));
    }

  ngOnInit(): void {
  }

}
