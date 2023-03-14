import React from "react";
import FriendItem from "./FriendItem";
export default function FriendList({ friends }) {
  return (
    <>
      <ul class="friend-list">
        {friends.map((item) => {
          return <FriendItem {...item} />;
        })}
      </ul>
    </>
  );
}
