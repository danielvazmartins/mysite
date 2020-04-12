import { Component, OnInit } from "@angular/core";

import { ResumeService } from "../shared/services/resume.service";
import { ActivatedRoute } from "@angular/router";
import { Title } from "@angular/platform-browser";

@Component({
    selector: 'app-resume',
    templateUrl: './resume.component.html',
    styleUrls: [
        './resume.component.scss',
        './styles/brown-style.scss',
        './styles/pink-style.scss',
        './styles/gray-style.scss'
    ]
})
export class ResumeComponent implements OnInit {
    resume: any
    styleName: string

    constructor(
        private resumeService: ResumeService,
        private route: ActivatedRoute,
        private titleService: Title
    ) {}

    ngOnInit() {
        const hostname = window.location.hostname

        // Pega os parâmetro da URL
        const resumeId = this.route.snapshot.queryParams.resumeId || this.resumeService.getResumeId(hostname)
        this.styleName = this.route.snapshot.queryParams.style || this.resumeService.getStyleName(hostname)

        // Carrega os dados do currículo
        this.resume = this.resumeService.getResume(resumeId)
        // Altera o title do navegador
        this.titleService.setTitle(this.resume.name)

        //this.resumeService.getAllResumes()
    }
}