import { create } from "zustand";

interface SnackbarState {
  deleteSnackbarOpen: boolean;
  reservationSnackbarOpen: boolean;
  openSnackbar: (type: "delete" | "reservation") => void;
  closeSnackbar: (type: "delete" | "reservation") => void;
}

export const useSnackbarStore = create<SnackbarState>((set) => ({
  deleteSnackbarOpen: false,
  reservationSnackbarOpen: false,
  openSnackbar: (type) =>
    set((state) => ({
      deleteSnackbarOpen: type === "delete" ? true : state.deleteSnackbarOpen,
      reservationSnackbarOpen:
        type === "reservation" ? true : state.reservationSnackbarOpen,
    })),
  closeSnackbar: (type) =>
    set((state) => ({
      deleteSnackbarOpen: type === "delete" ? false : state.deleteSnackbarOpen,
      reservationSnackbarOpen:
        type === "reservation" ? false : state.reservationSnackbarOpen,
    })),
}));
