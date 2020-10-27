import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-settings-page-editor',
  templateUrl: './settings-page-editor.component.html',
  styleUrls: ['./settings-page-editor.component.css']
})
export class SettingsPageEditorComponent implements OnInit {

  htmlContent = '';

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      ['bold']
      ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

  onUserType($event): void{
    console.log(this.htmlContent, '    ', $event);
  }
}
