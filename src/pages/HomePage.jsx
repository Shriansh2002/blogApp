import { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Grid, Text } from '@chakra-ui/react';

// Components
import Post from '../components/Post';

const HomePage = () => {
    const [data, setData] = useState([]);

    const baseUrl = process.env.REACT_APP_Base_URL;
    const apiKey = process.env.REACT_APP_DUMMY_API_KEY;



    useEffect(() => {
        async function getData() {
            await axios.get(`${baseUrl}/post?limit=10`, {
                headers: {
                    'app-id': apiKey
                }
            })
                .then((response) => setData(response.data.data));
        }
        getData();
    }, [baseUrl, apiKey]);

    return (
        <Box m='2' p='2'>

            <Grid
                templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)']}
                gap={6}
            >
                {data.length > 0 ? data.map((item, index) => (
                    <Post item={item} key={index} />
                ))
                    : <Text>Loading...</Text>
                }
            </Grid>

        </Box>
    );
};

export default HomePage;