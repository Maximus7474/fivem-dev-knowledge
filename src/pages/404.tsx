import { Button, Title, Text, Center, Image, useMantineColorScheme } from '@mantine/core';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    const { colorScheme } = useMantineColorScheme()

    return (
        <Center style={{ flexDirection: 'column', padding: '2em', margin: 'auto 0' }}>
            <Title order={1} style={{ fontSize: '3rem' }}>
                404 - Page Not Found
            </Title>
            <Button component={Link} to="/" variant="outline" size="md">
                Back Home
            </Button>
        </Center>
    );
};

export default NotFoundPage;
