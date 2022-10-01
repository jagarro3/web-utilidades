import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormulaOneRoutes } from './formula-one.routing';
import { ChartistModule } from 'ng-chartist';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormulaOneComponent } from './formula-one.component';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        NgbModule,
        ChartsModule,
        ChartistModule,
        RouterModule.forChild(FormulaOneRoutes),
        NgxDatatableModule
    ],
    declarations: [
        FormulaOneComponent
    ]
})
export class FormulaOneModule { }
