import React from "react";
import Button from "@material-ui/core/Button";

function ButtonShop({ text }) {
  return (
    <div>
      <Button variant="contained" color="secondary">
        {text}
      </Button>
    </div>
  );
}

export default ButtonShop;
