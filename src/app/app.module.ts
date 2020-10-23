import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import {
  BrowserAnimationsModule,
  NoopAnimationsModule
} from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    NoopAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
