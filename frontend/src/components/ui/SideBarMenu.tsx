// 나중에 프로젝트 확장시 사이드 바 추가하자

import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@/src/asset/icons/Menu.svg";
import ReservationIcon from "@/src/asset/icons/reservationIcon.svg";
import DropdownIcon from "@/src/asset/icons/arrowDropDown.svg";

export default function SideBarMenu() {
  const [open, setOpen] = React.useState(false);
  const [showReservation, setShowReservation] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const toggleReservationStatus = () => {
    setShowReservation((prev) => !prev);
  };

  const menus = [
    {
      name: "예약하기",
      icon: ReservationIcon,
      isDropdown: true,
      onClick: toggleReservationStatus,
    },
  ];

  const DrawerList = (
    <Box sx={{ width: 180 }} role="presentation">
      <List>
        {menus.map((text) => (
          <ListItem key={text.name} disablePadding>
            <ListItemButton
              onClick={text.onClick}
              sx={{
                padding: "0",
                margin: "10px",
                border: "solid #adadad 0.1px",
                borderRadius: "10px",
                paddingLeft: "10px",
              }}
            >
              <text.icon />
              <ListItemText
                primary={text.name}
                primaryTypographyProps={{
                  style: {
                    fontSize: "20px",
                    fontWeight: "bold",
                    textAlign: "center",
                    width: "100px",
                  },
                }}
              />
              {text.isDropdown && <DropdownIcon />}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <Menu />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
