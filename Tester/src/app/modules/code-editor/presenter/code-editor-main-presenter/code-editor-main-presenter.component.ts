import {
  AfterViewChecked,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { CodemirrorComponent } from '@ctrl/ngx-codemirror';
import { Exercise } from 'src/app/shared/models/exercise.model';

@Component({
  selector: 'app-code-editor-main-presenter',
  templateUrl: './code-editor-main-presenter.component.html',
  styleUrls: ['./code-editor-main-presenter.component.scss'],
})
export class CodeEditorMainPresenterComponent implements AfterViewChecked {
  @ViewChild('codeEditorHTML') codeEditorHTML: CodemirrorComponent;
  @ViewChild('codeEditorCSS') codeEditorCSS: CodemirrorComponent;
  @ViewChild('codeEditorJS') codeEditorJS: CodemirrorComponent;
  @ViewChild('iframe') iFrame: ElementRef;
  @Output() generate = new EventEmitter<[string, string, string]>();
  @Input() activeExercise: Exercise;

  changeSizeVariable = 0;
  hide = true;
  showExercise = false;
  doc: any;
  htmlString = `<!DOCTYPE HTML>
  <html>
  <head>
    <meta charset="UTF-8">
    <title>Document</title>
  </head>
  <body>
  </body>
  </html>
`;
  options = {
    theme: 'dracula',
    extraKeys: {
      'Ctrl-F': 'findPersistent',
      'Ctrl-Space': 'autocomplete',
    },
    gutters: [
      'CodeMirror-linenumbers',
      'CodeMirror-foldgutter',
      'CodeMirror-matchingtag',
      'CodeMirror-showTrailingSpace',
      'CodeMirror-lint-markers',
      'CodeMirror-css-lint',
    ],
    lineNumbers: true,
    indentWithTabs: true,
    smartIndent: true,
    lineWrapping: false,
    autoCloseBrackets: true,
    matchBrackets: true,
    matchClosing: true,
    closeBrackets: true,
    lint: true,
    autoCloseTags: true,
    showTrailingSpace: true,
    runMode: true,
    foldGutter: true,
    braceFold: true,
    markDown: true,
    sublime: true,
    markText: true,
  };

  html = { mode: { name: 'htmlmixed' }, ...this.options };
  css = { mode: { name: 'css' }, ...this.options };
  js = {
    mode: { name: 'javascript', globalVars: true },
    ...this.options,
  };

  ngAfterViewChecked(): void {
    this.doc =
      this.iFrame.nativeElement.contentDocument ||
      this.iFrame.nativeElement.contentWindow;
  }

  generateZip(): void {
    this.generate.emit([
      this.codeEditorHTML.codeMirror.getValue(),
      this.codeEditorCSS.codeMirror.getValue(),
      this.codeEditorJS.codeMirror.getValue(),
    ]);
  }

  changeSize(event: any): void {
    if (event.target.offsetParent.classList.contains('minimalize')) {
      event.target.offsetParent.classList.remove('minimalize');
      event.target.classList.remove('minimalize__background');
      this.changeSizeVariable--;
    } else if (this.changeSizeVariable < 2) {
      event.target.offsetParent.classList.add('minimalize');
      event.target.classList.add('minimalize__background');
      this.changeSizeVariable++;
    }
  }

  runCode(): void {
    this.doc.open();
    this.doc.write(
      `${this.codeEditorHTML.codeMirror.getValue().replace(
        '</head>',
        `<style>${this.codeEditorCSS.codeMirror.getValue()}</style>
      <script>${this.codeEditorJS.codeMirror.getValue()}</script>
    </head>`
      )}`
    );
    this.doc.close();
  }

  onSaveExerciseResult(): void {}
}
