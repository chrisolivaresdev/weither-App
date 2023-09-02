export interface weatherData {
  weather:    Weather[];
  main:       Main;
  wind:       Wind;
  sys:        Sys;
  name:       string;
}

export interface Coord {
  longitude: number;
  latitude: number;
}

 interface Main {
  temp:       number;
  feels_like: number;
  temp_min:   number;
  temp_max:   number;
  pressure:   number;
  humidity:   number;
}

 interface Sys {
  type:    number;
  id:      number;
  country: string;
  sunrise: number;
  sunset:  number;
}

 interface Weather {
  id:          number;
  main:        string;
  description: string;
  icon:        string;
}

 interface Wind {
  speed: number;
  deg:   number;
}
