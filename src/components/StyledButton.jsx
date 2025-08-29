import styled from "@emotion/styled";

const StyledButton = styled("button")(({ theme }) => ({
  appearance: "none",
  border: "none",
  cursor: "pointer",
  fontWeight: 600,
  padding: "10px 16px",
  borderRadius: theme.shape?.borderRadius ?? 10,
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.getContrastText(theme.palette.primary.main),
  transition: "transform 0.12s ease, box-shadow 0.12s ease, opacity 0.12s ease",
  boxShadow: theme.shadows?.[2] ?? "0 4px 14px rgba(0,0,0,0.15)",
  outline: "none",

  "&:hover": {
    transform: "translateY(-1px)",
    opacity: 0.95,
    boxShadow: theme.shadows?.[3] ?? "0 6px 18px rgba(0,0,0,0.18)",
  },
  "&:active": {
    transform: "translateY(0)",
    boxShadow: theme.shadows?.[1] ?? "0 3px 10px rgba(0,0,0,0.12)",
  },
  "&:focus-visible": {
    boxShadow: `0 0 0 3px ${theme.palette.primary.main}55`,
  },
}));

export default StyledButton;
