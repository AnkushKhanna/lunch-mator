package mappers

import exceptions.PasswordValidationException
import models.Error
import org.postgresql.util.PSQLException

object ErrorMessageMapper {


  def map(exception: Exception): Error = {
    Error(exception.getMessage)
  }

  def map(exception: PSQLException, path: String): Error = {
    path match {
      case "/rest/signUp" => Error("email already exists")
      case "/rest/login" => Error("email already exists")
      case _ => Error(exception.getMessage)
    }
  }

  def map(exception: PasswordValidationException): Error = {
    Error("Password doesnot match")
  }
}