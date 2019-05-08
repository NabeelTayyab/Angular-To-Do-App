import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(filterItem: any, selected: string): any {
    if(filterItem === null){
      return filterItem;
    }
    return filterItem.filter(function(items){
      if(selected === 'alltask'){
        return items;
      }
      else if(selected === 'completed'){
        return items.taskstatus === true;
      }
      else if(selected === 'notcompleted'){
        return items.taskstatus === false;
      }
      else {
        return items;
      }
    });

  }

}
