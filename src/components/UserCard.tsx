import { VFC } from "react";
import { UserProfile } from "../types/userProfile";

type Props = {
  user: UserProfile;
};

export const UserCard: VFC<Props> = (props) => {
  const { user } = props;

  const style = {
    backGroundColor: "#ebe5e5",
    borderRadius: "12px",
    border: "solid 2px #45859c",
    padding: "0 16px",
    margin: "8px"
  };

  return (
    <div style={style}>
      <dl>
        <dt>Name: </dt>
        <dd>{user.name}</dd>
        <dt>email: </dt>
        <dd>{user.email}</dd>
        <dt>Address: </dt>
        <dd>{user.address}</dd>
      </dl>
    </div>
  );
};
