import { styled } from "@mui/material";
import { alpha } from "@mui/material/styles";

const StyledMarkdown = styled("div")(({ theme }) => {
  return {
    "h1, h2, h3": {
      marginTop: 30,
    },
    h3: {
      fontSize: 20,
    },
    br: {
      display: "grid",
      content: '""',
      marginTop: "0.75em",
    },

    // Divider
    hr: {
      margin: 0,
      flexShrink: 0,
      borderWidth: 0,
      msFlexNegative: 0,
      WebkitFlexShrink: 0,
      borderStyle: "solid",
      borderBottomWidth: "thin",
      borderColor: theme.palette.divider,
    },

    // List
    "& ul, & ol": {
      margin: 0,
      paddingInlineStart: 25,
      "& li": {
        lineHeight: 2,
      },
    },

    // Blockquote
    "& blockquote": {
      marginLeft: "auto",
      marginRight: "auto",
      marginY: 1,
      position: "relative",
      padding: 1,
      color: theme.palette.text.primary,
      borderRadius: theme.shape.borderRadius * 2,
      backgroundColor: theme.palette.grey[200],
      width: "100%",
      [theme.breakpoints.up("md")]: {},
      "& p, & span": {
        padding: "0px 10px",
      },
    },

    // Code Block
    "& pre": {
      padding: 10,
      borderRadius: 2,
    },
    "& pre, & pre > code": {
      fontFamily: theme.typography.fontFamily,
      overflowX: "auto",
      whiteSpace: "pre",
      color: theme.palette.common.black,
      borderRadius: theme.shape.borderRadius,
      backgroundColor: theme.palette.grey[50],
    },
    "& code": {
      fontFamily: theme.typography.fontFamily,
      fontSize: 15,
      color: theme.palette.primary.main,
      borderRadius: 4,
      whiteSpace: "pre",
      padding: "3px 5px",
      backgroundColor: theme.palette.grey["A200"],
      "&.hljs": { padding: 0, backgroundColor: "transparent" },
    },

    // Table
    table: {
      width: "100%",
      borderCollapse: "collapse",
      border: `1px solid ${theme.palette.divider}`,
      "th, td": {
        padding: theme.spacing(1),
        border: `1px solid ${theme.palette.divider}`,
      },
      "tbody tr:nth-of-type(odd)": {
        backgroundColor: alpha(theme.palette.grey[500], 0.12),
      },
    },

    // Checkbox
    input: {
      "&[type=checkbox]": {
        position: "relative",
        cursor: "pointer",
        "&:before": {
          content: '""',
          top: -2,
          left: -2,
          width: 17,
          height: 17,
          borderRadius: 3,
          position: "absolute",
          backgroundColor: theme.palette.grey[300],
        },
        "&:checked": {
          "&:before": {
            backgroundColor: theme.palette.primary.main,
          },
          "&:after": {
            content: '""',
            top: 1,
            left: 5,
            width: 4,
            height: 9,
            position: "absolute",
            transform: "rotate(45deg)",
            msTransform: "rotate(45deg)",
            WebkitTransform: "rotate(45deg)",
            border: `solid ${theme.palette.common.white}`,
            borderWidth: "0 2px 2px 0",
          },
        },
      },
    },
    a: {
      textDecoration: "none",
      color: theme.palette.primary.main,
    },
    "a:hover": {
      textDecoration: "underline",
    },
  };
});

export default StyledMarkdown;
