import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { RamschemaComponent } from './ramschema/ramschema.component';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
    {path: "ramschema", component: RamschemaComponent},
    {path: "", redirectTo: "/ramschema", pathMatch: "full"},
    {path: "404", component: ErrorComponent},
    {path: "**", component: ErrorComponent},
]
