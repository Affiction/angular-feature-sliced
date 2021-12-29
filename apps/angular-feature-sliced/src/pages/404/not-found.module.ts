import { NgModule } from '@angular/core';
import { NotFoundPage } from './not-found.page';

import { SharedModule } from 'shared/modules';

const EXPORT_COMPONENTS = [NotFoundPage];

@NgModule({
  declarations: EXPORT_COMPONENTS,
  imports: [SharedModule],
  exports: EXPORT_COMPONENTS,
  providers: [],
})
export class NotFoundPageModule {}
