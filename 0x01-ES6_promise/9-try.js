export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const val = mathFunction();
    queue.push(val);
  } catch (e) {
    queue.push(`Error: ${e.message}`);
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
