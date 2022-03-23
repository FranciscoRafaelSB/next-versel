import { useRouter } from "next/router";

export const CodePage = () => {
  const { asPath } = useRouter();

  return <code>pages{asPath}</code>;
};
