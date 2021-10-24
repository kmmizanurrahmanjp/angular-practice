import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Designation } from '../model/designation';
import { DesignationService } from '../service/designation.service';

@Component({
  selector: 'app-designation',
  templateUrl: './designation.component.html',
  styleUrls: ['./designation.component.css']
})
export class DesignationComponent implements OnInit {
  
  designationForm: FormGroup;
  model: Designation =  new Designation();

  constructor(
     private formBuilder: FormBuilder,
     private service: DesignationService,

  ) {
   }


  ngOnInit(): void {
    this.initFormValue();
  }

  initFormValue() {
    this.designationForm = this.formBuilder.group({
      id: ['', ''],
      name: ['', [Validators.required]],
      active: [false],
    });
  }

  onSave(): any{
    this.generateModel();
    this.service.create(this.model).subscribe(res => {
      console.log(res.id);
      console.log('Save successs..........');
    }, error => {
      console.log('Save failed..........');
    });
  }

  generateModel(){
    console.log(this.designationForm.value.id);
    // this.model = this.designationForm.value;
    this.model.id = this.designationForm.value.id;
    this.model.name = this.designationForm.value.name;
    this.model.active = this.designationForm.value.active;
  }

}

