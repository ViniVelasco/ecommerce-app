import { CityDTO } from "./city.dto";

export  interface AddressDTO {
  id : string;
  logradouro: string;
  number: string;
  complement: string;
  cep: string;
  bairro: string;
  city: CityDTO;
}
