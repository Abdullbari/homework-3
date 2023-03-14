import React from "react";

export default function FriendItem({ isOnline, name, avatar }) {
  return (
    <>
      <li class="item">
        <span class={isOnline ? "green status" : "red status"}></span>
        <img
          class={isOnline ? "green-avatar avatar" : "red-avatar avatar"}
          src={avatar}
          alt="User avatar"
          width="48"
        />
        <p class="name">{name}</p>
      </li>
    </>
  );
}
