const ApplicationService = require('./ApplicationService');

class UserService extends ApplicationService {
    async test() {
        const allUsers = await this.repositories.user.all();
        return allUsers;
    };
};

module.exports = UserService;