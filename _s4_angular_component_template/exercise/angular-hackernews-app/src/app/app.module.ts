import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import {FormsModule} from "@angular/forms";
import { LikeComponent } from './like/like.component';
import {RouterModule} from "@angular/router";
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    LikeComponent,
    NavbarComponent,
    FooterComponent,
    ContentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([{path: 'add',component:ArticleComponent},
      {path: 'list',component:LikeComponent}])
  ],
  providers: [],
  bootstrap: [AppComponent,LikeComponent,ArticleComponent]
})
export class AppModule { }
