import jwt from 'jsonwebtoken';

export const generateToken=(user)=> {
        const token = jwt.sign(
            {email: user.email, id: user._id},
            process.env.jwtKey,
            {expiresIn: '24h'}
        )
        return token;
}

export const getUserIdFromToken = (token)=> {
    const decodedToken = jwt.verify(token, process.env.jwtKey);
    return decodedToken.id;
}