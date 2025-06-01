export interface AdminCredentials {
  login: string;
  password: string;
}

export interface CheckAuthResponse {
  isAdmin: Boolean;
}
