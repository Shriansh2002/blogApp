import { Box, Text } from '@chakra-ui/react';
import SkillComponent from '../components/SkillComponent';
import SocialComponent from '../components/SocialComponent';


const AboutPage = () => {
    return (
        <Box mt={5} >
            <Text fontSize='4xl' textAlign='center'>About Me</Text>
            <Box mx={20}>
                <Text fontSize='2xl' textAlign='left' mt='12'>
                    I am Shriansh Agarwal, a FrontEnd Developer, <br />
                    Currently I am in 2nd Year of my B.Tech in {" "}

                    <span style={{ fontWeight: 'bold' }}> Computer Science and Engineering</span> from {""}
                    <span style={{ fontWeight: 'bold' }}> Galgotias University. </span>
                    <br />

                    I am a self taught FrontEnd Developer and I am working with ReactJS as my domain.
                    <br /> <br />
                </Text>

                <SocialComponent />

                <SkillComponent />
            </Box>
        </Box >
    );
};


export default AboutPage;