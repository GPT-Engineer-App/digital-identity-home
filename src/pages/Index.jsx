import { Box, Flex, Heading, Image, Link, Text, VStack } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Index = () => {
  return (
    <Box bg="gray.100" minH="100vh" py={20}>
      <Flex maxW="container.lg" mx="auto" direction={{ base: "column", md: "row" }} align="center" justify="center" gap={10}>
        <Image src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbXBsb3llZSUyMHBvcnRyYWl0fGVufDB8fHx8MTcxNDk1ODI4M3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Profile Picture" borderRadius="full" boxSize={{ base: "200px", md: "300px" }} />
        <VStack align="start" spacing={6}>
          <Heading as="h1" size="4xl">
            John Doe
          </Heading>
          <Text fontSize="xl">Software Engineer</Text>
          <Text>I'm a passionate software engineer with a strong background in web development. I love building innovative and user-friendly applications that solve real-world problems.</Text>
          <Flex gap={4}>
            <Link href="https://github.com/johndoe" isExternal>
              <FaGithub size={24} />
            </Link>
            <Link href="https://www.linkedin.com/in/johndoe" isExternal>
              <FaLinkedin size={24} />
            </Link>
            <Link href="https://twitter.com/johndoe" isExternal>
              <FaTwitter size={24} />
            </Link>
          </Flex>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Index;
