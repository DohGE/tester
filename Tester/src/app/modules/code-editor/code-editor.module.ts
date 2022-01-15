import { NgModule } from "@angular/core";
import { SharedModule } from "../../shared/shared.module";
import { CodeEditorRoutingModule } from "./code-editor-routing.module";
import { CodeEditorMainContainerComponent } from "./container/code-editor-main-container/code-editor-main-container.component";
import { CodeEditorMainPresenterComponent } from "./presenter/code-editor-main-presenter/code-editor-main-presenter.component";
import { CodemirrorModule } from "@ctrl/ngx-codemirror";

@NgModule({
    declarations: [
        CodeEditorMainContainerComponent,
        CodeEditorMainPresenterComponent,
    ],
    imports: [CodeEditorRoutingModule, SharedModule, CodemirrorModule],
})
export class CodeEditorModule {}
