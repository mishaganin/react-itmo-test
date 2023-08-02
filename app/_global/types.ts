export interface INews {
  id: number;
  date: string;
  imageSrc: string;
  title: string;
  url: string;
}

export interface ILanguage {
  name: string;
  label: string;
  logoSrc: string;
}

export interface IParams {
  lng?: string;
}
