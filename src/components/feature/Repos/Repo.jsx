import styles from "./Repo.module.scss";
import AbpButton from "@/components/common/AbpButton";
import useTheme from "@/hooks/useTheme";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

const Repo = ({ repo }) => {
  const { theme } = useTheme();

  return (
    <div className={`${styles.repoDetailCard} ${styles[theme]}`}>
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
      <AbpButton path={repo.html_url} target={true}>
        {repo.name}
      </AbpButton>
    </div>
  );
};

export default Repo;
