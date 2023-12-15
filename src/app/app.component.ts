import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PostRoleDTOComponent } from './DTOComponents/post-role-dto/post-role-dto.component';
import { PostUserDTOComponent } from './DTOComponents/post-user-dto/post-user-dto.component';
import { PostParentDTOComponent } from './DTOComponents/post-parent-dto/post-parent-dto.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PostRoleDTOComponent, PostUserDTOComponent, PostParentDTOComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'WmsApp';
}
