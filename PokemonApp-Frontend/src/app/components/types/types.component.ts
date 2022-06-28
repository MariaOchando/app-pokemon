import { Component, OnInit } from '@angular/core';
import { TypesService } from 'src/app/services/types.service';
import { Type } from 'src/app/models/models';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.scss']
})
export class TypesComponent implements OnInit {

  typesList : Type[] = [];
  p: number = 1;
  collection: Type[] = this.typesList; 

   constructor(private typesService: TypesService) { }

    ngOnInit(): void {
      this.typesService.getAll()
      .subscribe(response => {
        this.typesList = response.results;
        console.log(response);
      })
    }

}