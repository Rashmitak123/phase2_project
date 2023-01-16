import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VegesAddComponent } from './veges-add.component';
import { provideMockStore } from '@ngrx/store/testing';



describe('VegesAddComponent', () => {
  let component: VegesAddComponent;
  let element:HTMLElement;
  let fixture: ComponentFixture<VegesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VegesAddComponent ],
      imports: [HttpClientTestingModule,
        ReactiveFormsModule,
        FormsModule],
      providers: [provideMockStore({})]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VegesAddComponent);
    component = fixture.componentInstance;
    element=fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
