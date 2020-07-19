import db from "../database.ts";

interface UserSchema {
  username: string,
  password: string
};

const User = db.collection<UserSchema>("users");

export default User;