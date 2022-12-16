import { Text, Navbar, Input, useTheme, Link } from "@nextui-org/react";
import { Layout } from "./Layout";
import { SearchIcon } from "./SearchIcon";
export function Header() {
  const { isDark } = useTheme();
  return (
    <Layout>
      <Navbar shouldHideOnScroll isBordered={isDark} variant="floating">
        <Navbar.Brand>
          <Text
            h1
            size={35}
            css={{
              textGradient: "45deg, $blue600 -20%, $pink600 50%",
            }}
            weight="bold"
          >
            Comics XKCD
          </Text>
        </Navbar.Brand>
        <Navbar.Content
          activeColor={"secondary"}
          hideIn="xs"
          variant="highlight"
          enableCursorHighlight
        >
          <Navbar.Link isActive href="/">
            Home
          </Navbar.Link>
          <Navbar.Link href="/About">About</Navbar.Link>
          <Navbar.Link href="/Search">Search</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content
          css={{
            "@xsMax": {
              w: "100%",
              jc: "space-between",
            },
          }}
        >
          <Navbar.Item
            css={{
              "@xsMax": {
                w: "100%",
                jc: "center",
              },
            }}
          >
            <Input
              clearable
              contentLeft={
                <SearchIcon fill="var(--nextui-colors-accents6)" size={16} />
              }
              contentLeftStyling={false}
              css={{
                w: "100%",
                "@xsMax": {
                  mw: "300px",
                },
                "& .nextui-input-content--left": {
                  h: "100%",
                  ml: "$4",
                  dflex: "center",
                },
              }}
              placeholder="Search..."
            />
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
    </Layout>
  );
}
