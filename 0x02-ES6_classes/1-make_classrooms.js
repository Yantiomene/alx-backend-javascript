import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const classList = [];
  const classSize = [19, 20, 34];

  for (const size of classSize) {
    classList.push(new ClassRoom(size));
  }
  return classList;
}
