import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MarkdownEditorComponent } from './markdown-editor/markdown-editor.component';



@NgModule({
  declarations: [MarkdownEditorComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    MarkdownEditorComponent
  ]
})
export class MarkdownModule { }
