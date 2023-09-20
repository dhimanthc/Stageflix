import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config({ path: "./../.env" });

const createSecretToken = (id) => {
  return jwt.sign({ id }, process.env.TOKENKEY, {
    expiresIn: 3 * 24 * 60 * 60,
  });
};

export default createSecretToken;
