import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeFormat'
})
export class TimeFormatPipe implements PipeTransform {

  transform(minutes:number){
    if(minutes<60)
      return `${minutes} דקות`;
    if(minutes==60)
      return "שעה";
    if(minutes==120)
      return "שעתיים";
    if(minutes>60){
      if(Math.floor(minutes/60)==1)
        return `שעה ו- ${minutes%60} דקות`;           
      if(Math.floor(minutes/60)==2)
        return `שעתיים ו- ${minutes%60} דקות`; 
    }    
    return `${Math.floor(minutes/60)} שעות ו- ${minutes%60} דקות`;
    }
  }


