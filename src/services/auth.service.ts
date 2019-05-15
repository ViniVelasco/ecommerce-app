import { Injectable } from "@angular/core";
import { CredentialsDTO } from "../models/credentials.dto";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../config/api.config";
import { LocalUser } from "../models/local_user";
import { StorageService } from "./storage.service";
import { JwtHelper } from "angular2-jwt";

@Injectable()
export class AuthService {

  jwtHelper: JwtHelper = new JwtHelper()

  constructor(public http: HttpClient, public storage: StorageService) {

  }

  authenticate(creds: CredentialsDTO) {
    return this.http.post(
      `${API_CONFIG.baseUrl}/login`,
      creds,
      {
        observe: 'response',
        responseType: 'text'
      }
    );
  }

  successfulLogin(authorizationValue : string) {
    let token = authorizationValue.substring(7);
    let user : LocalUser = {
      token,
      email: this.jwtHelper.decodeToken(token).sub
    };
    this.storage.setLocalUser(user);
  }

  logout() {
    this.storage.setLocalUser(null);
  }
}
