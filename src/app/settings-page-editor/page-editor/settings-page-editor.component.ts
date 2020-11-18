import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PrintTemplate } from '../../models/print-template';
import { Console } from 'console';
import { AngularEditorToolbarComponent } from '../text-editor/angular-editor-toolbar.component';
import { AngularEditorConfig } from '../text-editor/config';
import { PrintTemplateService } from '../../services/print-template.service';
@Component({
  selector: 'app-settings-page-editor',
  templateUrl: './settings-page-editor.component.html',
  styleUrls: ['./settings-page-editor.component.css']
})
export class SettingsPageEditorComponent implements OnInit {
  public printTemplate: PrintTemplate = new PrintTemplate();
  htmlContent = '';
  angularEditorComponent:AngularEditorToolbarComponent;
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '19rem',
    minHeight: '5rem',
    width:'14rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    sanitize: false,
    // toolbarPosition: 'top',
    outline: true,
    defaultFontName: 'Comic Sans MS',
    defaultFontSize: '5',
    toolbarHiddenButtons: [
      ['insertVideo','insertHorizontalRule','heading'],
      ['removeFormat','undo', 'redo','superscript', 'subscript','strikeThrough'],
      ['indent', 'outdent','insertUnorderedList', 'insertOrderedList'],
      ['backgroundColor','textColor', 'justifyFull','toggleEditorMode']
    ],
    customClasses: [
      {
        name: 'CreatedTime',
        class: 'CreatedTime',
      },
      {
        name: 'TicketNumber',
        class: 'TicketNumber'
      },
      {
        name: 'CategoryName',
        class: 'CategoryName',
        tag: 'h1',
      },
    ],
    fonts:[
      {class: 'arial', name: 'Arial'},
      {class: 'calibri', name: 'Calibri'},
      {class: 'comic-sans-ms', name: 'Comic Sans MS'},
      {class: 'impact', name: 'Impact'},
      {class: 'tahoma', name: 'Tahoma'},
      {class: 'times-new-roman', name: 'Times New Roman'}
    ]
  };

  constructor(public printTemplateService: PrintTemplateService) { }

  ngOnInit(): void {


  };
 public onClick(){
    console.log("onClick");
  }


  onUserType($event): void {
    console.log(this.htmlContent, '    ', $event);
  }

  public createTemplate(

  ): void {
    this.printTemplate.printText = this.htmlContent;
    console.log( this.printTemplate.printText )
    this.printTemplateService
      .sendTemplate(this.printTemplate)
      .subscribe();
  };
}

