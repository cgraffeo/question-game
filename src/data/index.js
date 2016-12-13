import _ from 'lodash';
import categories from './categories.js';
import questions from './questions.js';

class StoreList {
  findById(id) {
    return _.find(this.store, { id });
  }

  findByIndex(idx) {
    return this.store[idx];
  }
}

class Categories extends StoreList {
  constructor(categories) {
    this.store = categories;
  }
}

class Questions extends StoreList{
  constructor(questions) {
    this.store = questions;
  }

  allQuestionsByCategoryId(categoryId) {
    return _.find(this.store, {categoryId});
  }
}

export {
  Categories,
  Questions
};

// import {Categories, Questions} from './gameData.js'
// let questions = new Questions()
// let categories = new Categories()