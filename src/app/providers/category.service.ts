import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class CategoryService {
  private categories: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.categories = db.list('/categories');
  }

  getCategories() {
    return this.categories;
  }

  newCategory(category: Category) {
    this.categories.push(category);
  }

  getCategoryByKey(key: string){
    return this.db.list('/categories' + key);
  }

  editCategory(key: string, values: Object = {}) {
    let categoryInFirebase = this.getCategoryByKey(key);
    if(!categoryInFirebase){
      return null;
    }
    categoryInFirebase.update(key, {values});
    return categoryInFirebase;
  }

  deleteCategory(key: string) {
    let categoryInFirebase = this.getCategoryByKey(key);
    categoryInFirebase.remove();
  }

}
