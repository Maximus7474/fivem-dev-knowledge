import React from "react";
import { Container, Title, Text, Button, Group } from "@mantine/core";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container size="md" style={{ textAlign: "center", padding: "2rem", height: '33vh', margin: 'auto' }}>
      <Title order={1} mb="lg">
        Welcome to FiveM Dev Quiz!
      </Title>
      <Text size="lg" mb="md">
        Come test your knowledge, can you call yourself a FiveM dev or not ?
      </Text>
      <Text size="md" c="dimmed" mb="lg">
        This website is an interactive way to test your knowledge accross various fields including:
        server setup, good coding practices and various features from the different runtimes.
      </Text>
      <Group justify="center" mt="xl">
        <Button variant="filled" size="lg" onClick={() => navigate("/quiz")}>
          Start Quiz
        </Button>
      </Group>
    </Container>
  );
};

export default Home;
