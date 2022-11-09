import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import SocialLinks from './SocialLinks';

import { AiFillLinkedin, AiFillGithub, AiFillTwitterSquare } from 'react-icons/ai';

const socialList = [
    {
        id: 1,
        colorHex: '#0A66C2',
        url: 'https://www.linkedin.com/in/shriansh-agarwal/',
        text: 'LinkedIn',
        logo: AiFillLinkedin
    },
    {
        id: 2,
        colorHex: '#171515',
        url: 'https://www.github.com/shriansh2002/',
        text: 'Github',
        logo: AiFillGithub
    }, {
        id: 3,
        colorHex: '#00acee',
        url: 'https://twitter.com/shrianshagarwal',
        text: 'Twitter',
        logo: AiFillTwitterSquare
    }
];



const SocialComponent = () => {
    return (
        <>
            <Text fontSize='2xl' textAlign='left'>Connecting With Me</Text>
            <Text fontSize='xl' textAlign='left'>
                For any queries or suggestions, you can connect with me on any of the following platforms: <br />
            </Text>
            <Flex fontSize='xl' mt='2' gap={4}>
                {socialList.map((item, index) => (
                    <SocialLinks
                        key={index}
                        colorHex={item.colorHex}
                        url={item.url}
                        text={item.text}
                        logo={item.logo}
                    />
                ))}
            </Flex>
        </>
    );
};

export default SocialComponent;