import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { ResumesService } from 'src/app/shared/services/resumes.service';
import { SelectOption } from 'src/app/shared/interfaces/select-option.interface';

@Component({
    templateUrl: './resume-form.component.html',
    styleUrls: ['./resume-form.component.scss']
})
export class ResumeFormComponent implements OnInit {
    formResume: FormGroup
    resumeId: string
    modelOptions: SelectOption[]
    styleOptions: SelectOption[]

    constructor(
        private formBuilder: FormBuilder,
        private location: Location,
        private resumesService: ResumesService,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.modelOptions = [
            {key: 'modern', value: 'Moderno'},
            {key: 'classic', value: 'Classico'}
        ]
        this.styleOptions = [
            {key:'gray', value:'Cinza'},
            {key:'brown', value:'Marrom'},
            {key:'pink', value:'Rosa'}
        ]
        this.route.params.subscribe(params => this.resumeId = params['id'])
        this.initForm()

        if (this.resumeId) this.loadData()
    }

    initForm() {
        this.formResume = this.formBuilder.group({
            name: [''],
            description: [''],
            model: ['modern'],
            style: ['brown'],
            resume: this.formBuilder.group({
                name: ['']
            })
        })
    }

    loadData() {
        this.resumesService.getOne(this.resumeId)
        .subscribe(response => {
            const {_id, userId, __v, ...resume} = response
            this.formResume.setValue(resume)
            /*this.formResume.setValue({
                name: response['name'],
                description: response['description'],
                model: response['model'],
                style: response['style']
            })*/
        })
    }

    btCancel() {
        this.location.back()
    }

    btSave() {
        const resume = this.formResume.value
        //return console.log(resume)
        if (this.resumeId) {
            this.resumesService.update(this.resumeId, resume)
            .subscribe(response => (response['status'] === 'success') && this.location.back())
        } else {
            this.resumesService.create(resume)
            .subscribe(response => (response['status'] === 'success') && this.location.back())
        }
    }
}