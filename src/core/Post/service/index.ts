import { postRepository } from '../repository';
import PostService from './postService';

export const postService = new PostService(postRepository);
