"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@styles/nav.module.scss";
import PersonIcon from "@mui/icons-material/Person";
import LoginIcon from '@mui/icons-material/Login';
import AccountMenu from "./AccountMenu";

const UserLogin = () => {
  const [session, setSession] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("/api/session", { method: "GET" });
      const json = await data.json();
      setSession(json);
    };

    fetchData().catch(console.error);
  }, []);

  return <>{session.authenticated ? <AccountMenu userImage={session.session.user.image} userName={session.session.user.name} userEmail={session.session.user.email}/> : <Link href="/login">login <LoginIcon/></Link>}</>;
};
export default UserLogin;
