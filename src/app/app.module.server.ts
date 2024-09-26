import { NgModule } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppModule,
  ],
  providers: [
    provideServerRendering()
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
