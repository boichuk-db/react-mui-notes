import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Typography,
  Box,
  Avatar,
} from "@mui/material";
import { DeleteOutlined } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import { yellow, green, pink, blue } from "@mui/material/colors";

const useStyles = makeStyles({
  avatar: {
    backgroundColor: (note) => {
      if (note.category == "work") {
        return yellow[700] + "!important";
      }
      if (note.category == "money") {
        return green[500] + "!important";
      }
      if (note.category == "todos") {
        return pink[500] + "!important";
      }
      return blue[500] + "!important";
    },
  },
});

export default function NoteCard({ note, handleDelete }) {
  const classes = useStyles(note);
  return (
    <Box>
      <Card elevation={2}>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar}>
              {note.category[0].toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton onClick={() => handleDelete(note.id)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />

        <CardContent>
          <Typography variant="body2">{note.details}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
