import {Observable} from 'rxjs';
import {User, Users} from '../types/user';

export interface UserRepository {
  query():Observable<Users>;

  getPointsById(token: string):Observable<number>;

  create(user:User) : Observable<User>;

}
