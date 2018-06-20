'use strict';

import storage from '../lib/storage/data-store.js';
import uuid from 'uuid/v1';

class Movies {
  constructor(genres = '', rating = '') {
    this.id = uuid();
    this.createdOn = new Date();
    this.genres = genres;
    this.rating = rating;
  }

  save() {
    return storage.save(this);
  }

  static fetchAll() {
    return storage.getAll();
  }

  static findOne(id) {
    return storage.get(id);
  }

  static updateOne(criteria) {
    return storage.update(this);
  }

  static deleteOne(id) {
    return storage.delete(id);
  }
}

export default Friends;