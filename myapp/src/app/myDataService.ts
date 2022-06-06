import { Component } from '@angular/core';
// This is the service.
export class MyDataService {
names: Array<any>;
constructor() {
this.names = ['Kenneth', 'Deborah', 'Maximilian'];
}
getNames() {
return this.names;
}
}