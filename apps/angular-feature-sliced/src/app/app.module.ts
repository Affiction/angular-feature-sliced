import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from 'app/app.component';
import { AppStoreModule } from 'app/core';
import { AppRoutingModule } from 'pages';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppStoreModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
