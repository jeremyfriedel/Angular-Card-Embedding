import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { AppComponent } from './app.component';
import { CardHolderComponentComponent } from './card-holder-component/card-holder-component.component';




@NgModule({
  declarations: [	
    AppComponent, CardHolderComponentComponent   ],
  imports: [
    BrowserModule,
    MatSliderModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



