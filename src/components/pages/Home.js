import React, { useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import Footer from "../sections/Footer";
import Hero from "../sections/Hero";

const Home = () => {
    useEffect(() =>{
        document.title = "Aster Yu Xiang Chen | Software Engineer";
    });

    return (
        <>
            <Flex w= "100%" h="90vh" justify="center" as = "main">
                <Hero />
            </Flex>
            <Footer />

        </>
    );

};

export default Home;