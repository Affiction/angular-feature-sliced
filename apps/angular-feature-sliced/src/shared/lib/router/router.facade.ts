import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as RouterSelectors from './router.selectors';

@Injectable({ providedIn: 'root' })
export class RouterFacade {
  queryParams$ = this.store.select(RouterSelectors.selectQueryParams);
  routeParams$ = this.store.select(RouterSelectors.selectRouteParams);
  selectRouteUrl$ = this.store.select(RouterSelectors.selectUrl);
  currentRoute$ = this.store.select(RouterSelectors.selectCurrentRoute);

  constructor(private store: Store) {}
}
