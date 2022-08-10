import { Box, Button } from '@mui/material';
import { useEffect } from 'react';
import { QuestionContainer } from '../../components/QuestionContainer';
import { apiClient } from '../../services/api-client';

const Home = () => {
  useEffect(() => {
    apiClient.getQuetstions().then((result) => {
      console.log(result);
    });
  }, []);

  return (
    <>
      <Box></Box>
      <QuestionContainer />
    </>
  );
};

export { Home };
