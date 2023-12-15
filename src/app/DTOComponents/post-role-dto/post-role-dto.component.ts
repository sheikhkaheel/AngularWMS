import { Component } from '@angular/core';
import { PostRoleDTO } from '../../Models/DTOs/RoleDTO/PostRoleDTO';

@Component({
  selector: 'role',
  standalone: true,
  imports: [],
  templateUrl: './post-role-dto.component.html',
  styleUrl: './post-role-dto.component.css'
})
export class PostRoleDTOComponent {

  public postRoleDTO: PostRoleDTO = {
    roleName: "",
    displayName: "",
    isSuperAdmin: false,
    isAdmin: false,
    isParent: false,
    isWaza: false,
    isActive: false
  }

  bind() {

    let txtRoleName = document.getElementById('txtroleName') as HTMLInputElement;
    let txtDisplayName = document.getElementById('txtdisplayName') as HTMLInputElement;
    let chkisSuperAdmin = document.getElementById('chkisSuperAdmin') as HTMLInputElement;
    let chkisAdmin = document.getElementById('chkisAdmin') as HTMLInputElement;
    let chkisParent = document.getElementById('chkisParent') as HTMLInputElement;
    let chkisWaza = document.getElementById('chkisWaza') as HTMLInputElement;
    let chkisActive = document.getElementById('chkisActive') as HTMLInputElement;

    this.postRoleDTO.roleName = txtRoleName.value;
    this.postRoleDTO.displayName = txtDisplayName.value;
    this.postRoleDTO.isSuperAdmin = chkisSuperAdmin.checked;
    this.postRoleDTO.isAdmin = chkisAdmin.checked;
    this.postRoleDTO.isParent = chkisParent.checked;
    this.postRoleDTO.isWaza = chkisWaza.checked;
    this.postRoleDTO.isActive = chkisActive.checked;

    this.Validate();
    this.save(this.postRoleDTO);

  }

  Validate() {
    let txtRoleName = document.getElementById('txtroleName') as HTMLInputElement;
    let txtDisplayName = document.getElementById('txtdisplayName') as HTMLInputElement;

    let VtxtRoleName = document.getElementById('validateRoleName') as HTMLInputElement;
    let VtxtDisplayName = document.getElementById('validateDisplayName') as HTMLInputElement;

    if (txtDisplayName.value.length > 4) {
      VtxtDisplayName.innerHTML = "";
    } else {
      VtxtDisplayName.innerHTML = "*Min Length 5";
    }

    if (txtRoleName.value.length > 4) {
      VtxtRoleName.innerHTML = "";
    } else {
      VtxtRoleName.innerHTML = "*Min length 5";
    }

    if (txtDisplayName.value == "") {
      VtxtDisplayName.innerHTML = "*Enter Display Name";
    }

    if (txtRoleName.value == "") {
      VtxtRoleName.innerHTML = "*Enter Role Name";
    }

    if (VtxtDisplayName.innerHTML == "" && VtxtRoleName.innerHTML == "") {
      alert('Successfully Saved');
    }

  }

  save(postRoleDTO: PostRoleDTO) {
    let body = JSON.stringify(postRoleDTO);
    console.log(body);
  }

}
