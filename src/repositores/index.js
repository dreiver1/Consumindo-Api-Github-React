import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import RepositoryItem from '../components/RepositoryItem'
import useGithub from "../hooks/github-hooks";
import './index.css';

function Repositores(){ 
  const [classe, setClasse] = useState("desativo");
  const [hasUserForSeachRepos, setHasUserForSeachRepos] = useState(false);
  const {githubState, getUserRepos, getUserStarred} = useGithub();
  useEffect(()=>{
    if(!!githubState.user.login){
      getUserRepos(githubState.user.login);
      getUserStarred(githubState.user.login);
    }
      setHasUserForSeachRepos(!githubState.repositores);
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [githubState.user.login]);
  return (
    <>
      {hasUserForSeachRepos ? (
        <Tabs className="contentTabs" selectedTabClassName="is-selected"
        selectedTabPainelClassName="is-selected">
          <TabList className="contentTabList">
            <Tab className="tab" onClick={() => setClasse("ativo")}>Repositories</Tab>
            <Tab className="tab" onClick={() => setClasse("ativo")}>Stared</Tab>
          </TabList>
  
          <TabPanel className={classe}>
            <div className="contentRep">
            {githubState.repositories.map((item) => (
                  <RepositoryItem
                    key={item.id}
                    name={item.name}
                    linkRep={item.full_name}
                    fullName={item.full_name}
                  />
                ))}
            </div>
          </TabPanel>
          <TabPanel className={classe}>
          <div className="contentRep">
            {githubState.starred.map((item) => (
                  <RepositoryItem
                    key={item.id}
                    name={item.name}
                    linkRep={item.full_name}
                    fullName={item.full_name}
                  />
                ))}
            </div>
          </TabPanel>
        </Tabs>
        ) : (<></>)
      };
    </>
  );
};

export default Repositores;