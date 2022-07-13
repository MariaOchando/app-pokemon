import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestPokemonsComponent } from './landing-page.component';

describe('LatestPokemonsComponent', () => {
  let component: LatestPokemonsComponent;
  let fixture: ComponentFixture<LatestPokemonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LatestPokemonsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LatestPokemonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
