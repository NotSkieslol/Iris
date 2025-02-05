const ERR_ENFORCEMENT_FAILED =
  "Illegal password. Your password should be at least 8 characters in length and follow the enforcement rules of there being AT LEAST\n1. An UPPERCASE character (Such as: ABC)\n2. A LOWERCASE character (Such as: abc)\n3. A NUMBER (Such as: 123)\n4. And a SPECIAL CHARACTER (Such as: !@#)";
const ERR_EMAIL = "Invalid Email, please enter a valid email.";
const ERR_UNAME = "Invalid username, please enter a valid username.";
const ERR_PASWD = "Invalid password, please enter a valid password.";
const ERR_TAKEN = "Username is taken or email is already registered.";

const ERR_BADPARAMS = "The parameters provided are incorrect.";

const ERR_DATANOTFOUND = "The requested data could not be fetched in time.";

const ERR_INTERNALERROR = "There was a system error. Please try again.";

const ERR_NEEDSACTIVATION =
  "In order to continue, your account requires activation. Check your inbox for further instructions.";
const ERR_NEEDSACTIVATION2 = "Please activate your account to continue. Check your inbox for further instructions.";

const ERR_NOACCESS =
  "You do not have permission to call this portion of the API.";

const ERR_DISABLED = "Your account has been disabled. Please do not create a new account. Instead, contact an administrator for assistance.";

const ERR_NOTFOUND =
  "The specified user could not be found using the provided ID.";
const ERR_RNOTFOUND = "The room ID provided does not exist.";

const ERR_BADAUTH = "Incorrect username or password.";
const USER_NOTFOUND =
  "Failed to find user, please make sure you didn't make any spelling errors!";

const USER_CANNOTADDYOURSELF = "You cannot add yourself";

const USER_SENTREQUEST_PREVIOUSLY =
  "You already sent a friend request to this user!";

function Error(error: string) {
  return {
    message: error,
    status: false,
  };
}

export {
  Error,
  USER_NOTFOUND,
  USER_CANNOTADDYOURSELF,
  USER_SENTREQUEST_PREVIOUSLY,
  ERR_DATANOTFOUND,
  ERR_INTERNALERROR,
  ERR_NEEDSACTIVATION,
  ERR_NEEDSACTIVATION2,
  ERR_NOACCESS,
  ERR_DISABLED,
  ERR_NOTFOUND,
  ERR_RNOTFOUND,
  ERR_BADPARAMS,
  ERR_BADAUTH,
  ERR_EMAIL,
  ERR_ENFORCEMENT_FAILED,
  ERR_PASWD,
  ERR_TAKEN,
  ERR_UNAME,
};
export default { Error };
