import React from "react";
import { makeStyles } from "@mui/styles";
import {
  Drawer,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  AppBar,
  Toolbar,
  Box,
  Avatar,
} from "@mui/material";
import { AddCircleOutlineOutlined, SubjectOutlined } from "@mui/icons-material";
import { useHistory, useLocation } from "react-router-dom";
import { format } from "date-fns";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: "flex",
    },
    page: {
      width: "100%",
      background: "#FAF8F5",
      padding: theme.spacing(3),
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    active: {
      background: "#f4f4f4",
    },
    tittle: {
      padding: theme.spacing(3),
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px) !important`,
      marginLeft: `${drawerWidth}px`,
    },
    toolbar: theme.mixins.toolbar,
    date: {
      flexGrow: 1,
    },
    avatar: {
      marginLeft: theme.spacing(2),
    },
  };
});

export default function Layout({ children }) {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const menuItems = [
    {
      text: "My Notes",
      icon: <SubjectOutlined color="primary" />,
      path: "/",
    },
    {
      text: "Create Note",
      icon: <AddCircleOutlineOutlined color="primary" />,
      path: "/create",
    },
  ];

  return (
    <Box className={classes.root}>
      {/* app bar */}
      <AppBar className={classes.appBar} elevation={1} position="fixed">
        <Toolbar>
          <Typography className={classes.date}>
            Today is the {format(new Date(), "do MMMM Y")}
          </Typography>
          <Typography>Quasar</Typography>
          <Avatar src="/user.jpg" className={classes.avatar} />
        </Toolbar>
      </AppBar>
      {/* side drawer */}

      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <Box>
          <Typography variant="h4" className={classes.tittle}>
            Denys Notes
          </Typography>
        </Box>

        {/* list */}
        <List>
          {menuItems.map((item) => (
            <Box
              className={location.pathname == item.path ? classes.active : null}
              key={item.text}
            >
              <ListItem
                button
                onClick={() => history.push(item.path)}
                //   selected={location.pathname === item.path}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            </Box>
          ))}
        </List>
      </Drawer>

      <Box className={classes.page}>
        <Box className={classes.toolbar}></Box>
        {children}
      </Box>
    </Box>
  );
}
