import AbpButton from '@/components/common/AbpButton';
import Repo from '@/components/feature/Repos/Repo';
import { useRouter } from "next/router"

const RepoPage = ({ repo }) => {
  // INTIAL ROUTING
  const router = useRouter();
  const repoName = router.query.repoName
  console.log(repoName);

  // DATA FETCH
  console.log(repo)

  return (
    <>
      <AbpButton path='/repos'>
        Back To Repos
      </AbpButton>
      <Repo repo={repo} />
    </>
  );
};

export const getServerSideProps = async (context) => {
  // External API Request: GitHub
  console.log(context.params.repoName)
  const repoName = context.params.repoName
  const response = await fetch(`https://api.github.com/repos/kuuzon/${repoName}`);
  const data = await response.json();

  return {
    props: {
      repo: data
    }
  };
};

export default RepoPage;
