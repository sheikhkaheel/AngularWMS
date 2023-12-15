import { Component } from '@angular/core';
import { PostParentDTO } from '../../Models/DTOs/ParentDTO/PostParentDTO';

@Component({
  selector: 'parent',
  standalone: true,
  imports: [],
  templateUrl: './post-parent-dto.component.html',
  styleUrl: './post-parent-dto.component.css'
})
export class PostParentDTOComponent {
  public postParentDTO : PostParentDTO = {
    firstName: '',
    middleName: '',
    lastName: '',
    phoneNo: '',
    dob: '',
    gender: '',
    familyHead: '',
    email: '',
    userId: ''
  }

  bind(){
    let txtfname = document.getElementById('tfname') as HTMLInputElement;
    let txtmname = document.getElementById('tmname') as HTMLInputElement;
    let txtlname = document.getElementById('tlname') as HTMLInputElement;
    let txtphone = document.getElementById('tphone') as HTMLInputElement;
    let datedob = document.getElementById('datedob') as HTMLInputElement;
    let userId = document.getElementById('numuserId') as HTMLInputElement;
    let Malegender = document.getElementById('male') as HTMLInputElement;
    let Femalegender = document.getElementById('female') as HTMLInputElement;
    let Head = document.getElementById('head') as HTMLInputElement;
    let notHead = document.getElementById('notHead') as HTMLInputElement;

    this.postParentDTO.firstName = txtfname.value;
    this.postParentDTO.middleName = txtmname.value
    this.postParentDTO.lastName = txtlname.value
    this.postParentDTO.phoneNo = txtphone.value;
    this.postParentDTO.dob = datedob.value;
    this.postParentDTO.userId = userId.value;
    this.postParentDTO.gender = Malegender.value;
    this.postParentDTO.gender = Femalegender.value;
    this.postParentDTO.familyHead =Head.value;
    this.postParentDTO.familyHead =notHead.value;

    this.save(this.postParentDTO);
  }

  save(postParentDTO:PostParentDTO){
    let body = JSON.stringify(postParentDTO);
    alert("success");
    console.log(body);
  }
}
