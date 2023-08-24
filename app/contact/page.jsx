"use client";
import { useState } from "react";
import styles from "@styles/page.module.scss";
import ui from "@styles/ui.module.scss";
import contact_styles from "@styles/contact.module.scss";
import Link from "next/link";

import { nunito, lexend_deca, inter } from "@app/fonts";
import Hypno from "@components/Hypno";

const page = () => {
  const [showMain, setShowMain] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const value = Object.fromEntries(data.entries());
    const newData = {
      from: value.email,
      to: "support@quirkable.io",
      subject: "Customer Inquery",
      text: `From: ${value.firstName + " " + value.lastName}; \r\n ${value.email} \r\n ${value.message}`,
    };
    const fetched = await fetch("/api/send-mail", { method: "POST", body: JSON.stringify(newData) });
    const response = await fetched.json();
    console.log(response);
    setShowMain(false);
  };

  return (
    <section className={styles.main} style={{ gridTemplateColumns: "1fr 45% 1fr" }}>
      <div style={{ position: "absolute", opacity: "var(--opacity)", top: "40px" }}>
        <Hypno width={1030} />
      </div>

      <section style={{ gridColumn: "2", gridTemplateRows: "27% 1fr 20%", alignItems: "center" }}>
        {showMain ? (
          <>
            <div>
              <h2 className={lexend_deca.className} style={{ color: "#ffffff", fontSize: "56px", textAlign: "center" }}>
                How can we help?
              </h2>
              <h5 style={{ textAlign: "center", color: "#ffffff", margin: "20px 0px -20px" }}>
                This form is for general inquries. If you have a support issue, use{" "}
                <Link href="/support" style={{ textDecoration: "underline" }}>
                  this
                </Link>{" "}
                instead.
              </h5>
            </div>
            <div>
              <form onSubmit={handleSubmit} className={`${contact_styles.form} ${ui.form}`} style={{ backgroundColor: "#ffffff" }}>
                <input style={{ gridRow: "1", gridColumn: "1" }} required placeholder="First Name*" className={ui.input} name="firstName" autoComplete="given-name" />

                <input style={{ gridRow: "1", gridColumn: "2" }} className={ui.input} required placeholder="Last Name*" name="lastName" autoComplete="family-name" />

                <input style={{ gridRow: "2", gridColumn: "1 /span 2" }} className={ui.input} required placeholder="Email*" type="email" name="email" autoComplete="email" />

                <textarea style={{ gridRow: "3", gridColumn: "1 /span 2" }} className={ui.textarea} required placeholder="Message*" name="message" />

                <button className={`${ui.btn_medium} ${ui.btn} ${nunito.className}`} style={{ gridRow: "4", gridColumn: "1 / span 2" }} type="submit">
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </>
        ) : (
          <h1>Thanks!</h1>
        )}
      </section>
    </section>
  );
};

export default page;
