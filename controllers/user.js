import User from "../models/Users.js"

export async function createUser(req, res, next) {
    try {
        const user = await User.create(req.body);
        res.status(201).json({
            success: true,
            message: "User created",
            data: user
        });
    } catch (error) {
        next(error);
    }
}

export async function getUsers(req, res, next) {
    try {
        const users = await User.find();
        res.status(200).json({
            success: true,
            message: "Users list",
            data: users
        })
    } catch (error) {
        next(error)
    }
}

export async function getUser(req, res, next) {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json({
            success: true,
            message: "User details",
            data: user
        })
    } catch (error) {
        next(error)
    }
}

export async function updateUser(req, res, next) {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!user) {
            const error = new Error("USer not found");
            error.status = 404;
            throw error;
        }
        res.status(201).json({ success: true, message: "USer updated", data: user })
    } catch (error) {
        next(error)
    }
}

export async function deleteUser(req, res, next) {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        res.status(200).json({ success: true, message: "USer deleted", data: user });
    } catch (error) {
        next(error);
    }
}