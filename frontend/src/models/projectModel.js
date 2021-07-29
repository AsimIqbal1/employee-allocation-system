export function ProjectModel(date = '', shift = '', department = '') {
    const projects = {}
    if (date) {
        const time = new Date(date);
        projects.startTime_gte = time.getTime();
    }
    if(shift) projects.shift = shift;
    if(department) projects.department = department;
    return {
        _embed: 'employees',
        ...projects
    }
}