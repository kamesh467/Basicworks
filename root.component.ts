import {Component} from 'angular2/core';

@Component({
   selector:'root-app',
   template:`<h1>
             Root Component<br>
             {{anyModelName}}
             <br><br>
             <input type="text" [(ngModel)] ="anyModelName">
             
             </h1>`
               
           })

export class RootComponent
{
 public anyModelName:any = 'My first angular2 app'
}



