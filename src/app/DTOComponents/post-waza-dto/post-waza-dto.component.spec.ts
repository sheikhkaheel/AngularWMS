import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostWazaDTOComponent } from './post-waza-dto.component';

describe('PostWazaDTOComponent', () => {
  let component: PostWazaDTOComponent;
  let fixture: ComponentFixture<PostWazaDTOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostWazaDTOComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostWazaDTOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
