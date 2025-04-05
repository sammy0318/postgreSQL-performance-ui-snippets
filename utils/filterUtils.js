export function filterDataByBranch(data, branch) {
  return data.filter(d => d.branch === branch);
}
