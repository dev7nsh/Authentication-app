import express from "express"
import {User} from "../model/User.js"
import bcrypt from "bcryptjs"


export const signup = async(req,res) => {

    const {firstname , email , password} = req.body;

    try {

        if(password.length<6){
            return res.status(400).json({message: "incoor=ect password length -backend"});
        }

        const user = await User.findOne({email});

        if(user){
            return res.status(400).json({message: "user already exist - backend"})
        }

        const salt = await bcrypt.genSalt(10);
        const hasspass = await bcrypt.hash(password,salt);

        const NewUser = new User({
            firstname,
            email,
            password : hasspass,
        })

        
            await NewUser.save()

            res.status(201).json({
                name: NewUser.firstname,
                email: NewUser.email
            });
        
    } catch (error) {
         console.log("Error in signup controller", error.message);
    res.status(500).json({ message: "Internal Server Error --server" });
        
    }
    
}

export const login = async(req,res) => {
    const {email , password} = req.body;

    try {
        
        const user = await User.findOne({email});

        if(!user){
            return res.status(401).json({message : "user is not rigester yet -- server"})
        }

       const  CheckPass = await bcrypt.compare(password, user.password)  ;

       if(!CheckPass){
        return res.status(401).json({message : "user is not rigester yet --- server"})
       }

       res.status(201).json({
        email : user.email,
        userid : user._id
       })
        
    } catch (error) {
        
    }
    }
    export const logout = (req, res) => {
        // If using sessions:
        if (req.session) {
            req.session.destroy(err => {
                if (err) {
                    return res.status(500).json({ message: "Logout failed" });
                }
                res.clearCookie('connect.sid');
                return res.status(200).json({ message: "Logged out successfully" });
            });
        } else {
            // If using JWT or stateless auth:
            res.status(200).json({ message: "Logged out successfully" });
        }
    };
