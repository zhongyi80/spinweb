import { useState } from "react";
import { useSelector } from "react-redux";
import { HelmetProvider } from "react-helmet-async";
import { RootState } from "./redux/store";
import { ConfigProvider, theme as antdTheme } from "antd";
import { StylesContext } from "./contexts";
import routes from "./routes/routes.tsx";
export const COLOR = {
  50: "#e0f1ff",
  100: "#b0d2ff",
  200: "#7fb0ff",
  300: "#4d8bff",
  400: "#1e79fe",
  500: "#076ee5",
  600: "#0062b3",
  700: "#004f81",
  800: "#003650",
  900: "#001620",
  borderColor: "#E7EAF3B2",
};

function App() {
  const { mytheme } = useSelector((state: RootState) => state.theme);

  return (
    <HelmetProvider>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: COLOR["500"],
            borderRadius: 6,
            fontFamily: "Lato, sans-serif",
          },
          components: {
            Breadcrumb: {
              // linkColor: 'rgba(0,0,0,.8)',
              // itemColor: 'rgba(0,0,0,.8)',
            },
            Button: {
              colorLink: COLOR["500"],
              colorLinkActive: COLOR["700"],
              colorLinkHover: COLOR["300"],
            },
            Calendar: {
              colorBgContainer: "none",
            },
            Card: {
              colorBorderSecondary: COLOR["borderColor"],
            },
            Carousel: {
              colorBgContainer: COLOR["800"],
              dotWidth: 8,
            },
            Rate: {
              colorFillContent: COLOR["100"],
              colorText: COLOR["600"],
            },
            Segmented: {
              colorBgLayout: COLOR["100"],
              borderRadius: 6,
              colorTextLabel: "#000000",
            },
            Table: {
              borderColor: COLOR["100"],
              colorBgContainer: "none",
              headerBg: "none",
              rowHoverBg: COLOR["50"],
            },
            Tabs: {
              colorBorderSecondary: COLOR["100"],
            },
            Timeline: {
              dotBg: "none",
            },
            Typography: {
              colorLink: COLOR["500"],
              colorLinkActive: COLOR["700"],
              colorLinkHover: COLOR["300"],
              linkHoverDecoration: "underline",
            },
          },
          algorithm:
            mytheme === "dark"
              ? antdTheme.darkAlgorithm
              : antdTheme.defaultAlgorithm,
        }}
      >
        <StylesContext.Provider
          value={{
            rowProps: {
              gutter: [
                { xs: 8, sm: 16, md: 24, lg: 32 },
                { xs: 8, sm: 16, md: 24, lg: 32 },
              ],
            },
            carouselProps: {
              autoplay: true,
              dots: true,
              dotPosition: "bottom",
              infinite: true,
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          }}
        >
          <RouterProvider router={routes} />
        </StylesContext.Provider>
      </ConfigProvider>

      <div>
        <h> hello</h>
      </div>
    </HelmetProvider>
  );
}

export default App;
