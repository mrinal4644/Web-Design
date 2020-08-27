import { Routes } from '@angular/router';

import { CrewServiceComponent } from './crew-service/crew-service.component';

export const appRoutes: Routes = [
  { path: 'crew-service/:id', component: CrewServiceComponent },
];