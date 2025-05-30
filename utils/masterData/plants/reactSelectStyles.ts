export const modalInputStyle = {
  control: (provided: any) => ({
    ...provided,
    marginBottom: "1rem",
    borderRadius: "6px",
    borderColor: "#ccc",
    boxShadow: "none",
    "&:hover": {
      borderColor: "#888",
    },
  }),
  menu: (provided: any) => ({
    ...provided,
    zIndex: 9999,
  }),
};
