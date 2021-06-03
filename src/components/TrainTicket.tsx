import { Box, Card, CardContent, CardHeader, Grid, Typography, IconButton } from "@material-ui/core";
import TrendingFlatIcon from "@material-ui/icons/TrendingFlat";
import React, { createRef } from "react";
import { TrainTicket as TrainTicketType } from "../index";
import { differenceInDays, parse } from "date-fns";
import GetAppIcon from "@material-ui/icons/GetApp";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";

export default function TrainTicket(trainTicket: TrainTicketType) {
  const boxRef = createRef();
  const download = () => {
    html2canvas(boxRef.current, {}).then((canvas) => {
      const name =
        trainTicket.from_station_date + "-" + trainTicket.from_station_name + "-" + trainTicket.to_station_name;
      saveAs(canvas.toDataURL("image/png"), `${name}.png`);
    });
  };
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
    <Box mt={1} mb={1} ref={boxRef}>
      <Card variant="outlined">
        <CardHeader
          action={
            <IconButton aria-label="settings" onClick={download}>
              <GetAppIcon />
            </IconButton>
          }
          title={`乘车日期：${trainTicket.train_date}`}
        />
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
