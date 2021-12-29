import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@NgModule({
  exports: [MatCheckboxModule, MatButtonToggleModule],
})
export class MaterialModule {}
