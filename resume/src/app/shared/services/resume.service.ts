import { Injectable } from "@angular/core";

import { resumesMock } from "../mocks/resumes.mock";

@Injectable({
    providedIn: 'root'
})
export class ResumeService {
    getResume(name: string) {
        return resumesMock[name]
    }
}