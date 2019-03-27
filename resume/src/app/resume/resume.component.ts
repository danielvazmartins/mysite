import { Component, OnInit } from "@angular/core";

import { ResumeService } from "../shared/services/resume.service";
import { ActivatedRoute, ActivatedRouteSnapshot } from "@angular/router";
import { Title } from "@angular/platform-browser";

@Component({
    selector: 'app-resume',
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
    resume: any
    resumeName: string

    constructor(
        private resumeService: ResumeService,
        private route: ActivatedRoute,
        private titleService: Title
    ) {}

    ngOnInit() {
        this.resumeName = this.route.snapshot.queryParams.name || 'daniel'

        this.resume = this.resumeService.getResume(this.resumeName)
        this.titleService.setTitle(this.resume.name)
    }
}