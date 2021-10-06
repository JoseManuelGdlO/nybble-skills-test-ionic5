import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpService } from './http-service';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

describe('HttpService', () => {

  const httpSpy = () => ({get: (url) => of(''), post: (url) => of(''), delete: (url) => of('')});

  beforeEach(() => TestBed.configureTestingModule({
    imports : [HttpClientTestingModule],
    providers: [
      HttpService,
      { provide: HttpClient, useFactory: httpSpy }
    ]
  }));

  it('should be created', () => {
    const service: HttpService = TestBed.get(HttpService);
    expect(service).toBeTruthy();
  });

  it('getMethod', async () => {
    const service: HttpService = TestBed.get(HttpService);

    const bodyReturn = new Observable(() => {});
    spyOn(service.http, 'get').and.returnValue(await Promise.resolve(bodyReturn));
    service.getMethod('');
    expect(service).toBeTruthy();
  });

  it('deteteMethod', async () => {
    const service: HttpService = TestBed.get(HttpService);

    const bodyReturn = new Observable(() => {});
    spyOn(service.http, 'delete').and.returnValue(await Promise.resolve(bodyReturn));
    service.deleteMethod('');
    expect(service).toBeTruthy();
  });

  it('postMethod', async () => {
    const service: HttpService = TestBed.get(HttpService);

    const bodyReturn = new Observable(() => {});
    spyOn(service.http, 'post').and.returnValue(await Promise.resolve(bodyReturn));
    service.postMethod('');
    expect(service).toBeTruthy();
  });
});
