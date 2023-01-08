import * as React from "react";
import { useNavigate } from "react-router";
import { useAppDispatch } from "../../../hooks";
import { userLoggedOut } from "../../../store/user/user.slice";
const Exit = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  React.useEffect(() => {
    dispatch(userLoggedOut());
    navigate("/");
  }, []);
  return <div>выход</div>;
};
export default Exit;
