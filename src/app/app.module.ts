import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PreviewComponent } from './preview/preview.component';
import { DatePipeComponent } from './date-pipe/date-pipe.component';
import { LoginComponent } from './login/login.component';
import { MenueComponent } from './menue/menue.component';

@NgModule({
  declarations: [
    AppComponent,
    PreviewComponent,
    DatePipeComponent,
    LoginComponent,
    MenueComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
