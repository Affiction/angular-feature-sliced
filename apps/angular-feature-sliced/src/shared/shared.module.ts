import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  exports: [CommonModule, HttpClientModule, FormsModule, ReactiveFormsModule],
})
export class SharedModule {}
