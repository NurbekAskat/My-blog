import React, { useState } from 'react';
import { Grid, TextField, Typography } from '@mui/material';
import { PostMutation } from '../../types';
import axiosApi from '../../axiosApi';
import { useNavigate } from 'react-router-dom';
import { enqueueSnackbar } from 'notistack';
import { LoadingButton } from '@mui/lab';

const NewPost = () => {
  const [postMutation, setPostMutation] = useState<PostMutation>({
    title: '',
    description: '',
    date: '',
  });

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

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

      const postData = {
        ...postMutation,
        date: currentDate,
      };

      await axiosApi.post('/posts.json', postData);

      navigate('/');
    } catch (e) {
      enqueueSnackbar({ variant: 'error', message: 'Something went wrong' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Grid container component="form" direction="column" spacing={2} onSubmit={onSubmit}>
      <Grid item>
        <Typography variant="h5">Create a new post</Typography>
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
        <LoadingButton
          loading={isLoading}
          variant="contained"
          type="submit"
        >
          Save
        </LoadingButton>
      </Grid>
    </Grid>
  );
};

export default NewPost;
