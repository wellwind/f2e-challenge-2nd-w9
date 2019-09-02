import { AfterViewInit, Directive, ElementRef } from '@angular/core';
import { NgControl } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { ExternalResourceService } from './external-resource.service';
import { SimpleMDECSS, SimpleMDEJS } from './external-resources';
import { MarkdownCommand } from './markdown-command.enum';

declare class SimpleMDE {
  value: any;
  codemirror: any;
  constructor(config: any);
}

@Directive({
  selector: '[appMarkdownEditor]',
  exportAs: 'markdownEditor'
})
export class MarkdownEditorDirective implements AfterViewInit {
  editor: SimpleMDE;

  constructor(private elementRef: ElementRef, private control: NgControl, private externalResourceService: ExternalResourceService) {}

  ngAfterViewInit() {
    forkJoin(
      this.externalResourceService.loadExternalStyle(SimpleMDECSS),
      this.externalResourceService.loadExternalScript(SimpleMDEJS)
    ).subscribe(_ => {
      this.editor = new SimpleMDE({
        element: this.elementRef.nativeElement,
        toolbar: false,
        status: false,
        spellChecker: false
      });

      this.control.valueChanges.subscribe(data => {
        this.editor.value(data);
      });

      this.editor.codemirror.on('change', () => {
        this.control.control.setValue(this.editor.value(), { emitEvent: false });
      });
    });
  }

  sendCommand(command: MarkdownCommand) {
    SimpleMDE[command](this.editor);
  }
}
