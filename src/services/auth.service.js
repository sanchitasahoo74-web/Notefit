import userRepository from '../repositories/user.repository.js';
import { hashPassword } from '../utils/hashingPassword.js';
class AuthService {
  async register({ name, email, password }) {
    // check if user already exists
    const existingUser = await userRepository.existByEmail(email);
    // if user already exists throw error
    if (existingUser) {
      throw new Error('User already exists');
    }
    // hash the password
    const hashedPassword = await hashPassword(password);
    // create the user
    const user = await userRepository.create({ name, email, password: hashedPassword });

    // return the user data without password
    return {
      id: user._id, // offered by mongoose
      name: user.name,
      email: user.email,
    };
    console.log('User registered successfully', user);
  }
}

export default new AuthService();