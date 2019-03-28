import { Injectable } from "@angular/core";

import { resumesMock } from "../mocks/resumes.mock";

@Injectable({
    providedIn: 'root'
})
export class ResumeService {
    getResume(id: number) {
        return resumesMock.resumes[id]
    }
}