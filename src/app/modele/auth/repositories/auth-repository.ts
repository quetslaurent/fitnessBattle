import {User} from '../../users/types/user';
import {Observable} from 'rxjs';

export interface AuthRepository {

  login(user:User):Observable<any>;

}
