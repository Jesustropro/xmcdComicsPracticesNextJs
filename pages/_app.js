import { NextUIProvider } from "@nextui-org/react";
import { createTheme } from "@nextui-org/react";

const darkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {}, // override dark theme colors
  },
});
function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider /*theme={darkTheme}*/>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
