import { NgModule } from '@angular/core';
import { IsEmptyPipe } from 'src/pipes/is-empty.pipe';




@NgModule({
  declarations: [IsEmptyPipe],
  exports: [IsEmptyPipe]
})
export class SharedModule  { }
