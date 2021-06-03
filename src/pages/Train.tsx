import { Box, SpeedDial, SpeedDialAction, SpeedDialIcon } from "@material-ui/core";
import React from "react";
import { TrainTicket as TrainTicketType } from "../index";
import TrainTicket from "../components/TrainTicket";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";

export default function Train() {
  const trainTicket: TrainTicketType = {
    train_date: "2020-01-01",
    station_train_code: "G40",
    from_station_name: "深圳",
    from_station_date: "2020-01-01",
    from_station_time: "11:00",
    to_station_name: "南阳",
    to_station_date: "2020-01-01",
    to_station_time: "15:00",
  };
  return (
    <Box>
      <TrainTicket {...trainTicket} />
      <TrainTicket {...trainTicket} />
      <SpeedDial
        ariaLabel="快速操作"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon openIcon={<EditIcon />} />}
      >
        <SpeedDialAction key="key" icon={<AddIcon />} tooltipOpen tooltipTitle="添加" />
      </SpeedDial>
    </Box>
  );
}
