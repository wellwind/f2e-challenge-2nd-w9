import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MarkdownEditorDirective } from './markdown-editor.directive';
import { MarkdownEditorComponent } from './markdown-editor/markdown-editor.component';



@NgModule({
  declarations: [MarkdownEditorComponent, MarkdownEditorDirective],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    MarkdownEditorComponent
  ]
})
export class MarkdownModule { }
