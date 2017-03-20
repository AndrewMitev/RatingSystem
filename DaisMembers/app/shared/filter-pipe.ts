import { Pipe, PipeTransform} from '@angular/core'
import { Member } from '../members/member'

@Pipe({
    name: 'filterPipe'
})
export class FilterPipe implements  PipeTransform{
    transform(products: Member[], filter: string): Member[] {
        let filterBy = filter ? filter.toLowerCase() : null;
        return filterBy ? products.filter((product) => product.memberName.toLowerCase().indexOf(filterBy) !== -1) : products;
    }
}