import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:4001/assets/download.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Acer India</Typography>
        <Typography color={medium}>
          https://online.acer.com.au/laptops
        </Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Acer, Inc. engages in the research and development of user interface,
        industrial design, information and communication technologies related
        software and hardware, and electronic sports related applications..
      </Typography>
    </WidgetWrapper>
  );
};
 
export default AdvertWidget;
