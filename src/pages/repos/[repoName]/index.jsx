import AbpButton from '@/components/common/AbpButton';
import Repo from '@/components/feature/Repos/Repo';
import { useRouter } from "next/router"

const RepoDetailPage = ({ repo }) => {
  // INTIAL ROUTING
  const router = useRouter();
  const repoName = router.query.repoName
  console.log(repoName);

  // DATA FETCH
  // IF CURIOUS RE SSR LOADING SPINNER: https://stackoverflow.com/questions/60755316/next-js-getserversideprops-show-loading/60756105#60756105
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
  console.log(response)
  const data = await response.json();

  return {
    props: {
      repo: data
    }
  };
};

export default RepoDetailPage;
