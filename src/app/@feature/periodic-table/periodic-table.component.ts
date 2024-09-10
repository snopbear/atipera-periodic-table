import { Component, inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ELEMENT_DATA } from '../../@constants/periodic/periodic-element-data';
import periodicTableComponentImports from './periodic-table.component.imports';
import { IPeriodicElement } from '@models/index';
import { EditElementDialogComponent } from '../edit-element-dialog/edit-element-dialog.component';


@Component({
  selector: 'app-periodic-table',
  templateUrl: './periodic-table.component.html',
  styleUrls: ['./periodic-table.component.scss'],
  standalone: true,
  imports: [periodicTableComponentImports],
})
export class PeriodicTableComponent implements OnInit {

  dialog = inject(MatDialog);


  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'edit'];
  
  dataSource = [...ELEMENT_DATA];
  filteredData = [...ELEMENT_DATA];
  filterValue = '';
  filterTimeout: number | undefined;

  constructor() {}
  ngOnInit(): void {
    this.simulateDataLoad();
  }

  simulateDataLoad() {
    setTimeout(() => {
      this.dataSource = [...ELEMENT_DATA];
      this.filteredData = [...this.dataSource];
    }, 1000); // Simulate data loading
  }

  applyFilter(event: Event) {
    const value = this.filterValue.toLowerCase();

    // Clear previous timeout if it exists
    if (this.filterTimeout) {
      clearTimeout(this.filterTimeout);
    }

    // Set a new timeout to apply the filter after 2 seconds
    this.filterTimeout = window.setTimeout(() => {
      this.filteredData = this.dataSource.filter((element) =>
        Object.values(element).some((val:any) =>
          val.toString().toLowerCase().includes(value)
        )
      );
    }, 2000); // Delay filter by 1 seconds
  }

  openEditDialog(element: IPeriodicElement) {
    const dialogRef = this.dialog.open(EditElementDialogComponent, {
      width: '230px',
      data: { ...element },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const index = this.dataSource.findIndex(
          (el) => el.position === result.position
        );
        if (index !== -1) {
          this.dataSource[index] = result;
          this.filteredData = [...this.dataSource]; // Non-mutative update
        }
      }
    });
  }
}
