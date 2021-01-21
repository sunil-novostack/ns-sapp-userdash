import React from "react";
import { Navigation } from "@shopify/polaris";
import Router from "next/router";
import firebase from "../lib/db/Firebase";
import { FaItchIo, FaShoppingCart, FaCartArrowDown } from "react-icons/fa";
import { IoMdSettings, IoMdLogOut } from "react-icons/io";

const NarvigationBar = (
  <Navigation location="/">
    <Navigation.Section
      items={[
        {
          label: "Dashboard",
          icon: FaItchIo,
          onClick: () => Router.push("/dashboard"),
        },
        {
          label: "Import Products",
          icon: FaCartArrowDown,
          onClick: () => Router.push("/import-products"),
        },
        {
          label: "Store Products",
          icon: FaShoppingCart,
          onClick: () => Router.push("/productList"),
        },
        {
          label: "Setting",
          icon: IoMdSettings,
        },
        {
          label: "Signout",
          icon: IoMdLogOut,
          onClick: () => {
            firebase
              .auth()
              .signOut()
              .then(
                function () {
                  //Cookies.set('nsns',false);
                  Router.push("/signin");
                },
                function (error) {
                  console.error("Sign Out Error", error);
                }
              );
          },
        },
      ]}
    />
  </Navigation>
);
export default NarvigationBar;
