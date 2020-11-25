import {Observable} from 'rxjs';
import {Categories, Category} from './category';

export interface CategoryRepository {
  query():Observable<Categories>;

  create(category:Category) : Observable<Category>;
}
