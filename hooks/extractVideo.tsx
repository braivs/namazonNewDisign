import {useLocation} from "react-router-dom"

export const useExtractVideoID = () => {
  const location = useLocation();

  const extractValueUsingRegex = (url: string) => {
    const match = url.match(/\/video\/(.*)/);
    return match ? match[1].toUpperCase() : null;
  };

  return extractValueUsingRegex(location.pathname);
};