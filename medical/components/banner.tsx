import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  SimpleGrid,
  Stack,
  Title,
  Container,
} from "@mantine/core";

export default function Banner() {
  return (
    <div>
      <Group position="left" align='flex-start' mt={40} spacing={30}>
        <Card
          sx={{
            background: "#FFFBEB",
            width: "38%",
            height: "520px",
            borderRadius: "12px",
          }}
        >
          <Container size="lg">
            <Group position="right">
              <Title
                sx={{ width: "80%", lineHeight: "45px" }}
                size={46}
                color="#1F1F1F"
                weight={700}
                order={3}
              >
                We've thought of everything for{" "}
                <Text span color="#ED3237" inherit>
                  Medical Equipment
                </Text>
              </Title>
              <Text
                size={20}
                weight={400}
                sx={{ lineHeight: "30px", width: "80%" }}
              >
                We are devoted to providing a one stop sales model to customer;
                we give more important care to customer’s satisfaction. Our
                vision is providing the world class products and service
                improving health-care system worldwide to the top level.
              </Text>
            </Group>
          </Container>
        </Card>
        <Stack>
          <Image
            width={286}
            height={252}
            sx={{ cursor: "pointer" }}
            src="../Cards.png"
          />
          <Image
            width={286}
            height={252}
            sx={{ cursor: "pointer" }}
            src="../Cards (1).png"
          />
        </Stack>
        <Stack>
          <Card
            sx={{
              background: "#47B2E0",
              width: "340px",
              height: "440px",
              borderRadius: "12px",
            }}
          >
            <Text color="#064864" weight={700} size={15} py='xs'>
              Hospital Furniture
            </Text>
            <Text color="#FFFFFF" weight={700} size={27}>
              Hospital Furniture
            </Text>
            <Text color="#FFFFFF" weight={400} size={16}>
              Incubators are clear boxes which help keep your baby warm.
              Premature or sick babies can struggle to stay warm on their own.
            </Text>
            <Group position="right" align="flex-end" pt='xl'>
              <Image height={210} width={210} src="../baby.png" />
              <Image width={30} sx={{cursor:'pointer'}} src="../Line 8.png" />
            </Group>
          </Card>
          <Button sx={{ height: "60px", backgroundColor: "#9FE0FC" }} fullWidth>
            <Text color='#075A7D' weight={400} size={20}>View All</Text>
          </Button>
        </Stack>
      </Group>
    </div>
  );
}
