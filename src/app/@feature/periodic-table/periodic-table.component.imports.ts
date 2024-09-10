import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatTableModule } from "@angular/material/table";

const materialsModules = [MatTableModule, MatInputModule, MatButtonModule];
const formsModules = [FormsModule];

const periodicTableComponentImports = [...materialsModules, ...formsModules];

export default periodicTableComponentImports;
