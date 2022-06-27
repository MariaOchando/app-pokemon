import { Component, OnInit } from '@angular/core';
import { TypesService } from 'src/app/services/types.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-types-details',
  templateUrl: './types-details.component.html',
  styleUrls: ['./types-details.component.scss']
})
export class TypesDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private typesService: TypesService,
  ) { 

    // const typeName = this.route.snapshot.paramMap.get('type');
    // this.typesService.getByName(String(typeName))
    // // .then ((result => {
    // //   console.log(result);
    // // }))
  }

  ngOnInit(): void {
  }

}
