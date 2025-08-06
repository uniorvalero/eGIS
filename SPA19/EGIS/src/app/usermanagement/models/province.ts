export interface IProvince {
  id: number;
  provinceName: string;
  countryId: number;
}
export type createProvinceDto = 'provinceName' | 'countryId';