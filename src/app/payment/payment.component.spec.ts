import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { provideMockStore } from '@ngrx/store/testing';
import { PaymentComponent } from './payment.component';

describe('PaymentComponent', () => {
  let component: PaymentComponent;
  let fixture: ComponentFixture<PaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentComponent ],
      imports: [FormsModule,
              HttpClientTestingModule,
              ReactiveFormsModule],
      providers: [provideMockStore({})]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /* Check for name */
  it('should check name', () => {
    const e1 =fixture.debugElement.query(By.css('#fname'));
    expect(e1).toBeTruthy();
  });
  it('should have type text for name', () => {
    const e1 =fixture.debugElement.query(By.css('#fname'));
    expect(e1.nativeElement.getAttribute('type')).toEqual('text');
  });

  /* Check for email */
  it('should check email', () => {
    const e1 =fixture.debugElement.query(By.css('#email'));
    expect(e1).toBeTruthy();
  });
  it('should have type text for email', () => {
    const e1 =fixture.debugElement.query(By.css('#email'));
    expect(e1.nativeElement.getAttribute('type')).toEqual('email');
  });

  /* Check for address */
  it('should check address', () => {
    const e1 =fixture.debugElement.query(By.css('#adr'));
    expect(e1).toBeTruthy();
  });
  it('should have type text for address', () => {
    const e1 =fixture.debugElement.query(By.css('#adr'));
    expect(e1.nativeElement.getAttribute('type')).toEqual('text');
  });
  
  /* Check for city */
  it('should check city', () => {
    const e1 =fixture.debugElement.query(By.css('#city'));
    expect(e1).toBeTruthy();
  });
  it('should have type text for city', () => {
    const e1 =fixture.debugElement.query(By.css('#city'));
    expect(e1.nativeElement.getAttribute('type')).toEqual('text');
  });

  /* Check for state */
  it('should check state', () => {
    const e1 =fixture.debugElement.query(By.css('#state'));
    expect(e1).toBeTruthy();
  });
  it('should have type text for state', () => {
    const e1 =fixture.debugElement.query(By.css('#state'));
    expect(e1.nativeElement.getAttribute('type')).toEqual('text');
  });

  /* Check for Zip */
  it('should check zip', () => {
    const e1 =fixture.debugElement.query(By.css('#zip'));
    expect(e1).toBeTruthy();
  });
  it('should have type text for zip', () => {
    const e1 =fixture.debugElement.query(By.css('#zip'));
    expect(e1.nativeElement.getAttribute('type')).toEqual('number');
  });
});
