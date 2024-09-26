import { importProvidersFrom, Injectable, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import {InMemoryDbService, RequestInfo, InMemoryWebApiModule} from 'angular-in-memory-web-api'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpBackend, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
class InMemDbService extends InMemoryDbService {
  override createDb(reqInfo?: RequestInfo): {} | Observable<{}> | Promise<{}> {
    return {}
  }
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withInterceptorsFromDi()),
    importProvidersFrom(InMemoryWebApiModule.forRoot(InMemDbService))
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    backend: HttpBackend,
  ) {
    // should be HttpClientBackendService
    console.log(backend.constructor.name);
  }
}
