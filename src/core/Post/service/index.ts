import { postRepository } from '@/core/Post/repository';
import PostService from './postService';

export const postService = new PostService(postRepository);
