import React, { useEffect, useState} from 'react';
import {Flex, Heading, useClipboard, useToast, Text} from '@chakra-ui/react';
import Introduction from '../sections/Introduction';
import Photo from '../ui/Photo';


const About = () => {
    const[clipboardValue, setClipboardValue] = useState (
        'yuxstar1444@proton.me'
    );
    const {hasCopied, onCopy} = useClipboard(clipboardValue);
    const toast = useToast();

    const handleCopyAndToast = () => {
        onCopy();
        toast({
            title: 'Email copied.',
            status: 'success',
            duration: 3000,
            isClosable: true,
            postion: 'bottom-left',
        });
    };

    useEffect(() => {
        document.title = 'About Ash Chen!'
    }, []);

    return (
        <>
        <Flex mb = "4rem" direction ="row" w = "100%" justify = "center" as = "main">
            <Flex className = "container" direction = "column" w = {{base: '90%', lg: '80%', x1: '1040px'}} align = "center">
                <Heading mt = "2rem" fontWeight = "900" fontSize = {{base: '4x1'}} as = "h1">
                    About {' '}
                    <Text color = "primary" as = "span"></Text>
                </Heading>
                <Photo mt = "1.5rem" />
                <Introduction onClick = {handleCopyAndToast}/>
                <Skills skills = {skills} mt = "4rem" />
                <RandomFacts mt = "1.5rem" />
            </Flex>
        </Flex>
        <Footer />
        </>
     );
};

export default About;