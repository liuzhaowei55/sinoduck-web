import { Box, Card, CardContent, Grid, Typography } from "@material-ui/core";
import TrendingFlatIcon from "@material-ui/icons/TrendingFlat";
import React from "react";

export default function TrainTicket() {
  return (
    <Box>
      <Card variant="outlined">
        <CardContent>
          <Typography>乘车日期：2020-01-01</Typography>
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
