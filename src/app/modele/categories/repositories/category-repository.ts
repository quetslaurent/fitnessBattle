import {Observable} from 'rxjs';
import {Categories, Category} from '../types/category';
import {ActivitiesByCategories} from '../types/ActivitiesByCategory';

export interface CategoryRepository {
  query():Observable<Categories>;

  create(category:Category) : Observable<Category>;

  getActivitiesByCategory() : Observable<ActivitiesByCategories>
}
