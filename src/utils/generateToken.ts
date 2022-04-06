import jwt from "jsonwebtoken";
// import {JWT_KEY} from '../config/confg'
const JWT_KEY="5f53f5b35a4f82003d3e8061"
const generateToken = (id: string) => {

  const token = jwt.sign({ id }, JWT_KEY, {
    expiresIn: "30d",
  });
  return token;
};

export default generateToken;