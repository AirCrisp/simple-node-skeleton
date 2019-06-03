'use strict';

var dbm;
var type;
var seed;

exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db) {
  return db.createTable('users', {
    columns: {
      id: { type: 'int', primaryKey: true, autoIncrement: true },
      name: 'string',
      email: 'string',
      password: 'string',
      created_at: 'datetime',
    },
    ifNotExists: true
  });
};

exports.down = function(db) {
  return db.dropTable('users', {
    ifExists: true
  });
};

exports._meta = {
  "version": 1
};
