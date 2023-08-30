/** @format */

import React, { useState } from "react";
import PropTypes from "prop-types";
import CopyToClipboard from "react-copy-to-clipboard";

function CopyToClipboardButton({ text }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 5000);
  };

  return (
    <CopyToClipboard text={text}>
      <button
        onClick={handleCopy}
        className={`px-4 py-2 rounded-full border-0 shadow-md hover:bg-sky-500  ${
          copied ? "bg-green-500" : "bg-blue-500"
        } text-white font-bold focus:outline-none`}
      >
        {copied ? "Tersalin!" : "Salin"}
      </button>
    </CopyToClipboard>
  );
}

CopyToClipboardButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default CopyToClipboardButton;
