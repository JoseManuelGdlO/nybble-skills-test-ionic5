import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input';
import { FormsModule } from '@angular/forms';
@NgModule({
	declarations: [ButtonComponent,
    InputComponent],
	imports: [
		CommonModule,
		FormsModule
	],
	exports: [ButtonComponent,
    InputComponent]
})
export class ComponentsModule {}
