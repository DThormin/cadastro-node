import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component'

import { FormsModule } from '@angular/forms'
import { ButtonModule } from 'primeng/button'
import { CalendarModule } from 'primeng/calendar'
import { DropdownModule } from 'primeng/dropdown'
import { InputMaskModule } from 'primeng/inputmask'
import { InputNumberModule } from 'primeng/inputnumber'
import { InputTextModule } from 'primeng/inputtext'
import { InputTextareaModule } from 'primeng/inputtextarea'
import { MessageModule } from 'primeng/message'
import { MessagesModule } from 'primeng/messages'
import { SelectButtonModule } from 'primeng/selectbutton'
import { TableModule } from 'primeng/table'
import { TooltipModule } from 'primeng/tooltip'
import { BotoesModule } from './botoes/botoes.module'
import { LancamentosModule } from './lancamentos/lancamentos.module'
import { NucleoModule } from './nucleo/nucleo.module'
import { PessoasModule } from './pessoas/pessoas.module'

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BotoesModule,
		BrowserModule,
		BrowserAnimationsModule,
		ButtonModule,
		CalendarModule,
		DropdownModule,
		FormsModule,
		InputNumberModule,
		InputMaskModule,
		InputTextModule,
		InputTextareaModule,
		LancamentosModule,
		PessoasModule,
		MessagesModule,
		MessageModule,
		SelectButtonModule,
		TableModule,
		TooltipModule,
		NucleoModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
