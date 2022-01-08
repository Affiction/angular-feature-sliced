import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const EXPORT_MODULES = [
  BrowserAnimationsModule,
  CommonModule,
  HttpClientModule,
  FormsModule,
  ReactiveFormsModule,
];

@NgModule({
  imports: EXPORT_MODULES,
  exports: EXPORT_MODULES,
})
export class SharedModule {}
