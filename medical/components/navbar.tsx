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
  IconPhoneCall,
  IconMail,
  IconLocation,
  IconLocationBroken,
  IconCurrentLocation,
} from "@tabler/icons-react";

export default function HeaderMegaMenu() {
  return (
    <Container size="xl" style={{ backgroundColor: "#FBFBFB" }} sx={() => ({
      "@media (max-width: 800px)": { display: "none" },
    })}>
      {/* <Box pb={120}> */}
      <Header
        height={80}
        px="md"
        style={{ border: "0px", backgroundColor: "#FBFBFB" }}
        fixed
      >
        <Group position="apart" sx={{ height: "100%" }} px="6%">
          <Stack spacing={0}>
            <Group>
              <IconMail size={18} color="#ED3237" />
              <Text size={18} color="#343434" weight={400}>
                sale@medi-waves.com
              </Text>
            </Group>
            <Group>
              <IconCurrentLocation size={18} color="#ED3237" />
              <Text size={18} color="#343434" weight={400}>
                B-68, G.T. Karnal Road Industrial Area, Delhi-110033
              </Text>
            </Group>
          </Stack>
          <Stack spacing={0} sx={{alignItems:'end'}}>
            <Group>
              <IconPhoneCall size={18} color="#ED3237"style={{marginRight:'12px'}} />
              <Text size={18} color="#343434" weight={400} sx={{cursor:'pointer'}}>
                9811072024
              </Text>
            </Group>

            <Group>
              <Text size={20} color="#ED3237" weight={700} sx={{cursor:'pointer'}}>
                call us
              </Text>
              <Text size={18} color="#343434" weight={400} sx={{cursor:'pointer'}}>
                0130-6542024
              </Text>
            </Group>
          </Stack>
          <Group spacing={30}>
            <Group spacing={0} sx={{cursor:'pointer'}}>
            <Text size={16} color="#646464"  weight={600} >
              English
            </Text><IconChevronDown size={14} stroke={1.5} />
            </Group>
            <Text size={16} color="#646464" weight={600} sx={{cursor:'pointer'}}>
              My Account
            </Text>
          </Group>
        </Group>
      </Header>
      {/* </Box> */}
    </Container>
  );
}
