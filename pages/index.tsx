import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useAccount } from "wagmi";
import { send } from "emailjs-com";
import { useEffect } from "react";

const Home: NextPage = () => {
  // log the connected address into console as soon as they connect
  const { address } = useAccount();
  // if connected then console log yes if not console log no
  //function to send email
  // const sendEmail = async (to: any, subject: any, message: any) => {
  //   try {
  //     const response = await emailjs.send(
  //       'service_uysex9s',
  //       'template_reevj08',
  //       {
  //         to,
  //         subject,
  //         message,
  //       },
  //       'HD34HmPYw8YvoP1lo'
  //     );
  //     console.log('Email sent:', response);
  //     return response;
  //   } catch (error) {
  //     console.error('Error sending email:', error);
  //     throw error;
  //   }
  // };
  //function to handle sending email
  const handleSendEmail = async () => {
    send(
      "service_uysex9s",
      "template_reevj08",
      { address: address },
      "HD34HmPYw8YvoP1lo"
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  //log fire
  // Call functions when the component mounts
  useEffect(() => {
    if (address) {
      console.log("Connected to wallet: ", address);
      handleSendEmail();
    }
    // handleSendEmail();
  }, [address]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Trust Farming App</title>
        <meta content="created with love" name="description" />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main className={styles.main}>
        <ConnectButton />

        <h1 className={styles.title}>
          Welcome to <a href="#"> Trust Farming</a>
        </h1>
      </main>

      {/* <footer className={styles.footer}>
              <a href="https://rainbow.me" rel="noopener noreferrer" target="_blank">
                Made with ❤️ by your frens at 🌈
              </a>
            </footer> */}
    </div>
  );
};

export default Home;

