import {Component} from '@angular/core';
@Component({
selector: 'app-emp',
templateUrl: 'app-emp.html'


})
export class emp{

    public name: string='Hello !!!!!!!!!!!!!!!!';

    public empdata: any=[

        {name: 'abby', city: 'baramati', salary:'100000'},
        {name: 'vare', city: 'kolhapur', salary:'120000'}
    ];
     
    public myColor:string='red';


}