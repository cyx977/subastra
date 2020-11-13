import React, { Component } from "react";
import MenuItem from "../menuItem";
import "./directory.styles.scss";

import SECTIONS_DATA from "../../model/static/sectionData";

export const DirectoryMenus = () => {
  return <div className="tt">a</div>;
};

export default class DirectoryMenu extends Component {
  constructor() {
    super();
    this.state = {
      sections: SECTIONS_DATA,
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...sectionProps}) => {
          return <MenuItem key={id} {...sectionProps} />;
        })}
      </div>
    );
  }
}
