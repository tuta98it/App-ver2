import { NgModule } from '@angular/core';
import { IsEmptyPipe } from 'src/app/shared/pipe/is-empty.pipe';




@NgModule({
  declarations: [IsEmptyPipe],
  exports: [IsEmptyPipe]
})
export class SharedModule  { }
