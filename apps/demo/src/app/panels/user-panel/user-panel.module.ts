import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { ModuleWithProviders } from '@angular/core';
import { UserPanelComponent } from '../../panels/user-panel/user-panel.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  imports: [
    SharedModule.forRoot(),
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  entryComponents: [UserPanelComponent],
  exports: [UserPanelComponent],
  declarations: [UserPanelComponent]
})
export class UserPanelModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: UserPanelModule,
      providers: []
    };
  }
}
