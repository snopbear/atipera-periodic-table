import { NgClass, NgFor } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent, SidebarComponent } from '../index';


const routerModules = [RouterOutlet];
const commonModules = [NgFor, NgClass];
const components = [SidebarComponent, HeaderComponent];

const appComponentsImports = [
  ...routerModules,
  ...commonModules,
  ...components,
];
export default appComponentsImports;
