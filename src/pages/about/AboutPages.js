import loadjs from "loadjs";
import React, { useEffect } from "react";
import About from "../../components/about/About";

export default function AboutPages() {
    useEffect(() => {
        setTimeout(() => {
            loadjs(["/assets/js/custom.js"], "foobar");
            loadjs.ready("foobar", function () {
              console.log("good");
            });
    
        });
      });
    return(
        <>
            <About />
        </>
    )
}