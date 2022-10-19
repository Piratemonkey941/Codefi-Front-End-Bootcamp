import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ServersService } from "./servers-n/servers.service";

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditServerComponent } from './servers-n/edit-server/edit-server.component';
import { ServerComponent } from './servers-n/server/server.component';
import { ServersComponent } from './servers-n/servers.component';
import { UserComponent } from './users-n/user/user.component';
import { UsersNComponent } from './users-n/users-n.component';
import { HomeComponent } from "./home/home.component";
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGuard } from './servers-n/edit-server/can-deactivate-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolver } from './servers-n/server/server-resolver.service';

//needs to be last

@NgModule({
  declarations: [


    AppComponent,
    HomeComponent,
    UsersNComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    PageNotFoundComponent,
    ErrorPageComponent,

    // HttpClientModule,

      ],
      imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,

        // ReactiveFormsModule,


      ],

      providers: [
        ServersService,
        AuthService,
        AuthGuard,
        CanDeactivateGuard,
        ServerResolver,
      ],
      bootstrap: [AppComponent]
    })

    export class AppModule { }

















