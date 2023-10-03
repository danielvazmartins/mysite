import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Title } from "@angular/platform-browser";

import { ResumeService } from "../shared/services/resume.service";
import { ResumesService } from '../shared/services/resumes.service';

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
        private resumesService: ResumesService,
        private route: ActivatedRoute,
        private titleService: Title
    ) {}

    ngOnInit() {
        const hostname = window.location.hostname

        // Pega os parâmetro da URL
        const resumeId = this.route.snapshot.queryParams.resumeId || this.resumeService.getResumeId(hostname)
        this.styleName = this.route.snapshot.queryParams.style || this.resumeService.getStyleName(hostname)
        console.log({
            hostname,
            resumeId, 
            styleName: this.styleName
        })

        // Carrega os dados do currículo (utilizando mock local, sem banco de dados)
        //this.resume = this.resumeService.getResume(resumeId)

        // Altera o title do navegador
        //this.titleService.setTitle(this.resume.name)

        this.resumesService.getByHost('danielvazmartins.com.br')
        .subscribe(response => {
            console.log(response)
            this.resume = response['resume']
        })
    }
}