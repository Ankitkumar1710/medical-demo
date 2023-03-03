import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  SimpleGrid,
  Container,
} from "@mantine/core";

export default function BlogCard() {
  return (
    <>
      <Container size='lg' mt={40}>
        <Group position="left" spacing={35}>
            <Card
              px="28px"
              padding="xl"
              style={{
                width: "390px",
                height: "500px",
                background:
                  " linear-gradient(180deg, #FFF2D0 0%, #FFFBF2 100%)",
              }}
              radius="md"
            >
              <Card.Section pt="xl" px="28px">
                <Image height={217} src="../cardimg1.png" />
              </Card.Section>

              <Group mt="xs" mb="xs">
                <Text
                  weight={700}
                  size={24}
                  color="#F8474C"
                  sx={{ lineHeight: "26px" }}
                >
                  How To Measure Blood Pressure At Home?
                </Text>
              </Group>

              <Text size={14} weight={400} sx={{ lineHeight: "22px" }}>
                Hypertension is called the silent killer because most of us are
                suffering from hypertension or High blood pressure. Even if we
                don’t feel its symptoms then also there are chances you have
                high blood pressure.
              </Text>

              <Group position="right" mt="xs">
                <Button
                  type="submit"
                  variant="subtle"
                  rightIcon={
                    <Image src="../arrow.png" style={{ marginLeft: "16px" }} />
                  }
                >
                  <Text color="#E35A5E" sx={{cursor:'pointer'}} weight={700}>
                    Read More
                  </Text>
                </Button>
              </Group>
            </Card>
          
            <Card
              px="28px"
              padding="xl"
              style={{
                width: "390px",
                height: "500px",
                background:
                  " linear-gradient(180deg, #FFF2D0 0%, #FFFBF2 100%)",
              }}
              radius="md"
            >
              <Card.Section pt="xl" px="28px">
                <Image height={217} src="../cardimg1.png" />
              </Card.Section>

              <Group mt="xs" mb="xs">
                <Text
                  weight={700}
                  size={24}
                  color="#F8474C"
                  sx={{ lineHeight: "26px" }}
                >
                  How To Measure Blood Pressure At Home?
                </Text>
              </Group>

              <Text size={14} weight={400} sx={{ lineHeight: "22px" }}>
                Hypertension is called the silent killer because most of us are
                suffering from hypertension or High blood pressure. Even if we
                don’t feel its symptoms then also there are chances you have
                high blood pressure.
              </Text>

              <Group position="right" mt="xs">
                <Button
                  type="submit"
                  variant="subtle"
                  rightIcon={
                    <Image src="../arrow.png" style={{ marginLeft: "16px" }} />
                  }
                >
                  <Text color="#E35A5E" sx={{cursor:'pointer'}} weight={700}>
                    Read More
                  </Text>
                </Button>
              </Group>
            </Card>
          <Card
            sx={() => ({
              width: "101px",
              height: "500px",
              background: " linear-gradient(180deg, #FFF2D0 0%, #FFFBF2 100%)",
              "@media (max-width: 800px)": { display: "none" },
            })}
            radius="md"
          >
            <Group mt="200px" sx={{cursor:'pointer'}}>
              <Text
                weight={600}
                size={18}
                color="#CF9706"
                sx={{ lineHeight: "20px", alignItems: "center" }}
              >
                View all
              </Text>
            </Group>
          </Card>
        </Group>
      </Container>
    </>
  );
}
