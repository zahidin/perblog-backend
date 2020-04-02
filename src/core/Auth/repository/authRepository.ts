import CrudRepository from '@/global/repositories/crudRepository';
import { User as TypeUser } from '@/types/user';
import { User } from '@/entity/User';

export default class AuthRepository extends CrudRepository<TypeUser> {
    entity = User;
}
