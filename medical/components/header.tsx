import {
    createStyles,
    Header,
    HoverCard,
    Group,
    Button,
    UnstyledButton,
    Text,
    SimpleGrid,
    ThemeIcon,
    Anchor,
    Divider,
    Center,
    Box,
    Stack,
    Burger,
    Drawer,
    Collapse,
    ScrollArea,
    rem,
    Container,
  } from "@mantine/core";
  
  import { useDisclosure } from "@mantine/hooks";
  import {
    IconNotification,
    IconCode,
    IconBook,
    IconChartPie3,
    IconFingerprint,
    IconCoin,
    IconChevronDown,
  } from "@tabler/icons-react";
  
  export function MenuBar() {
    return (
        <>
      <Container size="xl">
        {/* <Box pb={120}> */}
        <Header height={60} px="md" fixed>
          <Group position="apart" sx={{ height: "100%" }}>
              <Text>Medi-Waves Inc.</Text>
            <Stack sx={{ height: "100%" }} spacing={0}>
              <Text>9811072024</Text>
              <Text>0130-6542024</Text>
            </Stack>
            <Group>
              <Button variant="default">Log in</Button>
              <Text>English</Text>
              <Text>My Account</Text>
            </Group>
          </Group>
        </Header>
        {/* </Box> */}
      </Container>
      </>
    );
  }
  