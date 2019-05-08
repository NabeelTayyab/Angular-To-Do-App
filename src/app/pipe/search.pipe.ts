import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(ite: any, searchItem: string): any {
    if(searchItem === undefined || searchItem === ''){
      return ite;
    }

    return ite.filter(function(items){
      return items.taskname.toString().toLowerCase().includes(searchItem.toLowerCase());
    })
  }

}
 