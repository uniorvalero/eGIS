export interface ICity {
  id: number;
  cityName: string;
  provinceId: string;
}
export type createCityDto = 'cityName' | 'provinceId';