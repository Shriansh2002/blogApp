import { Avatar, Badge, Flex, Image, Text } from '@chakra-ui/react';
import { BiLike, BiCalendarAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Blog = ({ item }) => {
    return (
        <Link to={`/post/${item.id}`}>
            <Flex
                flexDir='column'
                justifyContent='center'
                alignItems={'center'}
                boxShadow='xl'
                h='100%'
                w='100%'
                borderRadius={10}
                p='12'
                _hover={{
                    boxShadow: '2xl',
                    cursor: 'pointer',
                }}
            >
                <Image
                    src={item.image}
                    alt={item.text}
                    boxSize={150}
                    borderRadius={10}
                    my='2'
                />

                <Text my='2'>{item.text}</Text>

                <Flex justifyContent='space-between' gap={12} my='2'>
                    <Flex alignItems='center' justifyContent='center'>
                        <Text>{item.likes}</Text>
                        <BiLike color='red' />
                    </Flex>
                    <Avatar
                        size='sm'
                        name={item.owner.firstName + ' ' + item.owner.lastName}
                        src={item.owner.picture}
                    />{' '}
                </Flex>

                <Flex alignItems='center' justifyContent='center' gap={1} my='2'>
                    <BiCalendarAlt />
                    <p>{new Date(item.publishDate).toDateString()}</p>
                </Flex>

                <Flex gap={2} my='2'>
                    {item.tags.map((tag, index) => (
                        <Badge colorScheme='green' key={index}>{tag}</Badge>
                    ))}
                </Flex>

            </Flex>
        </Link>
    );
};

export default Blog;