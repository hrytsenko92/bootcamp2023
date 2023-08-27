export interface dataType {
  id: number;
  image_id: string;
  sub_id: null;
  created_at: Date;
  value: number;
  country_code: CountryCode;
  image: Image;
}

export enum CountryCode {
  Ua = 'UA',
}

export interface Image {
  id: string;
  url: string;
}
