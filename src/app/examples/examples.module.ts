import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SignupComponent } from './signup/signup.component';
import { StatisticsComponent } from './statistics/statistics.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
    ],
    declarations: [
        SignupComponent,
        StatisticsComponent,
    ]
})
export class ExamplesModule { }
