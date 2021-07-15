import loadjs from "loadjs";
import React, { useEffect } from "react";
import Partners from "../../components/partners/Partners";

export default function PartnersPages() {
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
            <Partners />
        </>
    )
}