import { useBreakpoints } from "@vueuse/core";
import { BREAKPOINTS } from "@/constants/breakpoints";

export default function () {
  const breakpoints = useBreakpoints(BREAKPOINTS);

  return {
    isMobile: breakpoints.smaller("MOBILE"),
    isTablet: breakpoints.between("MOBILE", "DESKTOP"),
    isDesktop: breakpoints.greater("DESKTOP"),
    current: breakpoints.current(),
  };
}
