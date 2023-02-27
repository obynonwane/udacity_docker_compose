import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) {}
  url: string = 'http://localhost:8080/api/missed-blocks/24';
  async getMissedBlock() {
    return this.http.get(this.url);
  }
}
