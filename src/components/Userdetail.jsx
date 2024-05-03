/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import Beaneater from "./Beaneater";
import config from "./config/config";

function Userdetail({ loading, setLoading }) {
  let { username } = useParams();
  let [Userdetail, setUserdetail] = useState({});
  let [userRepo, setUserRepo] = useState([]);
  let { state } = useLocation();
  console.log(state);

  async function getdata() {
    try {
      setLoading(true);
      let URL = `https://api.github.com/users/${username}`;
      let res = await axios.get(URL, {
        auth: {
          username: config.VITE_GITHUB_USERNAME,
          password: config.VITE_GITHUB_PASSWORD
        },
      });
      setUserdetail(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  async function getRepo() {
    try {
      setLoading(true);
      let URL2 = `https://api.github.com/users/${username}/repos`;
      let repo = await axios.get(URL2, {
        auth: {
          username: config.VITE_GITHUB_USERNAME,
          password: config.VITE_GITHUB_PASSWORD
        },
      });
      console.log(repo.data);
      setUserRepo(repo.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    // if (!state?.info) {
    // } else {
    // }
    //   setUserdetail(state.info);
    getdata();
    getRepo();
  }, []);

  if(loading)return <Beaneater/>
  return (
    <>
      {<>
          <img className="new-img" src={Userdetail.avatar_url} />
          <h4>{Userdetail.login}</h4>
          <h3 className="repo-h3">Followers:{Userdetail.followers}</h3>


          <div className="repo-div">
            {userRepo.map((repos) => {
              return (
                <div className="repo-innerdiv" key={repos.id}>
                
                  <p><strong>Repositry name:</strong>{repos.name}</p>
                  <p><strong>Repositry Type:</strong>{repos.private ? "Private" : "Public"}</p>
                  <p><strong>Coding Language:</strong>{repos.language}</p>
                  <p><strong>Repositry License:</strong>{repos.license ? repos.license.spdx_id :"Null"}</p>
                  <p><strong>Last Updated:</strong>{repos.updated_at}</p>
                </div>
              );
            })}
          </div>

      </>
      }
    </>
  );
}

export default Userdetail;
