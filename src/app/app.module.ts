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
import {WeatherComponent} from "./weather/weather.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {CreateComponent} from "./create/create.component";
import {AddComponent} from "./add/add.component";
const  appRoutes: Routes=[
  {path:"",component:HomeComponent},
  {path:"regis",component:RegisterComponent},
  {path:"wea",component:WeatherComponent},

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
    WeatherComponent,
    CreateComponent,AddComponent,
  ],
  imports: [
    BrowserModule,FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
