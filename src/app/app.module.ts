import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { WarningAlertComponent } from './warning-alert-component/warning-alert-component.component';
import { RecipesComponent } from './recipes/recipes.component';
import { HeaderComponent } from './header/header.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
@NgModule({
  declarations: [
    AppComponent,   
    WarningAlertComponent, 
    RecipesComponent, 
    HeaderComponent,
    ServerComponent,
    ServersComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
