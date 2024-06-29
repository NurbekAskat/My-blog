import React, { useCallback, useEffect, useState } from 'react';
import { Grid, TextField, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { enqueueSnackbar } from 'notistack';
import { LoadingButton } from '@mui/lab';
import axiosApi from '../../axiosApi';
import { ApiPost } from '../../types';

const initialState = {
  title: '',
  description: '',
  date: '',
};

const MutatePost = () => {
  const [postMutation, setPostMutation] = useState<ApiPost>(initialState);

  const navigate = useNavigate();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  const fetchOnePost = useCallback(async (id: string) => {
    setIsLoading(true);
    const response = await axiosApi.get<ApiPost | null>(`/posts/${id}.json`);
    if (response.data) {
      setPostMutation(response.data);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (id !== undefined) {
      void fetchOnePost(id);
    } else {
      setPostMutation(initialState);
    }
  }, [fetchOnePost, id]);

  const onFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setPostMutation((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      setIsLoading(true);

      const currentDate = new Date();
      console.log(currentDate);

      if (id) {
        const postData = {
          ...postMutation,
        };
        await axiosApi.put(`/posts/${id}.json`, postData);
      } else {
        const postData = {
          ...postMutation,
          date: currentDate,
        };
        await axiosApi.post('/posts.json', postData);
      }

      navigate('/');
    } catch (e) {
      enqueueSnackbar({ variant: 'error', message: 'Something went wrong' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Grid
      container
      component="form"
      direction="column"
      spacing={2}
      onSubmit={onSubmit}
    >
      <Grid item>
        <Typography variant="h5">
          {id ? 'Edit a post' : 'Create a new post'}
        </Typography>
      </Grid>
      <Grid item>
        <TextField
          label="title"
          variant="outlined"
          name="title"
          value={postMutation.title}
          onChange={onFieldChange}
          fullWidth
          required
        />
      </Grid>
      <Grid item>
        <TextField
          label="description"
          multiline
          minRows={3}
          variant="outlined"
          name="description"
          value={postMutation.description}
          onChange={onFieldChange}
          fullWidth
          required
        />
      </Grid>
      <Grid item>
        <LoadingButton loading={isLoading} variant="contained" type="submit">
          Save
        </LoadingButton>
      </Grid>
    </Grid>
  );
};

export default MutatePost;
