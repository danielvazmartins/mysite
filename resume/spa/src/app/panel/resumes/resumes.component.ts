import { Component, OnInit } from "@angular/core";

import { ResumesService } from 'src/app/shared/services/resumes.service';

@Component({
    templateUrl: './resumes.component.html',
    styleUrls: ['./resumes.component.scss']
})
export class ResumesComponent implements OnInit {

    resumes$: any

    constructor(
        private resumesService: ResumesService
    ) {}

    ngOnInit() {
        this.getResumes()
    }

    getResumes() {
        this.resumes$ =this.resumesService.getAll()
    }

    btDelete(resumeId: string) {
        this.resumesService.delete(resumeId)
        .subscribe(response => this.getResumes())
    }
}