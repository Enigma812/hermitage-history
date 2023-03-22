import { CommonModule, registerLocaleData } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import localeRuExtra from '@angular/common/locales/extra/ru';
import localeRu from '@angular/common/locales/ru';
import { NgModule } from '@angular/core';
import { TranslateCompiler, TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { translateCompilerFactory } from 'src/app/translate-compiler-factory';
import { TranslateLoaderFactory } from 'src/app/translate-loader-factory';

import { InteriorsPageComponent } from './interiors-page/interiors.component';
import { InteriorsRoutingModule } from './interiors-routing.module';

@NgModule({
  declarations: [
    InteriorsPageComponent
  ],
  imports: [
    CommonModule,
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

    InteriorsRoutingModule
  ]
})
export class InteriorsModule {
  constructor(
    private readonly _translate: TranslateService
  ) {
    registerLocaleData(localeRu, 'ru-RU', localeRuExtra);
    this._translate.addLangs([ 'ru' ]);
    this._translate.setDefaultLang('ru');
    this._translate.use('ru');
  }
}
