import { Component, Input } from '@angular/core';
// Define second directive.

@Component({
selector: 'second-directive',
template: `<h3>This is the second directive! {{firstName}}</h3>`,
})
// This is really just a component.
export class NewDirective {
	@Input()
	firstName: string = "";
	
}