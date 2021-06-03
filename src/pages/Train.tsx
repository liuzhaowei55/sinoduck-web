import { Box } from "@material-ui/core";
import React from "react";
import { TrainTicket as TrainTicketType } from "../index";
import TrainTicket from "../components/TrainTicket";

export default function Train() {
  const trainTicket: TrainTicketType = {
    train_date: "2020-01-01",
    station_train_code: "G40",
    from_station_name: "深圳",
    from_station_date: "2020-01-01",
    from_station_time: "11:00",
    to_station_name: "南阳",
    to_station_date: "2020-01-02",
    to_station_time: "15:00",
  };
  return (
    <Box>
      <TrainTicket {...trainTicket} />
      <TrainTicket {...trainTicket} />
    </Box>
  );
}
