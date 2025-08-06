export interface IAddress {
  id: number;
  addressLine1: string; 
  buildingName: string; //Room/Floor/Unit/Building name
  houseNo: string; // House/Block/Lot number
  subdivision: string; // Subdivision/Barangay name
  countryId: number;
  provinceId: number;
  cityId: number;
  barangayId: number;
  userId: number;
}

export type createAddressDto = Omit<IAddress, 'addressLine1' | 'buildingName' | 'houseNo' | 'subdivision' 
    | 'countryId' | 'provinceId' | 'cityId' | 'barangayId'>;
