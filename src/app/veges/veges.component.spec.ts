import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VegesComponent } from './veges.component';

describe('VegesComponent', () => {
  let component: VegesComponent;
  let fixture: ComponentFixture<VegesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VegesComponent ],
      imports:[HttpClientModule]
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
