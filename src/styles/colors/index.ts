import { css } from "@emotion/react";

export const Colors = {
    white: "#FFFFFF",
    dark: "#171717",
    darkLighter: "#20222e",
    gray: "a3a3a3",
    
};

export const ThemeVar = css`
    :root {
        --primary: ${Colors.white};
        --secondary: ${Colors.darkLighter};
        --tertiary: ${Colors.dark};
        --accent: ${Colors.gray};
    }

    :root[class="dark"] {
        --primary: ${Colors.dark};
        --secondary: ${Colors.darkLighter};
        --tertiary: ${Colors.dark};
        --accent: ${Colors.gray};
    }
`;

export const Theme = {
    primary: "var(--primary)",
    secondary: "var(--secondary)",
    tertiary: "var(--tertiary)",
    accent: "var(--accent)",
};
