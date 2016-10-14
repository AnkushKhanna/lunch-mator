import {Error} from "app/authentication/types/error";

export class PasswordValidationService {
  PASSWORD_MIN_LENGTH = 5;
  error: Error = null;

  constructor() {
  }

  public isValid(): boolean {
    return this.error.message == null || this.error.message.length == 0;
  }

  public validate(password: string, confirmPassword: string) {
    this.error = new Error();
    if (password.length < this.PASSWORD_MIN_LENGTH) {
      var message = "Your password has gotta be at least " + this.PASSWORD_MIN_LENGTH + " characters";
      this.addMessage(this.error, message)
    }
    if (password != confirmPassword) {
      var message = "Your passwords don't match";
      this.addMessage(this.error, message)
    }
  }

  private addMessage(error: Error, message: string) {
    if (error.message != null && error.message.length > 0) {
      error.message += " and ";
      message = message.toLocaleLowerCase();
    }
    error.message += message;
  }

  public getError() {
    return this.error;
  }
}