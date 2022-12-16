import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PhasmoFooterComponent } from './phasmo-footer/phasmo-footer.component';
import { PhasmoHeaderComponent } from './phasmo-header/phasmo-header.component';
import { PhasmoMainContentComponent } from './phasmo-main-content/phasmo-main-content.component';
import { PhasmoAboutComponent } from './phasmo-about/phasmo-about.component';
import { PhasmoNavbarComponent } from './phasmo-navbar/phasmo-navbar.component';
import { RouterModule } from '@angular/router';
import { PhasmoHomeComponent } from './phasmo-home/phasmo-home.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    PhasmoFooterComponent,
    PhasmoHeaderComponent,
    PhasmoMainContentComponent,
    PhasmoAboutComponent,
    PhasmoNavbarComponent,
    PhasmoHomeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'home', component: PhasmoHomeComponent },
      { path: 'about-us', component: PhasmoAboutComponent },
      { path: '', redirectTo: '', pathMatch: 'full' },
      { path: '**', component: AppComponent },
      // { enableTracing: true } // <-- debugging purposes only
    ]),
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
