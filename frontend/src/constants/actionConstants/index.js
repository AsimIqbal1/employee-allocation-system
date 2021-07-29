import AUTH from './authentication';
import PROJECTS from './projects';
import SHIFTS from './shifts';
import DEPARTMENTS from './departments';
import EMPLOYEES from './employees';

let ACTION_CONSTANTS = {
  ...AUTH,
  ...PROJECTS,
  ...SHIFTS,
  ...DEPARTMENTS,
  ...EMPLOYEES
};

export default ACTION_CONSTANTS;
