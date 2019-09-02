import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MarkdownCommand } from '../markdown-command.enum';
import { MarkdownEditorDirective } from '../markdown-editor.directive';

@Component({
  selector: 'app-markdown-editor',
  templateUrl: './markdown-editor.component.html',
  styleUrls: ['./markdown-editor.component.scss']
})
export class MarkdownEditorComponent implements OnInit {

  MarkdownCommand = MarkdownCommand;

  @Input() content: string;
  @Output() contentChange = new EventEmitter<string>();
  @ViewChild('editor', { static: true}) editor: MarkdownEditorDirective;

  constructor() { }

  ngOnInit() {
  }

  sendCommand(command: MarkdownCommand) {
    this.editor.sendCommand(command);
  }

}
