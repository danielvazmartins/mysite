import { Component, OnInit } from "@angular/core";

import { ResumeService } from "../shared/services/resume.service";

@Component({
    selector: 'app-resume',
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
    resume: any

    constructor(
        private resumeService: ResumeService
    ) {}

    ngOnInit() {
        this.resume = this.resumeService.getResume('daniel')
    }
}