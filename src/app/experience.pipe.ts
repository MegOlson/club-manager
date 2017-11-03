import { Pipe, PipeTransform } from '@angular/core';
import { Member } from './member.model';

@Pipe({
  name: 'experience',
  pure: false
})
export class ExperiencePipe implements PipeTransform {

  transform(input: Member[]){
    let output: Member[] = [];
    for(let i = 0; i < input.length; i++){
      if(input[i].experience < 5) {
        output.push(input[i]);
      }
    }
    return output;
  }


}
