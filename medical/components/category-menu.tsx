import { Badge, Box, NavLink, Text, Button, Burger,Image } from "@mantine/core";
import {
  IconHome2,
  IconGauge,
  IconChevronRight,
  IconActivity,
  IconCircleOff,
} from "@tabler/icons-react";

export default function CategoryMenu() {
  return (
    <Box w={240} sx={() => ({
      "@media (max-width: 800px)": { display: "none" },
    })} >
      <Button
      leftIcon={<Burger />}
        radius="sm"
        sx={{ backgroundColor: "#ED3237", width:'100%'}}
        size="lg"
        uppercase
      >
        Product Range
      </Button>
      <NavLink
      py='sm'
        label="Respiratory"
        sx={{ borderBottom: "1px solid #F2F2F2" }}
        icon={<IconHome2 size="24px" stroke={1.5} />}
      />
      <NavLink
      py='sm'
        sx={{ borderBottom: "1px solid #F2F2F2" }}
        label="Blood Pressure Monitor"
        icon={<IconGauge size="24px" stroke={1.5} />}
      />
      <NavLink
      py='sm'
        sx={{ borderBottom: "1px solid #F2F2F2" }}
        label="Mortuary Scale"
        icon={<IconCircleOff size="24px" stroke={1.5} />}
      />
      <NavLink
        label="Doppler"
        sx={{ borderBottom: "1px solid #F2F2F2" }}
        icon={<IconHome2 size="24px" stroke={1.5} />}
      />
      <NavLink py='sm' label="PPE"  sx={{ borderBottom: "1px solid #F2F2F2" }} icon={<IconGauge size="24px" stroke={1.5} />} />
      <NavLink
      py='sm'
        label="Hospital Furniture"
        sx={{ borderBottom: "1px solid #F2F2F2" }}
        icon={<IconCircleOff size="24px" stroke={1.5} />}
      />
      <Button mt='sm' type="submit" variant="subtle"  rightIcon={
                    <Image src="../arrow.png" style={{ marginLeft: "16px" }} />
                  }>
        <Text color="#E35A5E">More Categories</Text>
      </Button>
    </Box>
  );
}
