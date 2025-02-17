import * as React from "react";
import Box from "@mui/material/Box";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";
import { SnackbarContent } from "@mui/material";

interface SnackBarProps {
  message: string;
  open: boolean;
  onClose: () => void;
  backgroundColor?: string;
  color?: string;
}

export default function SnackBar({
  message,
  open,
  onClose,
  backgroundColor,
  color,
}: SnackBarProps) {
  return (
    <Box>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={open}
        onClose={onClose}
        autoHideDuration={2000}
        key={"bottom" + "left"}
        sx={{ width: "130px" }} //너비 props으로
      >
        <SnackbarContent
          message={message}
          sx={{
            background: backgroundColor,
            color: color,
            border: `1px solid ${color}`,
          }}
        />
      </Snackbar>
    </Box>
  );
}
