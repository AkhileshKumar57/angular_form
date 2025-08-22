import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  mainform!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.mainform = new FormGroup({
      personal: new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        email: new FormControl('')
      }) ,
      address: new FormGroup({
        city: new FormControl(''),
        street: new FormControl(''),
        pincode: new FormControl('')
      }),
      experience: new FormArray([])
    });
  }

  get personalFormControl(): FormGroup {
    return this.mainform.get('personal') as FormGroup;
  }

  get addressFormControl(): FormGroup {
    return this.mainform.get('address') as FormGroup;
  }


  //if experiecne added in parent form
  //  get abcexp(): FormArray {
  //   return this.mainform.get('experience') as FormArray;
  // }

  // addExp(){
  //   let expFormGroup = new FormGroup({
  //     company: new FormControl('',Validators.required),
  //     role: new FormControl('',Validators.required),
  //     year: new FormControl('',Validators.required)
  //   })
  //   this.abcexp.push(expFormGroup)
  // }

  // removeExp(index: number){
  //   this.abcexp.removeAt(index);
  // }


  onSubmit() {
    console.log(this.mainform.value);
  }
  Update(){
    this.mainform.patchValue({
      personal: {
        firstName: 'fname',
        lastName: 'lname',
        email: 'abc@gmail.com'
      },
      address: {
        city: 'noida',
        street: 'second',
        pincode: '25325372'
      }
    })
    console.log(this.mainform.value);
  }
  clear(){
    this.mainform.reset()
  }
}
