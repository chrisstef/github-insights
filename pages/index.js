import React, { useRef, useState, useEffect } from "react";
import { FaGithubAlt } from "react-icons/fa";
import { useRouter } from "next/router";
import { Head } from "../components";
import styles from "./Home.module.scss";

const Home = () => {
  const router = useRouter();
  const inputRef = useRef();
  const [username, setUserName] = useState("");

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const onSubmit = e => {
    e.preventDefault();
    router.replace(`/user/${username}`);
  };

  return (
    <main>
      <Head title="Github Insights" />
      <div className={styles.container}>
        <form onSubmit={onSubmit}>
          <FaGithubAlt />
          <label htmlFor="username">Github Insights</label>
          <span>Enter Github Username</span>
          <input
            name="username"
            placeholder="chrisstef"
            type="text"
            ref={inputRef}
            onChange={e => setUserName(e.target.value)}
            autoComplete="off"
          />
        </form>
      </div>
    </main>
  );
};

export default Home;
