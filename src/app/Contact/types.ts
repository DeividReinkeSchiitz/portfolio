export interface ContactInfo {
  location: {
    country: string;
    availability: string;
  };
  title: string;
  description: string;
  icons: {
    location: string;
    globe: string;
  };
}
