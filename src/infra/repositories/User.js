const ApplicationRepository = require('./ApplicationRepository');

class UserRepository extends ApplicationRepository{
    constructor(db, sql) {
        super(db, sql);
        this.addKeys = ['name', 'email', 'password', 'created_at'];
    }

}

module.exports = UserRepository;