import User from '../models/user.model.js';

class UserRepository {
    async createUser(userData) {
        return await User.create(userData);
   }

   async findByID(userId) {
        return await User.findById(userId);
   }
   async findByEmail(email) {
        return await User.findOne({ email });
   }

   async existsByEmail(email) {
    return await User.findone({ email });
}


async existByEmail(email) {
    return await User.exists({ email });     
}


}


export default new UserRepository();