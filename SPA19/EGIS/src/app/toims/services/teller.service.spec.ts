import { TestBed } from '@angular/core/testing';
import { TestMessage } from 'rxjs/internal/testing/TestMessage';   
import { TestBedStatic } from '@angular/core/testing'; 
import { TestEnvironmentOptions } from '@angular/core/testing';
import { TestScheduler } from 'rxjs/testing';
import { TemplateRef } from '@angular/core';
import { TellerService } from './teller.service';

describe('TellerService', () => {
  let service: TellerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TellerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
