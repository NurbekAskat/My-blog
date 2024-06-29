import { useCallback, useEffect, useState } from 'react';
import axiosApi from '../../axiosApi';
import { ApiPost } from '../../types';
import { Box, Button, Card, CardActions, CardContent, CircularProgress, Grid, Typography } from '@mui/material';
import { Link, useParams } from 'react-router-dom';

const initialState = {
  title: '',
  description: '',
  date: '',
};

const Post = () => {
  const [post, setPost] = useState<ApiPost>(initialState);

  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  const fetchOnePost = useCallback(async (id: string) => {
    setIsLoading(true);
    const response = await axiosApi.get<ApiPost | null>(`/posts/${id}.json`);
    if (response.data) {
      setPost(response.data);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (id !== undefined) {
      void fetchOnePost(id);
    } else {
      setPost(initialState);
    }
  }, [fetchOnePost, id]);

  const messageDate = new Date(post.date);
  const dformat = [messageDate.getDate(),
      messageDate.getMonth() + 1,
      messageDate.getFullYear()].join('.') + ' ' +
    [messageDate.getHours(),
      messageDate.getMinutes(),
      messageDate.getSeconds()].join(':');

  return (
    <Grid container spacing={2} direction="column" alignItems="center">
      {isLoading && (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100px', width: '100%' }}>
          <CircularProgress />
        </Box>
      )}
      <Grid item sx={{ width: '80%' }}>
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{display: 'flex'}}>
              {post.title}
              <Typography className="ms-auto">{dformat}</Typography>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {post.description}
            </Typography>
          </CardContent>
          <CardActions sx={{display: 'flex'}}>
            <Button size="small" component={Link} to={`/posts/${id}/edit`} className="ms-auto">Edit post</Button>
            <Button size="small" component={Link} to={`/`}>Back</Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Post;