import { Component, OnInit } from '@angular/core';
import appComponentsImports from './app.component.imports';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [appComponentsImports],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Atipera Periodic Table';
}







