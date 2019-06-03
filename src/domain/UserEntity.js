const ApplicationEntity = require('./ApplicationEntity');

class UserEntity extends ApplicationEntity {
  // static constraints = {
  //   email: {
  //     presence: true,
  //     email: true,
  //   },
  // };

  constructor() {
    super();
  }
}

module.exports = UserEntity;