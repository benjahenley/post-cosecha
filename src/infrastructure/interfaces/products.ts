export type Product = {
  id: any;
  title: string;
  stats: string[];
  description: string;
  bg: string;
  url: string;
  insecticida?: string;
  security: string;
  certificate: string;
  tag: string;
};

export type ImageType = {
  src: string;
  width?: number;
  height?: number;
  cropped?: boolean;
};
