import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";


const materialsModules = [
  MatFormFieldModule,
  MatInputModule,
  FormsModule,
  MatButtonModule,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
];

const formsModules = [
  FormsModule
];
const editElementDialogImports = [...materialsModules, ...formsModules];
export default editElementDialogImports;
