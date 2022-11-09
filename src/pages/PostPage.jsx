import { Box } from '@chakra-ui/react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Components
import PostDetails from '../components/PostDetails';

const PostPage = () => {
    const { id } = useParams();
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    const baseUrl = process.env.REACT_APP_Base_URL;
    const apiKey = process.env.REACT_APP_DUMMY_API_KEY;

    useEffect(() => {
        async function getData() {
            await axios.get(`${baseUrl}/post/${id}`, {
                headers: {
                    'app-id': apiKey
                }
            })
                .then((response) => {
                    setData(response.data);
                }).catch((err) => {
                    setData(null);
                });
            setLoading(false);
        }
        getData();
    }, [id, baseUrl, apiKey]);

    return (
        <Box>
            {loading ? <p>Loading...</p>
                :
                <>
                    {data != null ? <PostDetails data={data} /> : <p>Not Found</p>}
                </>
            }
        </Box>
    );
};

export default PostPage;