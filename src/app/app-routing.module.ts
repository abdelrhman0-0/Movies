import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TvShowsComponent } from './TvShows/TvShows.component';
import { AuthGuard } from './auth.guard';
import { PeopleComponent } from './people/people.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { MoviesComponent } from './movies/movies.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"tv", component:TvShowsComponent},
  {path:"people", component:PeopleComponent},
  {path:"movies", component:MoviesComponent},
  {path:"moviedetails/:id/:alt", component:MoviedetailsComponent},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"**", component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
