import { TerminalCategoryBindModalComponent } from './settings-page-terminal/Modals/terminal-category-bind-modal/terminal-category-bind-modal.component';
import { TicketCategoryService } from './services/ticket-category.service';
import { SignageService } from './services/signage.service';
import { TerminalService } from './services/terminal.service';
import { SignageSettingsComponent } from './settings-page-signage/signage-settings/signage-settings.component';
import { SignalRService } from './services/signal-r.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TicketCategoryListingComponent } from './settings-page-category/ticket-category-listing/ticket-category-listing.component';
import { TicketCategoryFormComponent } from './settings-page-category/ticket-category-form/ticket-category-form.component';
import { QueueSettingsComponent } from './queue-settings/queue-settings.component';
import { TerminalSettingsComponent } from './settings-page-terminal/terminal-settings/terminal-settings.component';
import { TerminalListingComponent } from './settings-page-terminal/terminal-listing/terminal-listing.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TerminalSettingsBindComponent } from './settings-page-terminal/terminal-settings-bind/terminal-settings-bind.component';
import { SignageListingComponent } from './settings-page-signage/signage-listing/signage-listing.component';
import { TicketCategoryModalComponent } from './settings-page-category/ticket-category-modal/ticket-category-modal.component';
import { SettingsPageEditorComponent } from './settings-page-editor/settings-page-editor.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { SignageEditModalComponent } from './settings-page-signage/signage-edit-modal/signage-edit-modal.component';
import { TerminalEditModalComponent } from './settings-page-terminal/Modals/terminal-edit-modal/terminal-edit-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    TicketCategoryListingComponent,
    TicketCategoryFormComponent,
    QueueSettingsComponent,
    TerminalSettingsComponent,
    TerminalListingComponent,
    TerminalSettingsBindComponent,
    SignageListingComponent,
    SignageSettingsComponent,
    TicketCategoryModalComponent,
    SettingsPageEditorComponent,
    SignageEditModalComponent,
    TerminalEditModalComponent,
    TerminalCategoryBindModalComponent,
    ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    AngularEditorModule
  ],
  providers: [SignalRService, NgbModule, FormBuilder, TerminalService, SignageService, TicketCategoryService],
  bootstrap: [AppComponent],
})
export class AppModule {}
