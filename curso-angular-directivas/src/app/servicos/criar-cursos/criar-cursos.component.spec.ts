/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CriarCursosComponent } from './criar-cursos.component';

describe('CriarCursosComponent', () => {
  let component: CriarCursosComponent;
  let fixture: ComponentFixture<CriarCursosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarCursosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
