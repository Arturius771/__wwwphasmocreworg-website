import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhasmoFooterComponent } from './phasmo-footer/phasmo-footer.component';
import { PhasmoHeaderComponent } from './phasmo-header/phasmo-header.component';

@NgModule({
  declarations: [AppComponent, PhasmoFooterComponent, PhasmoHeaderComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
