"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@styles/nav.module.scss";
import { signOut } from "next-auth/react"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import PaidIcon from '@mui/icons-material/Paid';
import LogoutIcon from '@mui/icons-material/Logout';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';

const AccountMenu = (props) => {
  const { userName, userImage, userEmail } = props;

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <span onClick={() => handleOpen()}>
      {userImage ? <Image style={{ borderRadius: "60px", zIndex: '99999'}} src={userImage} alt={userName} width={45} height={45} /> : <AccountCircleIcon sx={{fontSize: "45px"}}/>}
      </span>
      <div
        className={styles.account_menu}
        style={{ opacity: isOpen ? "1" : "0", transform: isOpen ? "translateY(20px)" : "translateY(-20px)"}}
      >
        <div className={styles.user_name}>{userName}</div>
        <div className={styles.user_email}>{userEmail}</div>
        <hr style={{borderBottom: '1px solid var(--deep-purple)', marginTop: '20px', opacity: ".2"}} />
        <ul className={styles.account_list}>
          <li>
            <Link href="/account"><ContactPageIcon/> Account</Link>
          </li>
          <li>
            <Link href="/logout"><PaidIcon/> Purchases</Link>
          </li>
          <li>
            <Link href="/logout"><EmojiPeopleIcon/> Somthing</Link>
          </li>
          <li>
            <a onClick={()=>signOut()}><LogoutIcon/> Logout</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AccountMenu;
