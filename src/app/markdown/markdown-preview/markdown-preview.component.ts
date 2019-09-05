import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MarkdownParserService } from '../markdown-parser.service';

@Component({
  selector: 'app-markdown-preview',
  templateUrl: './markdown-preview.component.html',
  styleUrls: ['./markdown-preview.component.scss']
})
export class MarkdownPreviewComponent implements OnInit, OnChanges {
  @Input() content: string;
  html = '';
  constructor(private markdownParserService: MarkdownParserService) {}

  ngOnInit() {}

  ngOnChanges() {
    this.html = this.markdownParserService.render(this.content);
  }
}
