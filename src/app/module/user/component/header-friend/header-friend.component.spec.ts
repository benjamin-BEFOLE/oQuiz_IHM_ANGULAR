import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHeaderFriendComponent } from './header-friend.component';

describe('UserHeaderFriendComponent', () => {
  let component: UserHeaderFriendComponent;
  let fixture: ComponentFixture<UserHeaderFriendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserHeaderFriendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserHeaderFriendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
