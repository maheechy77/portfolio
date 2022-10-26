import { Socials } from "../typings";

export const fetchSocials = async () => {
  const res = await fetch(`${process.env.NODE_PUBLIC_BASE_URL}/api/getSocials`);
  const data = await res.json();
  const socials: Socials[] = data.socials;
  return socials;
};
