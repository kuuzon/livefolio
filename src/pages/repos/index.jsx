import RepoList from "../../components/feature/repos/RepoList"

const ReposPage = (props) => {
  const {repos} = props
  console.log(repos)

  return (
    <div>
      {repos.length > 0 && < RepoList repos={repos} />}
    </div>
  )
}

// STATIC SITE GENERATION (snippet: "ngsp")
// This function ONLY operates within pages files & application will search for this reserved name.  If so, it will execute this function during the pre-rendering process, and queue getStaticProps PRIOR to the Home page function.
// This function will GET the data this component needs! (much like useEffect BUT will NOT execute on the client-side - ONLY on the server)

export const getStaticProps = async () => {
  // Fetch data from API, this still needs to occur BUT DONE SERVER-SIDE
  const response = await fetch('https://api.github.com/users/kuuzon/repos');
  const data = await response.json()

  // STALL: Second-stall to show loading spinner
  // await new Promise((resolve) => setTimeout(resolve, 1000)); 

  // MUST return an Object which IMPORTANTLY sets the props.  Props is an object which will be passed into the component that NEEDS the data, just like a standard props object
  return {
    props: {
      repos: data
    },
    revalidate: 60
  };

  // NOTE: Incremental Static Regeneration (ISR) - Allows us to "refresh" the built pre-rendered data at set intervals, rather than re-build & re-deploy the application entirely.  We use the "revalidate" property, which will mean the page will be built at build time AND every number of seconds set by the revalidate property! (E.G. Property above means the news on the Home page will never be more than ONE MINUTE old)
};

export default ReposPage