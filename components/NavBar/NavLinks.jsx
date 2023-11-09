'use client';
import Link from "next/link";
import styles from "@styles/nav.module.scss";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import React from "@components/Logos/React";
import { useState } from "react";

const NavLinks = () => {

  const [showModal, setShowModal] = useState(false);

const handleShowModel = () =>{
  if (showModal) {
    setShowModal(!showModal);
  }
}

  return (
    <>
      <div className={styles.nav_btn} onClick={handleShowModel} href="/products">
        <span>Products <ArrowDropDownIcon/></span>
        <dialog id="productDialog">
          Chirp! For Joomla
        </dialog>
      </div>
      <Link className={styles.nav_btn} href="/support">
        <span>Support</span>
      </Link>
      <Link className={styles.nav_btn} href="/contact">
        <span>Contact</span>
      </Link>
    </>
  );
};

export default NavLinks;
