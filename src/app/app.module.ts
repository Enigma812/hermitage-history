import { registerLocaleData } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import localeRuExtra from '@angular/common/locales/extra/ru';
import localeRu from '@angular/common/locales/ru';
import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateCompiler, TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { translateCompilerFactory } from './translate-compiler-factory';
import { TranslateLoaderFactory } from './translate-loader-factory';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    NgbDropdownModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: TranslateLoaderFactory,
        deps: [
          HttpClient
        ]
      },
      compiler: {
        provide: TranslateCompiler,
        useFactory: translateCompilerFactory
      }
    }),

    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor(
    private readonly _translate: TranslateService
  ) {
    registerLocaleData(localeRu, 'ru-RU', localeRuExtra);
    this._translate.addLangs([ 'ru' ]);
    this._translate.setDefaultLang('ru');
    this._translate.use('ru');
  }
}
