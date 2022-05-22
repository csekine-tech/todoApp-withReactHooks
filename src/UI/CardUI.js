import * as React from "react";
import Box from "@mui/material/Box";
import { Card, CardContent } from "@mui/material/";

const CardUI = (props) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>{props.children}</CardContent>
    </Card>
  );
};
export default CardUI;
