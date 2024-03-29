import { NgModule } from '@angular/core';
import { SharedModule } from 'shared/lib';

import { NotFoundPage } from './not-found.page';

@NgModule({
  declarations: [NotFoundPage],
  imports: [SharedModule],
  exports: [NotFoundPage],
})
export class NotFoundPageModule {}
