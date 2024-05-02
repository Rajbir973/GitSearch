/* eslint-disable react/prop-types */
import Search from "./Search";
import Users from "./Users";
import { useState, useEffect } from "react";
import axios from "axios";

function Home({loading,setLoading}) {
  let [userData, setUserData] = useState([]);

  async function reverseFlow(username) {
    try {
      setLoading(true)
      if (!username) {
        alert("Username cannot be empty");
        return;
      }
      let URL = `https://api.github.com/search/users?q=${username}`;
      let res = await axios.get(URL, {
        auth: {
          username: "rajbir973",
          password: "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",
        },
      });
      setUserData(res.data.items);
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
  }

  async function getUsers() {
    try {
      setLoading(true)
      let URL = `https://api.github.com/users`;
      let res = await axios.get(URL, {
        auth: {
          username: "rajbir973",
          password: "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",
        },
      });
      setUserData(res.data);
      setLoading(false)
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <Search reverseData={reverseFlow} />
      <Users data={userData} load={loading} />
    </>
  );
}

export default Home;
