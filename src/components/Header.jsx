import { Link, Flex, Heading } from '@chakra-ui/react';

const linkElements = [
    {
        href: '/',
        text: 'Home',
    },
    {
        href: '/about',
        text: 'About Me',
    }
];

const Header = () => {
    return (
        <Flex
            mx='2' my='5'
            alignItems='center'
            justifyContent='space-between'
            p='2'
        >
            {linkElements.map(({ href, text }, index) => (
                <Link href={href} key={index} style={{ textDecoration: "none " }}>
                    <Heading p='2' as='h3' size='md' style={{ textDecoration: 'underline' }}>{text}</Heading>
                </Link>
            ))}

        </Flex>
    );
};

export default Header;;