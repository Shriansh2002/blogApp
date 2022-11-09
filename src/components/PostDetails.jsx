import { Badge, Button, Flex, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const PostDetails = ({ data }) => {
    return (
        <Flex
            flexDir={'column'}
            py={4}
            mt={4}
            mx={'20%'}
        >
            <Text
                fontSize={'xl'}
                mx='auto'
                my='4'
            >
                {data.text.toUpperCase()}
            </Text>
            <Image
                src={data.image}
                alt={'gll'}
                my='4'
                mx='auto'
                width={800}
                borderRadius='lg'
                height={450}
                boxShadow='xl'
            />
            <Text my='4' mx='auto'>
                Published On: {new Date(data.publishDate).toDateString()}
            </Text>

            <Flex gap={2} alignItems='center' justifyContent={'center'}>
                {data.tags.map((tag, index) => (
                    <Badge fontSize='0.8em' colorScheme='green' key={index}>{tag}</Badge>
                ))}
            </Flex>

            <Flex p='2' justifyContent='space-evenly' mx='12'>

                <Text fontSize={16} my='4'>{data.likes} Likes</Text>
                <Text fontSize={16} my='4' textTransform={'capitalize'}>
                    Author: {
                        data.owner.title + ' ' + data.owner.firstName + ' ' + data.owner.lastName
                    }
                </Text>
                {data.link && (
                    <Text fontSize={16} my='4'>
                        <Link to={data.link}>
                            <Button colorScheme='teal' variant='outline'>
                                Visit Here
                            </Button>
                        </Link>
                    </Text>
                )}
            </Flex>
        </Flex>
    );
};

export default PostDetails;