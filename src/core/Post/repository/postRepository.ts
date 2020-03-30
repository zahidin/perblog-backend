import CrudRepository from '@/global/repositories/crudRepository';
import { Post as TypePost } from '@/types/post';
import { Post } from '@/entity/Post';

export default class PostRepository extends CrudRepository<TypePost> {
    entity = Post;
}
