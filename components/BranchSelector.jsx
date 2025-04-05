import React from "react";

const BranchSelector = ({ branches, selectedBranch, onChange }) => {
  return (
    <select value={selectedBranch} onChange={e => onChange(e.target.value)}>
      {branches.map(branch => (
        <option key={branch} value={branch}>
          {branch}
        </option>
      ))}
    </select>
  );
};

export default BranchSelector;
