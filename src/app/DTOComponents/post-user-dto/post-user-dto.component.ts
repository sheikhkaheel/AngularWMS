import { Component } from '@angular/core';
import { PostUserDTO } from '../../Models/DTOs/UserDTO/PostUserDTO';

@Component({
  selector: 'user',
  standalone: true,
  imports: [],
  templateUrl: './post-user-dto.component.html',
  styleUrl: './post-user-dto.component.css'
})
export class PostUserDTOComponent {

  public postUserDTO : PostUserDTO = {
    firstName: '',
    middleName: '',
    lastName: '',
    userName: '',
    password: '',
    roleId: ''
  }
  
  bind(){
    let txtfname = document.getElementById('txtfname') as HTMLInputElement;
    let txtmname = document.getElementById('txtmname') as HTMLInputElement;
    let txtlname = document.getElementById('txtlname') as HTMLInputElement;
    let txtuserName = document.getElementById('txtuserName') as HTMLInputElement; 
    let txtpassword = document.getElementById('txtpassword') as HTMLInputElement;
    let roleId = document.getElementById('roleId') as HTMLInputElement;

    this.postUserDTO.firstName = txtfname.value;
    this.postUserDTO.middleName = txtmname.value;
    this.postUserDTO.lastName = txtlname.value;
    this.postUserDTO.userName = txtuserName.value;
    this.postUserDTO.password = txtpassword.value;
    this.postUserDTO.roleId = roleId.value;
  
    this.validate();
    this.save(this.postUserDTO);
  }

  validate(){
    let txtfname = document.getElementById('txtfname') as HTMLInputElement;
    let txtmname = document.getElementById('txtmname') as HTMLInputElement;
    let txtlname = document.getElementById('txtlname') as HTMLInputElement;
    let txtuserName = document.getElementById('txtuserName') as HTMLInputElement; 
    let txtpassword = document.getElementById('txtpassword') as HTMLInputElement;
    let roleId = document.getElementById('roleId') as HTMLInputElement;

    let error1 = document.getElementById('error1') as HTMLInputElement;
    let error2 = document.getElementById('error2')as HTMLInputElement;
    let error3 = document.getElementById('error3') as HTMLInputElement;
    let error4 = document.getElementById('error4') as HTMLInputElement;
    let error5 = document.getElementById('error5') as HTMLInputElement;
    let roleError = document.getElementById('roleError') as HTMLInputElement;

    if(txtpassword.value.length > 7) {
      error5.innerHTML = "";
    } else{
      error5.innerHTML = "*Max lenth 8"
    }

    if(txtuserName.value.length > 4) {
      error4.innerHTML = "";
    } else{
      error4.innerHTML = "*Max lenth 5"
    }

    if(txtpassword.value == ""){
      error5.innerHTML = "*Please enter your password";
    } 

    if(roleId.value == ""){
      roleError.innerHTML = "*Enter Role Id";
    }

    if(txtuserName.value == ""){
      error4.innerHTML = "*Enter UserName";
    } 

    if(txtlname.value == ""){
      error3.innerHTML = "*Enter LastName";
    } else{
      error3.innerHTML = "";
    }

    if(txtmname.value == ""){
      error2.innerHTML = "*Enter MiddleName";
    } else{
      error2.innerHTML = "";
    }
    
    if(txtfname.value == ""){
      error1.innerHTML = "*Enter FisrtName";
    } else{
      error1.innerHTML = "";
    }

    if(error4.innerHTML == "" && error5.innerHTML == ""){
      alert("Sucessfully Saved");
    }

  }

  save(postUserDTO:PostUserDTO) {
    let body = JSON.stringify(postUserDTO);
    console.log(body);
  }
}
