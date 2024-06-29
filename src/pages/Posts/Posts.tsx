import { useCallback, useEffect, useState } from 'react';
import axiosApi from '../../axiosApi';
import { ApiPosts, Post } from '../../types';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  Grid,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPosts = useCallback(async () => {
    setIsLoading(true);
    const response = await axiosApi.get<ApiPosts | null>('/posts.json');

    const postsResponse = response.data;

    if (postsResponse !== null) {
      const posts: Post[] = Object.keys(postsResponse).map((id: string) => {
        return {
          ...postsResponse[id],
          id,
        };
      });
      setPosts(posts);
    } else {
      setPosts([]);
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    void fetchPosts();
  }, [fetchPosts]);

  return (
    <Grid
      container
      spacing={2}
      flexWrap="wrap"
      justifyContent="space-around"
      alignItems="center"
    >
      {isLoading && (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100px',
            width: '100%',
          }}
        >
          <CircularProgress />
        </Box>
      )}
      {posts.length === 0 && !isLoading && (
        <Typography variant="h2">Sorry, UwU</Typography>
      )}
      {posts.map((post) => (
        <Grid item sx={{ width: '50%' }}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {post.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {post.description.length > 100
                  ? post.description.slice(0, 100) + '...'
                  : post.description}
              </Typography>
            </CardContent>
            <CardActions sx={{ display: 'flex' }}>
              <Button
                size="small"
                component={Link}
                to={`/posts/${post.id}`}
                className="ms-auto"
              >
                Learn more
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
