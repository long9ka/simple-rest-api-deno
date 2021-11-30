import mongoose = require("mongoose");
import bcrypt = require("bcrypt");

export type UserDocument = mongoose.Document & {
  username: string,
  password: string

  comparePassword: comparePasswordFunction;
}

type comparePasswordFunction = (candidatePassword: string, cb: (err: any, isMatch: any) => void) => void;

// Create schema
const userSchema = new mongoose.Schema<UserDocument>({
  username: String,
  password: String
});

// Password hash middleware.
userSchema.pre("save", function save(next) {
  const user = this as UserDocument;
  if (!user.isModified("password"))
    return next();
  bcrypt.genSalt(10, (err, salt) => {
    if (err)
      return next(err);
    bcrypt.hash(user.password, salt, (err, hash: string) => {
      if (err)
        return next(err);
      user.password = hash;
      next();
    });
  });
});

const comparePassword: comparePasswordFunction = function (this: any, candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch: boolean) => {
    cb(err, isMatch);
  });
};

userSchema.methods.comparePassword = comparePassword;

export const User =  mongoose.model<UserDocument>("Users", userSchema);