"use client";

import { useEffect, useState } from "react";
import ReactGA from "react-ga4";
import { usePathname } from "next/navigation";

const TRACKING_ID = "G-NKTQ32HPT2";
// const TRACKING_ID= "GT-PHX54G7Q";
function Gtag() {
  const currentPath = usePathname();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
    setInitialized(true);
  }, []);

  useEffect(() => {
    if (initialized) {
      console.log("Sending pageview", currentPath);
      ReactGA.send({
        hitType: "pageview",
        page: currentPath,
        title: "Home Page",
      });
    }
  }, [currentPath, initialized]);

  // <!-- Google tag (gtag.js) -->
  // return <div>
  //     {/*// <!-- Google tag (gtag.js) -->*/}
  //     <Script strategy="lazyOnload" async={true} src="https://www.googletagmanager.com/gtag/js?id=G-NKTQ32HPT2"/>
  //     <Script strategy="lazyOnload" id={"gtag"}
  //     >
  //         {
  //             `window.dataLayer = window.dataLayer || [];
  //             function gtag(){dataLayer.push(arguments);}
  //             gtag('js', new Date());
  //
  //             gtag('config', 'G-NKTQ32HPT2');`
  //         }
  //     </Script>
  // </div>
  return <></>;
}
export default Gtag;
