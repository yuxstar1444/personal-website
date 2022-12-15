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
}

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