import Layout from "./components/layout";
import Profile from "./components/profile";
import Repositores from "./repositores";
import useGithub from "./hooks/github-hooks";
import NoSearch from "./components/no-search";
import "./globals/resetCSS.css"
function App() {
  const { githubState } = useGithub();
  return (
        <Layout>
          {githubState.hasUser ? 
          <>
            <>
              <Profile/> 
              <Repositores/>
            </>
          </>:<NoSearch/>}
          
        </Layout>
  );
}

export default App;
