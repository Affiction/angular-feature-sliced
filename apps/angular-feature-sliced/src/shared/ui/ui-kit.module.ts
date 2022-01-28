import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  exports: [
    MatCheckboxModule,
    MatButtonToggleModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatButtonModule,
  ],
})
export class UiKitModule {}
