import styles from "./Repo.module.scss";
import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

const Repo = ({ repo }) => {
  return (
    <div className={styles.customCard}>
      <h2>{repo.name}</h2>
      <p>{repo.description}</p>
      <div className={styles.cardStats}>
        <div className={styles.cardStat}>
          <FaStar />
          <span>{repo.stargazers_count}</span>
        </div>
        <div className={styles.cardStat}>
          <FaCodeBranch />
          <span>{repo.forks_count}</span>
        </div>
        <div className={styles.cardStat}>
          <FaEye />
          <span>{repo.watchers_count}</span>
        </div>
      </div>
      <Link href={repo.html_url} target='_blank'>
        {repo.name}
      </Link>
    </div>
  );
};

export default Repo;
