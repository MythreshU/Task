import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeploymentCXOComponent } from './deployment-cxo.component';

describe('DeploymentCXOComponent', () => {
  let component: DeploymentCXOComponent;
  let fixture: ComponentFixture<DeploymentCXOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeploymentCXOComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeploymentCXOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
