import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./cartwigdet.css";

let theme = createTheme({});

theme = createTheme(theme, {
  palette: {
    salmon: theme.palette.augmentColor({
      color: {
        main: "#ed6c02",
      },
      name: "salmon",
    }),
  },
});

export const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);

  return (
    <ThemeProvider theme={theme}>
      <Link to={"/cart"}>
        <IconButton aria-label="cart-icon" className="cart-icon">
          <Badge badgeContent={getTotalQuantity()} color="salmon">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Link>
    </ThemeProvider>
  );
};

export default CartWidget;
