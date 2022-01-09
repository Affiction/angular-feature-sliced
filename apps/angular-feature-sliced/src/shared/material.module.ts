import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  exports: [
    MatCheckboxModule,
    MatButtonToggleModule,
    MatProgressSpinnerModule,
    MatCardModule,
  ],
})
export class UiKitModule {}
