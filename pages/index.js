import { useTheme } from "next-themes";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import duotoneSea from "react-syntax-highlighter/dist/cjs/styles/prism/duotone-sea";
import Particles from "react-tsparticles";

import funky from "react-syntax-highlighter/dist/esm/styles/prism/funky";
import Link from "next/link";


import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);

const codeString = `export default function Introduction(){  
    return (
      <>
      <span>
      Computer engineer and web developer
      </span>   
      </>
)}`;
  const ParticlesSettings = (props) => {
    return (
      <Particles
        id="tsparticles"
        options={{
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 500,
                duration: 2,
                opacity: 0.5,
                size: 10,
              },
              push: {
                quantity: 1,
              },
              repulse: {
                distance: 150,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: `${props.color}`,
            },
            links: {
              color: `${props.links}`,
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 30,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "triangle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
    );
  };

  const HighlighterTheme = (props) => {
    return (
      <SyntaxHighlighter
        suppressHydrationWarning
        language="javascript"
        style={props.styleTheme}
      >
        {codeString}
      </SyntaxHighlighter>
    );
  };

  const visible = true;
  useEffect(() => {
    const interval = setInterval(function () {
      if (visible === true) {
        document.querySelector("#console__underscore").style.opacity = '0';
        visible = false;
      } else {
        document.querySelector("#console__underscore").style.opacity = '1';
        visible = true;
      }
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <div style={{ position: "absolute" }}>
        {theme === "light" ? (
          <ParticlesSettings color="#0000" links="#0000" />
        ) : (
          <ParticlesSettings color="#fafafafa" links="#fafafafa" />
        )}
      </div>

      <Head>
        <title>Juan Camilo Carreño</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* NAVBAR HERE */}
      <Navbar loaded={loaded} theme={theme} setTheme={setTheme} />
      <div className={styles.containerAll}>
      <main className={styles.main}>
        <span className={styles.aboveTitle}>Hello!</span>

        <h1 className={styles.title}>
          <span className={styles.consoleText}>{`C:/Users/JuanCamilo>`}</span>
          npm run {''}
          <a href="#">
            portfolio_juancamilo.js
            <span
              className={styles.hidden}
              id="console__underscore"
            >
              &#95;
            </span>
          </a>
        </h1>
        {theme === "light" && loaded ? (
          <>
          <HighlighterTheme styleTheme={funky} />
          <div className={styles.socialMedia}>
              <Link href="/">
                <a alt="Instagram">
                  <InstagramIcon />
                </a>
              </Link>
              <Link href="/">
                <a alt="Linkedin">
                  <LinkedInIcon />
                </a>
              </Link>
            </div>
          </>
        ) : (
          <>
            <HighlighterTheme styleTheme={duotoneSea} />
            <div className={styles.socialMedia}>
              <Link href="/">
                <a alt="Instagram">
                  <InstagramIcon />
                </a>
              </Link>
              <Link href="/">
                <a alt="Linkedin">
                  <LinkedInIcon />
                </a>
              </Link>
            </div>
          </>
        )}
      </main>
      </div>
      <div className={styles.section__skill}>

      </div>
    </div>
  );
}
