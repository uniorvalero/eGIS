export interface IBarangay {
  id: number;
  barangayName: string;
  zipCode: string;
  cityId: number;
}
export type createBarangayDto = 'barangayName' | 'zipCode' | 'cityId';