import { NgModule, ModuleWithProviders, OpaqueToken } from '@angular/core';
import { HttpModule } from '@angular/http';

import { TypedComponent } from './src/typed.component';
import { TYPED_SETTINGS } from './src/config';

@NgModule({
  imports: [
    HttpModule
  ],
  declarations: [
    TypedComponent
  ],
  exports: [
    TypedComponent
  ]
})
export class TypedModule {
  static forRoot(config: any): ModuleWithProviders {
    return {
      ngModule: BotDetectCaptchaModule,
      providers: [
        {
          provide: TYPED_SETTINGS,
          useValue: config
        }
      ]
    };
  }
}
