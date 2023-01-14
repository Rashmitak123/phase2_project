import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VegesAddComponent } from './veges-add.component';

describe('VegesAddComponent', () => {
  let component: VegesAddComponent;
  let fixture: ComponentFixture<VegesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VegesAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VegesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
