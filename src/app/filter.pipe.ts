import { Pipe, PipeTransform } from '@angular/core';
import { IVeges } from './veges/veges';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(veges:IVeges[], filterValue: string) {
    if(veges.length===0 || filterValue===''){
      return veges;
    }else{
     return veges.filter((vege)=>{
         return vege.stores.toLowerCase()===filterValue.toLowerCase()
      })
    }
   
  }

}
