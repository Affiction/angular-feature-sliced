import { NgModule } from '@angular/core';
import { SharedModule, UiKitModule } from 'shared';

import { ToggleTaskComponent } from './components';

@NgModule({
  declarations: [ToggleTaskComponent],
  imports: [SharedModule, UiKitModule],
  exports: [ToggleTaskComponent],
  providers: [],
})
export class ToggleTaskModule {}
