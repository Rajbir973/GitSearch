/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import Beaneater from "./Beaneater";

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
          username: "rajbir973",
          password: "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",
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
          username: "rajbir973",
          password: "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",
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
      {
        <div className="img-div">
          <img src={Userdetail.avatar_url} />
          <h4>{Userdetail.login}</h4>
          <p>{Userdetail.followers}</p>
          <p>
            {userRepo.map((repos) => {
              return (
                <div key={repos.id}>
                  <hr />

                  <p>{repos.name}</p>
                  <p>{repos.private ? "Private" : "Public"}</p>
                  <p>{repos.language}</p>
                  <p>{repos.license ? repos.license.spdx_id : null}</p>
                  <p>{repos.updated_at}</p>
                </div>
              );
            })}
          </p>
        </div>
      }
    </>
  );
}

export default Userdetail;
