import { Badge, Stack, Text } from '@chakra-ui/react';
import React from 'react';

const skillsList = [
    {
        id: 1,
        name: 'ReactJS',
        colorHex: '#61DAFB'
    }, {
        id: 2,
        name: 'JavaScript',
        colorHex: '#F7DF1E'
    }, {
        id: 3,
        name: 'HTML',
        colorHex: '#E34F26'
    }, {
        id: 4,
        name: 'CSS',
        colorHex: '#1572B6'
    }, {
        id: 5,
        name: 'Bootstrap',
        colorHex: '#7952B3'
    }, {
        id: 6,
        name: 'Material UI',
        colorHex: '#0081CB'
    }, {
        id: 7,
        name: 'Chakra UI',
        colorHex: '#319795'
    }, {
        id: 8,
        name: 'Git',
        colorHex: '#F05032'
    }, {
        id: 9,
        name: 'GitHub',
        colorHex: '#181717'
    }, {
        id: 10,
        name: 'VS Code',
        colorHex: '#007ACC'
    }
];


const SkillComponent = () => {
    return (
        <>
            <Text fontSize='2xl' textAlign='left' mt='5'>Skills</Text>
            <Text fontSize='xl' textAlign='left'>
                I have worked with the following technologies: <br />
            </Text>

            <Stack direction='row' mt='2'>
                {skillsList.map((item, index) => (
                    <Badge
                        key={index}
                        fontSize='0.9rem'
                        style={{
                            backgroundColor: item.colorHex,
                            color: 'white',
                            border: 'none',
                            borderRadius: '2px',
                        }}
                    >
                        {item.name}
                    </Badge>
                ))}
            </Stack>


        </>
    );
};

export default SkillComponent;