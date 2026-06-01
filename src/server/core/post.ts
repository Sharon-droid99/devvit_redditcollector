import { reddit } from '@devvit/web/server';

export const createPost = async () => {
  try {
    // Get r/soccer
    const subreddit = await reddit.getSubredditByName('soccer');

    // Get top post
    const posts = subreddit.getTopPosts({ limit: 1 });

    let latestPost: any = null;

    for await (const post of posts) {
      latestPost = post;
      break;
    }

    // Safety check
    if (!latestPost) {
      return await reddit.submitCustomPost({
        title: 'NO POSTS FOUND',
      });
    }

    // Collect first 5 comments
    const commentsText: string[] = [];

    const comments = latestPost.comments;

    for await (const comment of comments) {
      if (comment.body) {
        commentsText.push(comment.body);
      }

      if (commentsText.length >= 5) {
        break;
      }
    }

    // Print to terminal
    console.log('================================');
    console.log('POST TITLE:', latestPost.title);
    console.log('================================');

    commentsText.forEach((comment, index) => {
      console.log(`COMMENT ${index + 1}:`);
      console.log(comment);
      console.log('--------------------------------');
    });

    // Create test post
    return await reddit.submitCustomPost({
      title: `POST: ${latestPost.title.substring(0, 120)}`,
    });

  } catch (error: any) {
    console.error(error);

    return await reddit.submitCustomPost({
      title: `ERROR: ${error?.message || String(error)}`,
    });
  }
};