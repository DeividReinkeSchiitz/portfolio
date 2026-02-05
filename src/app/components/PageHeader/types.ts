export interface IconConfig {
  src: string;
  alt: string;
  className: string;
}

export interface PageHeaderProps {
  description: string;
  title: string;
  icons?: IconConfig[];
}
