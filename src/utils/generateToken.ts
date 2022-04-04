import jwt from "jsonwebtoken";
import {JWT_KEY} from '../config/confg'

const generateToken = (id: string) => {

  const token = jwt.sign({ id }, JWT_KEY as string, {
    expiresIn: "30d",
  });
  return token;
};

export default generateToken;