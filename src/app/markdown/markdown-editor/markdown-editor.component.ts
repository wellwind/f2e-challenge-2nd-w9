import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-markdown-editor',
  templateUrl: './markdown-editor.component.html',
  styleUrls: ['./markdown-editor.component.scss']
})
export class MarkdownEditorComponent implements OnInit {
  @Input() content: string;
  @Output() contentChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

}
