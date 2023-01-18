import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VegesAddComponent } from './veges-add.component';
import { provideMockStore } from '@ngrx/store/testing';
import { By } from '@angular/platform-browser';
import { Stores } from './veges';

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
      providers: [provideMockStore({})],
    })
    .compileComponents();

    fixture = TestBed.createComponent(VegesAddComponent);
    component = fixture.componentInstance;
    element=fixture.nativeElement;
    fixture.detectChanges();

    component.vege={
      id:1,
      name:"tomato",
      stores:Stores.store1,
      price:10,
      image:'./assets/images/tomato.jpeg',
      qty:0,
      total:0
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check veggie name',()=>{
    const e1=fixture.debugElement.query(By.css('#name'));
    expect(e1).toBeTruthy();
  })

  it('should have VegeName type of text', () => {
    const e1 =fixture.debugElement.query(By.css('#name'));
    expect(e1.nativeElement.getAttribute('type')).toEqual('text');
  });

  it('should have name as VeggieName', () => {
    const e1 =fixture.debugElement.query(By.css('#name'));
    expect(e1.nativeElement.getAttribute('name')).toEqual('name');
  });

  it('should check VeggieName input value is correct', () => {
    let name=component.addVege.controls['name'];
    name.setValue('xyz');
    expect(name.errors).toBeNull();    
  });

  it('should check Price', () => {
    const e1 =fixture.debugElement.query(By.css('#price'));
    expect(e1).toBeTruthy();
  });

  it('should have Price type of number', () => {
    const e1 =fixture.debugElement.query(By.css('#price'));
    expect(e1.nativeElement.getAttribute('type')).toEqual('number');
  });

  it('should have name as Price', () => {
    const e1 =fixture.debugElement.query(By.css('#price'));
    expect(e1.nativeElement.getAttribute('name')).toEqual('price');
  });

  it('should check Price input value is correct', () => {
    let price=component.addVege.controls['price'];
    price.setValue('10');
    expect(price.errors).toBeNull();    
  });

  it('should check Image', () => {
    const e1 =fixture.debugElement.query(By.css('#image'));
    expect(e1).toBeTruthy();
  });

  it('should have Image type of text', () => {
    const e1 =fixture.debugElement.query(By.css('#image'));
    expect(e1.nativeElement.getAttribute('type')).toEqual('text');
  });

  it('should have name as image', () => {90;
    const e1 =fixture.debugElement.query(By.css('#image'))
    expect(e1.nativeElement.getAttribute('name')).toEqual('image');
  });

  it('should check image input value is correct', () => {
    let image=component.addVege.controls['image'];
    image.setValue('../../assets/images/potato.jpg');
    expect(image.errors).toBeNull();    
  });

  it('should check select',()=>{
    const e1 =fixture.debugElement.query(By.css('#sel')).nativeElement;
    let select=component.addVege.controls['stores'];
    select.setValue('store1');
    expect(select.errors).toBeNull(); 
    e1.value=e1.options[2].value;
    fixture.detectChanges();
    let val=e1.options[e1.selectedIndex].label;
    expect(val).toEqual('Store 3');
  });

  it('should check addVege button disabled', () => {
    fixture.detectChanges();
    let btn=fixture.debugElement.query(By.css('#btn')).nativeElement ;
    expect(btn.disabled).toBe(true );
   });

   it('should check addVege button enable', () => {
    let btn=fixture.debugElement.query(By.css('#btn')).nativeElement ;
    component.addVege.controls['id'].setValue('111');
    component.addVege.controls['name'].setValue('potatos');
    component.addVege.controls['price'].setValue('20');
    component.addVege.controls['image'].setValue('../../assets/images/potatos.jpg');
    component.addVege.controls['stores'].setValue('store1');  
    fixture.detectChanges();
    expect(btn.disabled).toBe(true);
   })
});
 



