import { MasterModule } from './master/master.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MasterComponent } from './master/master.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ProductsComponent } from './products/products.component';
import { NewsComponent } from './news/news.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './news/details/details.component';
import { LatestnewsComponent } from './news/latestnews/latestnews.component';
@NgModule({
  declarations: [

    AppComponent,
    HomeComponent,
    AboutComponent,
    MasterComponent,
    HeaderComponent,
    FooterComponent,
    ContactusComponent,
    ProductsComponent,
    NewsComponent,
    DetailsComponent,
    LatestnewsComponent
  ],
  imports: [
    MasterModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
