// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import styled from "styled-components";
// import { getUsers } from "../store/users";

// const Users = () => {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getUsers());
//   }, []);

//   const usersData = useSelector((state) => state.users.usersData);
//   return (
//     <Container>
//       {usersData?.map((i) => {
//         return (
//           <div>
//             <h1>{i.username}</h1>
//           </div>
//         );
//       })}
//     </Container>
//   );
// };

// const Container = styled.div`
//   background-color: antiquewhite;
//   padding: 20px;
//   border-radius: 20px;
//   width: 450px;
// `;

// export default Users;
