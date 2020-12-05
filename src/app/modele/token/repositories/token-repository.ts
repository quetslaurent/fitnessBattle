import {Observable} from 'rxjs';
import {UserToken} from '../types/userToken';

export interface TokenRepository {
  getUserFromToken(token:string):Observable<UserToken>;

}
