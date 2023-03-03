import {
  createStyles,
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
  Stack,
  Paper,
  Card,
  rem,
  SimpleGrid,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import image from "./image.svg";
import CategoryMenu from "./category-menu";


export default function HeroBullets() {
  return (
   <div style={{backgroundColor: "white" ,alignItems:'flex-start'}}>
    <Group position="left" align='flex-start' sx={{height:'100%'}}  py='xl'>
        <Card
          sx={{
            width: "26%",
           height:'100%',
            borderRadius: "12px",
          }}
        >
          <Container size="lg" sx={{alignItems:'flex-start'}}>
            <Group position="right">
              <CategoryMenu/>
            </Group>
          </Container>
        </Card>
        {/* <div style={{ backgroundColor: "#F6F6F6",width:'72%' }} > */}
          <Paper sx={() => ({ backgroundColor: "#F6F6F6",width:'72%',
              "@media (max-width: 800px)": { display:'100%',backgroundColor: "#F6F6F6", },
            })}>
                <SimpleGrid cols={2} py='xl' px='7%' breakpoints={[
        { maxWidth: 'md', cols: 1 },
      ]}>
                <Stack>
                  <Title
                sx={{ fontFamily:'Space Grotesk', lineHeight: "55px" }}
                size={60}
                color="#1F1F1F"
                weight={700}
               
              >
                Transforming
                <Text span color="#ED3237" sx={{fontFamily:'Bebas Neue'}} inherit>
               <br /> Healthcare
                </Text>
              </Title>
            
                  <List
                    spacing="sm"
                    size="sm"
                    icon={
                      <ThemeIcon
                        size={20}
                        radius="xl"
                        color="cyan"
                        sx={{ backgroundColor: "#00cc66" }}
                      >
                        <IconCheck size={rem(12)} stroke={5} />
                      </ThemeIcon>
                    }
                  >
                    <List.Item>
                    <Text
                        weight={400}
                        size={16}
                        color="#545454"
                        sx={{ lineHeight: "14.72px" }}
                      >
                        Advanced Multi-faceted Search
                      </Text>
                    </List.Item>
                    <List.Item>
                      <Text
                        weight={400}
                        size={16}
                        color="#545454"
                        sx={{ lineHeight: "14.72px" }}
                      >
                        Private Selling - Preferred Groups
                      </Text>
                    </List.Item>
                    <List.Item>
                      <Text
                        weight={400}
                        size={16}
                        color="#545454"
                        sx={{ lineHeight: "14.72px" }}
                      >
                        Pricing Rules
                      </Text>
                    </List.Item>
                    <List.Item>
                      <Text
                        weight={400}
                        size={16}
                        color="#545454"
                        sx={{ lineHeight: "14.72px" }}
                      >
                        Department Setup - Group Builder
                      </Text>
                    </List.Item>
                  </List>
                  
                  <Button
                      radius="sm"
                      sx={{ backgroundColor: "#ED3237",width:'40%' }}
                      size="md"
                      uppercase
                    >
                      get in touch
                    </Button>
                    </Stack>
                 
                  <Group>
                  <Image height={398}  src="../hero.png" />
                  </Group>
                </SimpleGrid>
                </Paper>
            {/* </div> */}
      </Group>
   </div>
  );
}
