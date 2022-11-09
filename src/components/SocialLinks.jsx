import { Flex, Icon, Link } from '@chakra-ui/react';

const SocialLinks = ({ colorHex, url, text, logo }) => {
    return (
        <Flex alignItems='center'>
            <Icon as={logo} color={colorHex} />
            <Link
                href={url}
                isExternal
                style={{
                    color: colorHex
                }}
            >{text}</Link>
        </Flex>
    );
};

export default SocialLinks;
