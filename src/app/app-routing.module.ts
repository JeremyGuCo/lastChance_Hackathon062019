import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FirstPlanetComponent } from './first-planet/first-planet.component';
import { SpaceRacingComponent } from './space-racing/space-racing.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'planet1', component: FirstPlanetComponent},
  { path: 'racing', component: SpaceRacingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
