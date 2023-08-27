export type breedsType = {
  id: string;
  name: string;
};

export const allBreeds: breedsType[] = [
  {
    id: 'abys',
    name: 'Abyssinian',
  },
  {
    id: 'aege',
    name: 'Aegean',
  },
  {
    id: 'abob',
    name: 'American Bobtail',
  },
  {
    id: 'acur',
    name: 'American Curl',
  },
  {
    id: 'asho',
    name: 'American Shorthair',
  },
  {
    id: 'awir',
    name: 'American Wirehair',
  },
  {
    id: 'amau',
    name: 'Arabian Mau',
  },
  {
    id: 'amis',
    name: 'Australian Mist',
  },
  {
    id: 'bali',
    name: 'Balinese',
  },
  {
    id: 'bamb',
    name: 'Bambino',
  },
  {
    id: 'beng',
    name: 'Bengal',
  },
  {
    id: 'birm',
    name: 'Birman',
  },
  {
    id: 'bomb',
    name: 'Bombay',
  },
  {
    id: 'bslo',
    name: 'British Longhair',
  },
  {
    id: 'bsho',
    name: 'British Shorthair',
  },
  {
    id: 'bure',
    name: 'Burmese',
  },
  {
    id: 'buri',
    name: 'Burmilla',
  },
  {
    id: 'cspa',
    name: 'California Spangled',
  },
  {
    id: 'ctif',
    name: 'Chantilly-Tiffany',
  },
  {
    id: 'char',
    name: 'Chartreux',
  },
  {
    id: 'chau',
    name: 'Chausie',
  },
  {
    id: 'chee',
    name: 'Cheetoh',
  },
  {
    id: 'csho',
    name: 'Colorpoint Shorthair',
  },
  {
    id: 'crex',
    name: 'Cornish Rex',
  },
  {
    id: 'cymr',
    name: 'Cymric',
  },
  {
    id: 'cypr',
    name: 'Cyprus',
  },
  {
    id: 'drex',
    name: 'Devon Rex',
  },
  {
    id: 'dons',
    name: 'Donskoy',
  },
  {
    id: 'lihu',
    name: 'Dragon Li',
  },
  {
    id: 'emau',
    name: 'Egyptian Mau',
  },
  {
    id: 'ebur',
    name: 'European Burmese',
  },
  {
    id: 'esho',
    name: 'Exotic Shorthair',
  },
  {
    id: 'hbro',
    name: 'Havana Brown',
  },
  {
    id: 'hima',
    name: 'Himalayan',
  },
  {
    id: 'jbob',
    name: 'Japanese Bobtail',
  },
  {
    id: 'java',
    name: 'Javanese',
  },
  {
    id: 'khao',
    name: 'Khao Manee',
  },
  {
    id: 'kora',
    name: 'Korat',
  },
  {
    id: 'kuri',
    name: 'Kurilian',
  },
  {
    id: 'lape',
    name: 'LaPerm',
  },
  {
    id: 'mcoo',
    name: 'Maine Coon',
  },
  {
    id: 'mala',
    name: 'Malayan',
  },
  {
    id: 'manx',
    name: 'Manx',
  },
  {
    id: 'munc',
    name: 'Munchkin',
  },
  {
    id: 'nebe',
    name: 'Nebelung',
  },
  {
    id: 'norw',
    name: 'Norwegian Forest Cat',
  },
  {
    id: 'ocic',
    name: 'Ocicat',
  },
  {
    id: 'orie',
    name: 'Oriental',
  },
  {
    id: 'pers',
    name: 'Persian',
  },
  {
    id: 'pixi',
    name: 'Pixie-bob',
  },
  {
    id: 'raga',
    name: 'Ragamuffin',
  },
  {
    id: 'ragd',
    name: 'Ragdoll',
  },
  {
    id: 'rblu',
    name: 'Russian Blue',
  },
  {
    id: 'sava',
    name: 'Savannah',
  },
  {
    id: 'sfol',
    name: 'Scottish Fold',
  },
  {
    id: 'srex',
    name: 'Selkirk Rex',
  },
  {
    id: 'siam',
    name: 'Siamese',
  },
  {
    id: 'sibe',
    name: 'Siberian',
  },
  {
    id: 'sing',
    name: 'Singapura',
  },
  {
    id: 'snow',
    name: 'Snowshoe',
  },
  {
    id: 'soma',
    name: 'Somali',
  },
  {
    id: 'sphy',
    name: 'Sphynx',
  },
  {
    id: 'tonk',
    name: 'Tonkinese',
  },
  {
    id: 'toyg',
    name: 'Toyger',
  },
  {
    id: 'tang',
    name: 'Turkish Angora',
  },
  {
    id: 'tvan',
    name: 'Turkish Van',
  },
  {
    id: 'ycho',
    name: 'York Chocolate',
  },
];

export type limitType = {
  numLimit: string;
  title: string;
};

export const limit: limitType[] = [
  {
    numLimit: '15',
    title: 'Limit: 15',
  },
  {
    numLimit: '10',
    title: 'Limit: 10',
  },
  {
    numLimit: '5',
    title: 'Limit: 5',
  },
];

export interface BreedType {
  weight: Weight;
  id: string;
  name: string;
  cfa_url?: string;
  vetstreet_url: string;
  vcahospitals_url?: string;
  temperament: string;
  origin: string;
  country_codes: string;
  country_code: string;
  description: string;
  life_span: string;
  indoor: number;
  lap?: number;
  alt_names: string;
  adaptability: number;
  affection_level: number;
  child_friendly: number;
  dog_friendly: number;
  energy_level: number;
  grooming: number;
  health_issues: number;
  intelligence: number;
  shedding_level: number;
  social_needs: number;
  stranger_friendly: number;
  vocalisation: number;
  experimental: number;
  hairless: number;
  natural: number;
  rare: number;
  rex: number;
  suppressed_tail: number;
  short_legs: number;
  wikipedia_url: string;
  hypoallergenic: number;
  reference_image_id: string;
}

export interface Weight {
  imperial: string;
  metric: string;
}
