import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as routerSelectors from './router.selectors';

@Injectable({ providedIn: 'root' })
export class RouterFacade {
  queryParams$ = this.store.select(routerSelectors.selectQueryParams);
  routeParams$ = this.store.select(routerSelectors.selectRouteParams);
  selectRouteUrl$ = this.store.select(routerSelectors.selectUrl);
  currentRoute$ = this.store.select(routerSelectors.selectCurrentRoute);

  constructor(private store: Store) {}
}
