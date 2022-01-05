import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HeaderComponent} from "./header/header.component";
import {AppComponent} from "./app.component";
import {MainmenuComponent} from "./mainmenu/mainmenu.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {HomeComponent} from "./home/home.component";
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {HomeappComponent} from "./homeapp/homeapp.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {HearderwebComponent} from "./hearderweb/hearderweb.component";
import {BodyComponent} from "./body/body.component";
import {WebComponent} from "./web/web.component";
import {ShopComponent} from "./shop/shop.component";
import {FooderComponent} from "./fooder/fooder.component";
import {SectionComponent} from "./section/section.component";
const  appRoutes: Routes=[
  {path:"",component:BodyComponent},
  {path:"shop",component:ShopComponent},
  {path:"blog",component:WebComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainmenuComponent,
    SidebarComponent,
    HomeComponent,
    HomeappComponent,
    LoginComponent,RegisterComponent,
    HearderwebComponent,
    BodyComponent,
    WebComponent,
    ShopComponent,
    FooderComponent,SectionComponent,
  ],
  imports: [
    BrowserModule,FormsModule,
    RouterModule.forRoot(appRoutes),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
