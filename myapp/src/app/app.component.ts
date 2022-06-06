import { Component } from '@angular/core';
import { MyDataService } from './myDataService';
import { ConversionCtoF } from './conversionCtoF';
@Component({
selector: 'app-root',
template: `<h1>Hello world! {{title}}</h1>
<ul>{{"Name: " + myname +"      Temp:" + f}}</ul>`,
// 'providers' allows you to create and pass an instance
// of the class to the constructor header.
providers: [MyDataService, ConversionCtoF]
})
export class AppComponent {
public title = 'This is Angular!';
f: number;
myname: string;


// Create instance of 'MyDataService' right in the constructor
// header.
constructor(myDataService: MyDataService, conversionCtoF: ConversionCtoF) {
// Use service to call getNames() method.
this.myname = myDataService.getmyNames();
this.f = conversionCtoF.getConversion();
}
}