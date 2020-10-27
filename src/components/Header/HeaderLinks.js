/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link, NavLink } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";
import Header from "./Header";

const useStyles = makeStyles(styles);

const routes = [
  {
    page : "/",
    title : "Link"
  },
  {
    page : "/login-page",
    title : "Link"
  },
  {
    page : "/landing-page",
    title : "Link"
  },
    {
    page : "/profile-page",
    title : "Link"
  },
  {
    page : "/editor",
    title : "Editor"
  },
]

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <List className={classes.list}>
  {        routes.map(item => 
          <ListItem className={classes.listItem}>
            <NavLink to={item.page}>
              <Button
                className={classes.navLink}
                // onClick={e => e.preventDefault()}
                color="transparent"
              >
                {item.title}
                    </Button>
            </NavLink>
          </ListItem>
          )}
          <ListItem className={classes.listItem}>
            <CustomDropdown
              buttonText="Dropdown"
              dropdownHeader="Dropdown Header"
              buttonProps={{
                className: classes.navLink,
                color: "transparent"
              }}
              dropdownList={[
                "Action",
                "Another action",
                "Something else here",
                { divider: true },
                "Separated link",
                { divider: true },
                "One more separated link"
              ]}
            />
          </ListItem>
        </List>
      </ListItem>
    </List>
  );
}
