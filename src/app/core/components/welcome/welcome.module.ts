import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './components/welcome.component';

@NgModule({
  declarations: [WelcomeComponent],
  imports: [CommonModule],
  exports: [WelcomeComponent],
})
export class WelcomeModule {}
