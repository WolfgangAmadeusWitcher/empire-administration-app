import { SettingsPageEditorComponent } from './settings-page-editor/settings-page-editor.component';
import { TicketCategoryFormComponent } from './settings-page-category/ticket-category-form/ticket-category-form.component';
import { SignageSettingsComponent } from './settings-page-signage/signage-settings/signage-settings.component';
import { TerminalSettingsComponent } from './settings-page-terminal/terminal-settings/terminal-settings.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'category-config', component: TicketCategoryFormComponent},
  { path: 'terminal-settings', component: TerminalSettingsComponent},
  { path: 'display-settings', component: SignageSettingsComponent},
  { path: 'ticket-editor', component: SettingsPageEditorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
