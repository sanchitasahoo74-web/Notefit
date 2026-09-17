import bcrypt from 'bcryptjs';

// Ramesh2004@ => $2b$10$X8v5d3e4f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6 => hashed password

const hashPassword = async (originalPassword)=>{
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(originalPassword, salt);
    return hashedPassword;
}

export default hashPassword;