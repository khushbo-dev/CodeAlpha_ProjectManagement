import jwt from 'jsonwebtoken';
export default function auth(req,res,next){const header=req.headers.authorization; if(!header?.startsWith('Bearer ')) return res.status(401).json({message:'Authentication required'}); try {req.user={id:jwt.verify(header.slice(7),process.env.JWT_SECRET).id}; next();} catch{return res.status(401).json({message:'Invalid or expired token'});}}
