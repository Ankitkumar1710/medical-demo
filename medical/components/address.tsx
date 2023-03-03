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
} from "@mantine/core";
import Form from "./form";
import { Footer } from "./footer";

export default function Address() {
  return (
    <>
    <div style={{backgroundColor:'#FFFBFB', marginTop:'40px'}}>
      <Container size="lg" py='xl' >
        <SimpleGrid cols={2} sx={{alignItems:'flex-start'}} breakpoints={[
        { maxWidth: 'md', cols: 1, spacing: 'sm' }
      ]}>
          <Group mx='auto'>
          <Stack spacing={3}>
            <Text weight={700} size={32} color="#1C1C1C" pb='sm'>
              Corporate Office-
            </Text>
                <Text weight={400} size={22}>B-68, G.T. Karnal Road Industrial Area, Delhi-110033</Text>
                <Text weight={400} size={22}>sales@medi-waves.com</Text>
                <Text weight={400} size={22}>+91-9811072024, +91-11-42384227</Text>
                <Text weight={700} size={32} color="#1C1C1C" pb='sm' pt={32}>
              Corporate Office-
            </Text>
                <Text weight={400} size={22}>B-68, G.T. Karnal Road Industrial Area, Delhi-110033</Text>
                <Text weight={400} size={22}>sales@medi-waves.com</Text>
                <Text weight={400} size={22}>+91-9811072024, +91-11-42384227</Text>
                <Title  size={15} color='#1B1B1B' weight={400} sx={{lineHeight:'18px'}} py={30} order={3}><Text span color="#9A292C" inherit>Transforming :</Text> Please beware of persons / companies claiming to be our agents / warehouses anywhere in the world, please check the genuinity by contacting on the Mobile Number (+91-9811072024) given here on the website</Title>
            </Stack>
            
          </Group>
          <Group>
         <Form/>
          </Group>
        </SimpleGrid>
      </Container>
      
    </div>
    </>
  );
}
