import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpTestingController , HttpClientTestingModule } from '@angular/common/http/testing'
import { ContactUsComponent } from './contact-us.component';
import { By } from '@angular/platform-browser';

describe('ContactUsComponent', () => {
  let component: ContactUsComponent;
  let fixture: ComponentFixture<ContactUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactUsComponent ],
      imports:[ReactiveFormsModule, 
        HttpClientTestingModule,
        FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should check name', () => {
    const e1 =fixture.debugElement.query(By.css('#name'));
    expect(e1).toBeTruthy();
  });
  it('should have type text for name', () => {
    const e1 =fixture.debugElement.query(By.css('#name'));
    expect(e1.nativeElement.getAttribute('type')).toEqual('text');
  });
  it('should check name input is entered', () => {
    let name=component.form.controls['name'];
    name.setValue('rashmi');
    expect(name.errors).toBeNull(); 
  });
  it('should check email', () => {
    const e1 =fixture.debugElement.query(By.css('#email'));
    expect(e1).toBeTruthy();
  });
  it('should have type email for email', () => {
    const e1 =fixture.debugElement.query(By.css('#email'));
    expect(e1.nativeElement.getAttribute('type')).toEqual('email');
  });
  it('should have name for email', () => {
    const e1 =fixture.debugElement.query(By.css('#email'));
    expect(e1.nativeElement.getAttribute('name')).toEqual('email');
  });
  it('should check email is entered', () => {
    let email=component.form.controls['email'];
    email.setValue('rashmi@gmail.com');
    expect(email.errors).toBeNull(); 
  });
  it('should check select',()=>{
    const e1 =fixture.debugElement.query(By.css('#store')).nativeElement;
    let select=component.form.controls['store'];
    select.setValue('store2');
    expect(select.errors).toBeNull(); 
    e1.value=e1.options[1].value;
    fixture.detectChanges();
    let val=e1.options[e1.selectedIndex].label;
    expect(val).toEqual('store 2');
  })
  it('should have placeholder for store', () => {
    const e1 =fixture.debugElement.query(By.css('#store'));
    expect(e1.nativeElement.getAttribute('placeholder')).toEqual('select store name');
  });
  it('should check comment is entered', () => {
    let cmt=component.form.controls['comment'];
    cmt.setValue('damaged item');
    expect(cmt.errors).toBeNull(); 
  });
});
