import { Injectable } from '@angular/core';
import * as MarkdownIt from 'markdown-it';


@Injectable({
  providedIn: 'root'
})
export class MarkdownParserService {

  constructor() { }

  render(content: string) {
    return new MarkdownIt().render(content);
  }
}
