import {Observable} from 'rxjs';
import {User, Users} from './user';

export interface UserRepository {
  query():Observable<Users>;

  create(user:User) : Observable<User>;

}
