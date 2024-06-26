import {useRouter} from "next/router"

export const useExtractVideoID = () => {
  const location = useRouter();

  const extractValueUsingRegex = (url: string) => {
    const match = url.match(/\/video\/nc(.*)/);
    return match ? match[1].toUpperCase() : null;
  };

  return extractValueUsingRegex(location.pathname);
};