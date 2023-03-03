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
  Title,
  Stack,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  Container,
  TextInput,
  Image,
} from "@mantine/core";
import Form from "./form";
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

export default function Footer() {
  return (
    <div style={{ backgroundColor: "white",}}>
    <div style={{ backgroundColor: "#F4F4F4",marginTop:'40px'}}>
      <Container size="lg" py="xl">
        <Group py={50}>
          <Image width={125} height={38} src="../logo.png" />
        </Group>
        <SimpleGrid cols={4} pb='lg' breakpoints={[
        { maxWidth: '62rem', cols: 3, spacing: 'md' },
        { maxWidth: '48rem', cols: 2, spacing: 'sm' },
        { maxWidth: '36rem', cols: 1, spacing: 'sm' },
      ]} sx={{ alignItems: "flex-start",}}>
          <Stack>
            <Text weight={700} size={24} color="#1C1C1C">
              About us
            </Text>
            <Text
              size={16}
              weight={400}
              color="#171717"
              sx={{ lineHeight: "25px" }}
            >
              The Company Medi Waves Inc. was established in the year 2000, with
              its head office located at Industrial Hub of Delhi and
              manufacturing unit at HSIIDC, Haryana.
            </Text>
          </Stack>
          <Stack>
            <Text weight={700} size={24} color="#1C1C1C">
              Contact info
            </Text>
            <Text
              size={16}
              weight={400}
              color="#171717"
              sx={{ lineHeight: "25px" }}
            >
              Phone: 0130-6542024 Corp Office: B-68, G.T. Karnal Road Industrial
              Area, Delhi - 110033
            </Text>
          </Stack>
          <Stack spacing={10}>
            <Text weight={700} size={24} color="#1C1C1C">
            Important link
            </Text>
            <Text
              size={16}
              weight={400}
              color="#171717"
              sx={{ lineHeight: "25px",cursor:'pointer' }}
            >
             Home
            </Text>
            <Text
              size={16}
              weight={400}
              color="#171717"
              sx={{ lineHeight: "25px",cursor:'pointer' }}
            >
             Product Range
            </Text>
            <Text
              size={16}
              weight={400}
              color="#171717"
              sx={{ lineHeight: "25px",cursor:'pointer' }}
            >
             Quality
            </Text>
            <Text
              size={16}
              weight={400}
              color="#171717"
              sx={{ lineHeight: "25px",cursor:'pointer' }}
            >
             Blog
            </Text>
            <Text
              size={16}
              weight={400}
              color="#171717"
              sx={{ lineHeight: "25px",cursor:'pointer' }}
            >
             Cart
            </Text>
          </Stack>
          <Group>
            <Text weight={700} size={24} color="#1C1C1C">
            Social Media
            </Text>
            <Group>
            <Image width={32} height={32} style={{cursor:'pointer'}} src='../facebook.svg'/>
            <Image width={32} height={32} style={{cursor:'pointer'}} src='../instagram.svg'/>
            <Image width={32} height={32} style={{cursor:'pointer'}} src='../twitter.svg'/>
            </Group>
          </Group>
        </SimpleGrid>
        <Divider my="sm" color='#D9D9D9' />
        <Group position="center" pt='md' style={{border:'2px'}}>
       
            <Text weight={700} size={12} sx={{borderTop:'1px'}}>Copyright © 2023 Medi Waves Inc.</Text>
        </Group>
      </Container>
    </div>
    </div>
  );
}
