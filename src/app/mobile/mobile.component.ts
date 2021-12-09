import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Mobile } from '../mobile.model';
import { MobileService } from '../mobile.service';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {
  mobForm: FormGroup;
  showModal: boolean=false;
  mobiles: Mobile[];

  constructor(private fb:FormBuilder, private mobService: MobileService) { }

  ngOnInit(): void {
    this.getMobile();
    this.mobForm = this.fb.group({
      _id: [''],
      name: ['Anuska Sarkar', Validators.required],
      time: [5, Validators.required],
      date: ['09.12.2021',Validators.required],
      mood: ['Good', Validators.required]

    })
  }
  getMobile(){
    this.mobService.getMobileList().subscribe((res: Mobile[]) =>{
      console.log(res)
      this.mobiles = res;
    })
  }
  onMobSubmit(){
    if(this.mobForm.valid){
      this.mobService.addMobile(this.mobForm.value).subscribe(
        res=>{
          console.log(res);
          this.getMobile();
          this.onCloseModal();
        }, err =>{
          console.log(err);
        }
      )
    }
  }

  onAddMobile(){
    this.showModal = true;
  }

  onCloseModal(){
    this.showModal = false;
  }


}
