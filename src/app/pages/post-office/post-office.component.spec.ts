import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostOfficeComponent } from './post-office.component';

describe('PostOfficeComponent', () => {
  let component: PostOfficeComponent;
  let fixture: ComponentFixture<PostOfficeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostOfficeComponent]
    });
    fixture = TestBed.createComponent(PostOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
