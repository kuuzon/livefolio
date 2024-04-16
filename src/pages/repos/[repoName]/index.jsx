import AbpLink from '@/components/common/AbpLink';
import Repo from '@/components/feature/repos/Repo';
import { useRouter } from "next/router"

const RepoDetailPage = ({ repo }) => {
  // INTIAL ROUTING
  const router = useRouter();
  const repoName = router.query.repoName

  // DATA FETCH
  // IF CURIOUS RE SSR LOADING SPINNER: https://stackoverflow.com/questions/60755316/next-js-getserversideprops-show-loading/60756105#60756105
  // console.log(repo)

  return (
    <div className='text-center'>
      <AbpLink path='/repos'>
        Back To Repos
      </AbpLink>
      {repo.message !== "Not Found" && <Repo repo={repo} />}
    </div>
  );
};

export const getServerSideProps = async (context) => {
  // Retrieving Dynamic URL Slug
  // console.log(context.params.repoName)
  const repoName = context.params.repoName

  // Fetch Request to Specific Git Repo
  const response = await fetch(`https://api.github.com/repos/kuuzon/${repoName}`);
  // console.log(response)
  const data = await response.json();

  return {
    props: {
      repo: data
    }
  };
};

export default RepoDetailPage;
