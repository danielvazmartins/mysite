import { NgModule } from "@angular/core";
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { PanelComponent } from './panel.component';
import { PanelRoutingModule } from './panel-routing.module';
import { HeaderModule } from '../shared/components/header/header.module';
import { FooterModule } from '../shared/components/footer/footer.module';
import { ProfileModule } from './profile/profile.module';
import { AuthInterceptor } from '../shared/interceptors/auth.interceptor';
import { ResumesModule } from './resumes/resumes.module';
import { ResumeFormModule } from './resume-form/resume-form.module';

@NgModule({
    declarations: [
        PanelComponent
    ],
    imports: [
        PanelRoutingModule,
        HeaderModule,
        FooterModule,
        ProfileModule,
        ResumesModule,
        ResumeFormModule
    ],
    providers: [
        // Intercepta as conexões para adicionar o token no cabeçalho
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
    ]
})
export class PanelModule {}