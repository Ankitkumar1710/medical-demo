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
    Image,
    Collapse,
    ScrollArea,
    rem,
    Container,
    TextInput,
  } from "@mantine/core";

  
  export default function Certificate() {
    return (
      <>
      <div style={{backgroundColor:'#FFF5F5', marginTop:'40px'}}>
        <Container size="lg" pt='5%' pb='7%' >
          <Group position="center">
          <Text weight={700} size={40}>Quality Certificates</Text>
          </Group>
          <SimpleGrid cols={2} mt='8%' sx={{alignItems:'center'}} breakpoints={[
          { maxWidth: 'md', cols: 1,}
        ]}>
            <Group mx='auto' >
              <Image width={235} height={332} style={{position:'relative'}} src="../c1.png"/>
              <Image width={251} height={358} ml='sm' style={{position:'absolute'}} src="../c4.png"/>
              <Image width={281} height={390} ml='lg' style={{position:'absolute'}} src="../c2.png"/>
              <Image width={300} height={420} ml='40px' style={{position:'absolute'}} src="../c3.png"/>
            </Group>
            <Group sx={{alignItems:'flex-start'}}  mx='8%' spacing={0}>
           <Group sx={{alignItems:'baseline'}}>
           <Text color='#ED3237' weight={700} size={60} >01</Text>
          <Text color='#ED3237' weight={700} size={32} sx={{lineHeight:'45px'}}>Cabinet de Gestion</Text>
         
           </Group>
          <Text weight={400} size={22} sx={{lineHeight:'28px'}}>Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. 
</Text>
            </Group>
          </SimpleGrid>
        </Container>
        
      </div>
      </>
    );
  }
  