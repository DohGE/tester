import {
    Component,
    EventEmitter,
    HostListener,
    Input,
    Output,
} from "@angular/core";

@Component({
    selector: "app-example",
    templateUrl: "./example.html",
    styleUrls: ["./example.scss"],
})
export class ExampleComponent {
    @Output() back = new EventEmitter<void>();
    @Input() exampleSrc: string;
    @Input() exampleAlt: string;

    @HostListener("click")
    onBack(): void {
        this.back.emit();
    }
}
