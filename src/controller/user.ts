import { Request, Response } from 'express';
import User from '../model/user'
import generateToken from '../utils/generateToken';

// @Desc Get all users
// @Route /api/auth
// @Method GET
export const getAll = async (req: Request, res: Response) => {

    const users = await User.find({}).select('-password');
    res.status(201).json({ success: true, count: users.length, users });

}

// @Desc Login 
// @Route /api/auth/
// @Method POST
export const login = async (req: Request, res: Response) => {

    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if(!user) {
        res.status(401);
        throw new Error("User not found");
    }

    if(await user.comparePassword(password)) {

        res.status(201).json({ success: true, user: {
            id: user._id,
            email: user.email,
            name: user.name,
            token: generateToken(user._id)
        }})

    } else {
        res.status(401);
        throw new Error("Email or password incorrect");
    }

}

// @Desc Register
// @Route /api/auth/register
// @Method POST
export const register = async (req: Request, res: Response) => {

    const { email, name, password } = req.body;

    const user = new User({
        email,
         name,
         password
    });

    await user.save();
    console.log(user);

    res.status(201).json({ success: true, user: {
        email: user.email,
        name: user.name,
        token: generateToken(user._id)

    } });

}