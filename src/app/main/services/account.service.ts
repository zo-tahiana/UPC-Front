import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  constructor(
    private readonly http: HttpClient
  ) {}

  signin(data) {
    return firstValueFrom(
      this.http.post(environment .hosts.api + '/account/signin', data)
    );
  }
}
