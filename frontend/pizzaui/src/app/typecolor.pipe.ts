import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typecolor'
})
export class TypecolorPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }
  transform(type: string): any {
    if(type === 'nonveg'){
      return {backgroundColor: 'red'};
    }else{
      return {backgroundColor: 'green'};
    }
  }

}
