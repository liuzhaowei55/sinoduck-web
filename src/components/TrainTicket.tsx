import { Box, Card, CardContent, CardHeader, Grid, Typography, IconButton } from "@material-ui/core";
import TrendingFlatIcon from "@material-ui/icons/TrendingFlat";
import React from "react";
import { TrainTicket as TrainTicketType } from "../index";
import { differenceInDays, parse } from "date-fns";
import MoreVertIcon from "@material-ui/icons/MoreVert";

export default function TrainTicket(trainTicket: TrainTicketType) {
  const DurationDay = () => {
    const fromDate = parse(trainTicket.from_station_date, "yyyy-MM-dd", new Date());
    const toDate = parse(trainTicket.to_station_date, "yyyy-MM-dd", new Date());
    const durationDay = differenceInDays(toDate, fromDate);
    console.log(durationDay);
    if (durationDay > 0) {
      return <sup>+{durationDay}</sup>;
    }
    return <span />;
  };
  return (
    <Box mt={1} mb={1}>
      <Card variant="outlined">
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={`乘车日期：${trainTicket.train_date}`}
        >
          <Typography></Typography>
        </CardHeader>
        <CardContent>
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
                11:52
                <DurationDay />
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
}
