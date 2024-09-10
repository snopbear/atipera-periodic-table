import { Component, Inject } from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

import { IPeriodicElement } from '@models/index';
import editElementDialogImports from './edit-element-dialog.component.imports';

@Component({
  selector: 'app-edit-element-dialog',
  templateUrl: './edit-element-dialog.component.html',
  styleUrls: ['./edit-element-dialog.component.scss'],
  standalone: true,
  imports: [editElementDialogImports],
})
export class EditElementDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<EditElementDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IPeriodicElement
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }
}
