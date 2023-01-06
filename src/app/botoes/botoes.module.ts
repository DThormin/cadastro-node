import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { BotaoGrandeComponent } from './botao-grande/botao-grande.component';


@NgModule({
	declarations: [
		BotaoGrandeComponent
	],
	imports: [
		CommonModule,
		ButtonModule
	],
	exports: [
		BotaoGrandeComponent
	]
})
export class BotoesModule { }
