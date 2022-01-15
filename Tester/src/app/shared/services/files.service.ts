import { Injectable } from "@angular/core";
import { NotificationService } from "./notification.service";
import * as XLSX from "xlsx";
import * as FileSaver from "file-saver";
import * as JSZip from "jszip";
const EXCEL_TYPE =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
const EXCEL_EXTENSION = ".xlsx";

@Injectable({ providedIn: "root" })
export class FilesService {
    constructor(private notificationService: NotificationService) {}

    generateZip(
        codeEditorHTML: string,
        codeEditorCSS: string,
        codeEditorJS: string
    ): void {
        const zip = new JSZip();
        zip.file(
            "Zadanie.html",
            `${codeEditorHTML.replace(
                "</head>",
                `<style>${codeEditorCSS}</style>
    <script>${codeEditorJS}</script>
    </head>`
            )}`
        );
        zip.generateAsync({ type: "blob" }).then(function (content) {
            FileSaver.saveAs(content, "Zadanie" + ".zip");
        });
        this.notificationService.showInfo(
            "Pomyślnie zapisano jako zip!",
            "Sukces"
        );
    }

    downloadJsonToExcel(value: any[]): void {
        const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(value);
        const workbook: XLSX.WorkBook = {
            Sheets: { data: worksheet },
            SheetNames: ["data"],
        };
        const excelBuffer: any = XLSX.write(workbook, {
            bookType: "xlsx",
            type: "array",
        });
        const data: Blob = new Blob([excelBuffer], {
            type: EXCEL_TYPE,
        });
        FileSaver.saveAs(
            data,
            "Uczniowie" + "_export_" + new Date().getTime() + EXCEL_EXTENSION
        );
        this.notificationService.showSuccess(
            "Pomyślnie utworzono plik",
            "Sukces"
        );
    }
}
