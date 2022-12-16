import Head from "next/head";
import { Card, Col, Text, Row } from "@nextui-org/react";
import { Header } from "../components/Header";
import Image from "next/image";
import Link from "next/link";

import fs from "fs/promises";
export default function Home({ latestComics }) {
  console.log(latestComics);
  return (
    <div>
      <Head>
        <title>XMCD COMICS</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <div
          style={{ display: "flex", justifyContent: "Center", margin: "2rem" }}
        >
          {latestComics.map((comic) => {
            return (
              <Link style={{ padding: "1rem" }} key={comic.id} href={"/"}>
                <Card isPressable css={{ bg: "$black", w: "100%" }}>
                  <Card.Image
                    src={comic.img}
                    width="100%"
                    height={340}
                    objectFit="cover"
                    alt={comic.alt}
                  />
                  <Card.Footer css={{ justifyItems: "flex-start" }}>
                    <Row wrap="wrap" justify="space-between" align="center">
                      <Text b>{comic.title}</Text>
                      <Text
                        css={{
                          color: "$accents7",
                          fontWeight: "$semibold",
                          fontSize: "$sm",
                        }}
                      >
                        {"item.price"}
                      </Text>
                    </Row>
                  </Card.Footer>
                </Card>
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  const files = await fs.readdir(`./comics`);

  const latestComicsFiles = files.slice(-3, files.length);

  const promiseReadComics = latestComicsFiles.map(async (comic) => {
    const content = await fs.readFile(`./comics/${comic}`, "utf-8");
    return JSON.parse(content);
  });

  const latestComics = await Promise.all(promiseReadComics);

  return {
    props: {
      latestComics,
    },
  };
}
