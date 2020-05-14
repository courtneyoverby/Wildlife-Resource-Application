import { red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#A6A6A6",
    },
    secondary: {
      main: "#737373",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#737373",
    },
  },
});

export default theme;
