import { PostService } from './05-dependency-b';
import { JsonDataBaseService, NewJsonDatabaseService } from './05-dependency-c';


// Main
(async () => {
    const provider = new NewJsonDatabaseService();
    const postService = new PostService(provider);

    const posts = await postService.getPosts();

    console.log({ posts })


})();