import { Injectable } from "@angular/core";

import { resumesMock } from "../mocks/resumes.mock";

@Injectable({
    providedIn: 'root'
})
export class ResumeService {
    
    getResumeId(hostname: string): number {
        if ( hostname.endsWith('danielvazmartins.com.br') ) return 0
        if ( hostname.endsWith('rozanaaquino.com.br') ) return 1
        return 0
    }

    getStyleName(hostname: string): string {
        if ( hostname.endsWith('danielvazmartins.com.br') ) return 'brow'
        if ( hostname.endsWith('rozanaaquino.com.br') ) return 'gray'
        return 'brow'
    }

    getResume(id: number) {
        return resumesMock.resumes[id]
    }
}