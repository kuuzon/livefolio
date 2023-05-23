import RepoRow from "./RepoRow";
import styles from './RepoList.module.scss'

const RepoList = ({ repos }) => {
  return (
    <div className={styles.reposContainer}>
      <h2>Live GitHub Repositories</h2>
      <div className={styles.reposList}>
        {repos.map((repo) => (
          <RepoRow
            key={repo.id}
            name={repo.name}
            description={repo.description}
            starCount={repo.stargazers_count}
            forkCount={repo.forks_count}
            watcherCount={repo.watchers_count}
          />
        ))}
      </div>
    </div>
  );
};

export default RepoList