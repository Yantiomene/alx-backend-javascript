export default function createIteratorObject(report) {
  const iter = [];
  for (const employees of Object.values(report.allEmployees)) {
    iter.push(...employees);
  }
  return iter;
}
