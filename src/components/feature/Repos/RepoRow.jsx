import styles from "./RepoRow.module.scss";
import Link from "next/link";
import useTheme from "@/hooks/useTheme";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

const RepoRow = (props) => {
  const { theme } = useTheme();

  return (
    <Link 
      className={`${styles.repoItem} ${styles[theme]}`}
      href={`/repos/${props.name}`}
    >
      <div className={styles.repoHeader}>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
      </div>
      <div className={styles.repoDetails}>
        <span>
          <FaStar /> {props.starCount}
        </span>
        <span>
          <FaCodeBranch /> {props.forkCount}
        </span>
        <span>
          <FaEye /> {props.watcherCount}
        </span>
      </div>
    </Link>
  );
};

export default RepoRow;
