import { useEffect, useRef, useState } from "react";
import { ReqResList, User } from "../interfaces/reqResponse";
import { reqResApi } from '../api/reqResponse';


export const useUsers = () => {

  const [users, setUsers] = useState<User[]>([]);

  const pageRef = useRef(1);

  useEffect(() => {
    //call to API
    chargeUsers();
  }, [])
  const chargeUsers = async () => {

    // Charge the users from the API and set the pageRef
    const resp = await reqResApi.get<ReqResList>('/users', {
      params: {
        page: pageRef.current
      }
    })

    console.log(pageRef.current); // to check the actual page to debugg

    // If the data of the page is not null, set the data, else, u have to say no data
    if (resp.data.data.length != 0) {
      setUsers(resp.data.data)
    } else {
      pageRef.current--;
      alert('Data not found')
    }
  }

  
  const previousPage = async () => {
    // check if the page is more than one, to decrese the pagination, else, u can´t.
    if (pageRef.current > 1) {
      pageRef.current--;
      chargeUsers();
    }
  }

  const nextPage = async () => {
    pageRef.current++;
    chargeUsers();
  }
  
  return {
    users,
    previousPage,
    nextPage
  }

}
