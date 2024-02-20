import React from "react";
import Container from "../Container";
import { motion, AnimatePresence } from "framer-motion";
import i18n from "@/i18n";
import { isRTL } from "@/utils/Helpers";
import { useRouter } from "next/router";
const Content = ({ title, children }) => {
   const router = useRouter();
   return (
      <AnimatePresence mode="wait">
         <Container className="col-lg-9 m-0 overflow-hidden">
            <motion.div
               key={router.pathname}
               initial={{ opacity: 0, x: isRTL() ? "120%" : "-120%" }}
               animate={{ opacity: 1, x: 0 }}
               exit={{ opacity: 0, x: isRTL() ? "120%" : "-120%" }}
               transition={{
                  type: "spring",
                  duration: 0.7,
                  ease: "easeInOut",
                  stiffness: 120,
                  damping: 20,
               }}>
               <h1 className="">{title}</h1>
               <div className="fw-medium">
               {children}
               </div>
            </motion.div>
         </Container>
      </AnimatePresence>
   );
};

export default Content;
