import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { VegesComponent } from './veges.component';

describe('VegesComponent', () => {
  let component: VegesComponent;
  let fixture: ComponentFixture<VegesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VegesComponent ],
      imports:[HttpClientModule,
        Ng2SearchPipeModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA],
      providers: [provideMockStore({})]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VegesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
