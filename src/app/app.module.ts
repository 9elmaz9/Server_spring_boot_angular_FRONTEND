import { HttpClientModule } from "@angular/common/http";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { NotificationModule } from "./notification.module";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
      AppComponent
    ],
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      HttpClientModule,
      FormsModule,
      NotificationModule,
      CommonModule
    ],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],  // Для поддержки web components
    bootstrap: [AppComponent]
  })
  export class AppModule { }