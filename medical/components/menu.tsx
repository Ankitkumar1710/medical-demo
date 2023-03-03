import {
    createStyles,
    Header,
    HoverCard,
    Group,
    Button,
    UnstyledButton,
    Text,
   Title,
    Stack,
    Burger,
    Drawer,
    Collapse,
    Input,
    rem,
    Image,
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
    IconSearch,
  } from "@tabler/icons-react";
  
  export default function MenuBar() {
    return (
        <>
      <Container size="xl" sx={() => ({
              "@media (max-width: 800px)": { display: "none" },
            })}>
        {/* <Box pb={120}> */}
        <Header height={60} px="md" py='xs' style={{backgroundColor:'white',border:"0px" }} mt={80}>
          <div style={{ height: "100%", }}>
            <Group position="apart" px='4%'>
              {/* <Text>Medi-Waves Inc.</Text> */}
              <Image width={134}  src="../logo1.png"/>
              
            <Stack  spacing={0} style={{width:"40%"}}>
              <Input placeholder="search here" radius='md' sx={{ height: "100%" }} py='xs' rightSection={<IconSearch size={16} stroke={1.5} color='#EA6D70' style={{marginRight:'20%'}} />} />
            </Stack>
            
            <Group position="right" spacing={40}>
              <Text weight={600} size={18} color='#262626'>Quality</Text>
              <Text weight={600} size={18} color='#262626'>Blog</Text>
              <Title
                weight={600} size={18} color='#262626'
               
              >
                Cart
                <Text span color="#ED3237" pl={2} inherit>
              (2)
                </Text>
              </Title>
            </Group>
            </Group>
            </div>
        </Header>
      </Container>
      </>
    );
  }
  