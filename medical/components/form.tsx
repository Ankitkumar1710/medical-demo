import {
  TextInput,
  Checkbox,
  Button,
  Group,
  Box,
  Text,
  Textarea,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconMail } from "@tabler/icons-react";

export default function Form() {
  const form = useForm({
    initialValues: {
      email: "",
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  return (
    <Box maw={400} sx={{ width: "100%" }} mx='auto'>
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <Text weight={700} size={45} color="#F85B5F" pb="sm">
          Get In Touch
        </Text>

        <TextInput
          placeholder="Name"
          sx={{ boxShadow: "0px 0px 377.28px 45.73px #FFFFFF;" }}
          radius="lg"
          size="md"
          py="sm"
        />
        <TextInput
          placeholder="Subject"
          sx={{ boxShadow: "0px 0px 377.28px 45.73px #FFFFFF;" }}
          radius="lg"
          size="md"
          py="sm"
        />
        <TextInput
          placeholder="Email"
          sx={{ boxShadow: "0px 0px 377.28px 45.73px #FFFFFF;" }}
          radius="lg"
          size="md"
          py="sm"
          {...form.getInputProps("email")}
        />
        <Textarea
          placeholder="Message"
          style={{ boxShadow: "0px 0px 377.28px 45.73px #FFFFFF;", height:'100px' }}
          radius="lg"
          size="md"
          py="sm"
        />
        <Group position="left" mt="md">
          <Button type="submit" sx={{backgroundColor:'#ED3237', width:'162px'}} rightIcon={<IconMail size="1rem" style={{marginLeft:'16px'}}/>}>Submit </Button>
        </Group>
      </form>
    </Box>
  );
}
