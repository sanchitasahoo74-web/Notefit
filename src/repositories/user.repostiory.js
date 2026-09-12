import user from '../models/user.model.js';

class UserRepository {
    async createUser(userData) {
        return await user.create(userData);
   }

   async findByID(userId) {
        return await user.findById(userId);
   }
   async findByEmail(email) {
        return await user.findOne({ email });
   }

   async existsByEmail(email) {
    return await user.findone({ email });
}


async existByEmail(email) {
    return await user.exists({ email });     
}


}


export default new UserRepository();