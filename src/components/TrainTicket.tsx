import { Box, Card, CardContent, Grid, Typography } from "@material-ui/core";
import TrendingFlatIcon from "@material-ui/icons/TrendingFlat";
import React from "react";
import { TrainTicket as TrainTicketType } from "../index";

export default function TrainTicket(trainTicket: TrainTicketType) {
  return (
    <Box mt={1} mb={1}>
      <Card variant="outlined">
        <CardContent>
          <Typography>乘车日期：{trainTicket.train_date}</Typography>
          <Grid container direction="row" spacing={1}>
            <Grid item xs>
              <Typography align="left">深圳</Typography>
              <Typography align="left" variant="h6">
                14:00
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography align="center">K536</Typography>
              <Typography align="center">
                <TrendingFlatIcon />
              </Typography>
            </Grid>
            <Grid item xs justifyContent="right">
              <Typography align="right">南阳</Typography>
              <Typography align="right" variant="h6">
                11:52<sup>+1</sup>
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
}
