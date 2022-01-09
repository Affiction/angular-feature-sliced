import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NxModule } from '@nrwl/angular';

import { environment } from 'environments/environment';
import { metaReducers, ROOT_REDUCERS, rootEffects } from './store';

@NgModule({
  imports: [
    NxModule.forRoot(), // Provide DataPersistence service: https://nx.dev/l/a/guides/misc-data-persistence#optimistic-updates
    StoreModule.forRoot(ROOT_REDUCERS, {
      metaReducers,
      runtimeChecks: {
        strictActionImmutability: true,
        strictStateImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true,
        strictActionWithinNgZone: true,
        strictActionTypeUniqueness: true,
      },
    }),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot(rootEffects),
    !environment.production
      ? StoreDevtoolsModule.instrument({
          name: 'Angular Feature Sliced',
        })
      : [],
  ],
})
export class AppStoreModule {}
