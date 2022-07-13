import { Component, OnInit } from '@angular/core';
import { TypesService } from 'src/app/services/types.service';
import { ActivatedRoute } from '@angular/router';
import { Type } from 'src/app/models/models';
import { catchError, of } from 'rxjs';
@Component({
  selector: 'app-types-details',
  templateUrl: './types-details.component.html',
  styleUrls: ['./types-details.component.scss'],
})
export class TypesDetailsComponent implements OnInit {
  //specify info we want
  type: Type = {
    name: '',
    id: 0,
    move_damage_class: {
      name: '',
    },
    generation: {
      name: '',
    },
  };
  errorMsg: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private typesService: TypesService
  ) {
    this.loadType();
  }
  loadType(): void {
    const typeId = this.route.snapshot.paramMap.get('type');
    this.typesService
      .getById(String(typeId))
      .pipe(
        catchError((error) => {
          this.errorMsg = error.message;
          return of([]);
        })
      )
      .subscribe((result) => {
        this.type = result;
        console.log(result);
      });
  }

  ngOnInit(): void {}
}
