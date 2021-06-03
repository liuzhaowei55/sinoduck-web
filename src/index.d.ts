interface Train {
  train_date: string;
  train_type: string;
  station_train_code: string;
  train_no: string;
  from_station_name: string;
  to_station_name: string;
  station_list: Array<Station>;
}
interface Station {
  station_telecode: string;
  station_name: string;
  // 城市编码
  city_code?: string;
  // 到站时间
  arrive_time?: string;
  // 出站时间
  start_time?: string;
  // 停留时间
  stopover_time?: string;
  // 车站在该线路的编号
  station_no?: string;
}

export enum SeatType {
  // 其他座
  MIN,
  // 无座
  WZ,
  // 硬座
  A1,
  // 软座
  A2,
  // 硬卧
  A3,
  // 软卧
  A4,
  // 高级软卧
  A6,
  // 二等座
  O,
  // 一等座
  M,
  // 特等座
  P,
  // 商务座
  A9,
}
