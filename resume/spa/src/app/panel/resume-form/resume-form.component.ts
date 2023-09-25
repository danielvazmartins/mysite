import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
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
    skillType: string = ''

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
            domain: [''],
            model: ['modern'],
            style: ['brown'],
            resume: this.formBuilder.group({
                name: [''],
                occupation: [''],
                dateOfBirth: [''],
                email: [''],
                mobile: [''],
                mobile2: [''],
                address: [''],
                aboutMe: [''],
                professionalGoals: [''],
                skills: this.formBuilder.array([])
            })
        })
    }

    loadData() {
        this.resumesService.getOne(this.resumeId)
        .subscribe(response => {
            //const {_id, userId, __v, ...resume} = response
            //this.formResume.setValue(resume)
            const dateOfBirth = new Date(response['resume']['dateOfBirth'])
            const dateOfBirthStr = ('0' + dateOfBirth.getDate()).slice(-2) + '/' + ('0' + (dateOfBirth.getMonth() + 1)).slice(-2) + '/' + dateOfBirth.getFullYear()

            this.formResume.setValue({
                name: response['name'],
                description: response['description'],
                domain: response['domain'] || '',
                model: response['model'],
                style: response['style'],
                resume: {
                    name: response['resume']['name'],
                    occupation: response['resume']['occupation'],
                    dateOfBirth: response['resume']['dateOfBirth'],
                    email: response['resume']['email'] || '',
                    mobile: response['resume']['mobile'] || '',
                    mobile2: response['resume']['mobile2'] || '',
                    address: response['resume']['address'] || '',
                    aboutMe: response['resume']['aboutMe'],
                    professionalGoals: response['resume']['professionalGoals'],
                    skills: []
                }
            })
            for (let skill of response['resume']['skills']) {
                this.skillType = skill['skillType']
                //this.addSkillType()
            }
        })
    }

    addSkillGroup() {
        const formSkills = this.formResume.get('resume.skills') as FormArray
        formSkills.push(this.formBuilder.group({
            skillType: [''],
            skillNames: [[]]
        }))
    }

    addSkill(skillForm) {
        console.log('addSkill', skillForm)
    }

    btCancel() {
        this.location.back()
    }

    btSave() {
        let resume = this.formResume.value
        const dateOfBirthStr:string = this.formResume.get('resume.dateOfBirth').value
        console.log(dateOfBirthStr, +dateOfBirthStr)
        console.log(this.formResume.get('resume.dateOfBirth'))
        const dateOfBirth = new Date(+dateOfBirthStr.substr(4,4), +dateOfBirthStr.substr(2,2) -1, +dateOfBirthStr.substr(0,2))
        console.log(dateOfBirth)
        //resume['resume']['dateOfBirth'] = dateOfBirth 
        //return console.log(resume)

        console.log(resume)
        //return
        if (this.resumeId) {
            this.resumesService.update(this.resumeId, resume)
            .subscribe(response => (response['status'] === 'success') && this.location.back())
        } else {
            this.resumesService.create(resume)
            .subscribe(response => (response['status'] === 'success') && this.location.back())
        }
    }
}