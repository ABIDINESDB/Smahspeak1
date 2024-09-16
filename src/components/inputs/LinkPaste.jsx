import React from "react";
import { IconLink } from "@tabler/icons-react";

const LinkPaste = ({ handleLinkPaste }) => (
  <label htmlFor="link-iput" className="cursor-pointer">
    <IconLink size={21} />
    <input
      type="text"
      id="link-input"
      onChange={handleLinkPaste}
      className="hidden"
    />
  </label>
);

export default LinkPaste;
