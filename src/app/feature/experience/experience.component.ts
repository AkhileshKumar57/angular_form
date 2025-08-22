import { Component, Input } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  @Input() mainFormGroup!:FormGroup;

  get experience(): FormArray{
    return this.mainFormGroup.get('experience') as FormArray;
  }

  removeExp(index: number){
    this.experience.removeAt(index);
  }
  addExp(){
    let expFormGroup = new FormGroup({
      company: new FormControl('',Validators.required),
      role: new FormControl('',Validators.required),
      year: new FormControl('',Validators.required)
    })
    this.experience.push(expFormGroup)
  }
}
