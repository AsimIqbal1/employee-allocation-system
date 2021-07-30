import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { getProjects } from "../../../../store/actions/projectAction";
import { ProjectModel } from "../../../../models/projectModel";
import { move, reorder } from "./helpers";
import { getItemStyle, getListStyle } from "./styles";
import './styles.css'
import { updateEmployeeModel } from "../../../../models/updateEmployeeModel";
import { getEmployee, updateEmployee } from "../../../../store/actions/employeeAction";
import MaterialDatePicker from "../../../../components/materialUI/datePicker";
import { getDepartments } from "../../../../store/actions/departmentAction";
import { getShifts } from "../../../../store/actions/shiftAction";
import MaterialSelector from "../../../../components/materialUI/selector";
import MaterialTypography from "../../../../components/materialUI/typography/typography";
import colors from "../../../../constants/colors";
import MaterialButton from "../../../../components/materialUI/button";

const ProjectWiseEmployeeAllocation = () => {
    const dispatch = useDispatch();
    const [projects, setProjects] = useState();
    const [currentEmployee, setCurrentEmployee] = useState(null);
    //for filters
    const [shifts, setShifts] = useState([]);
    const [selectedShift, setSelectedShift] = useState('');
    const [departments, setDepartments] = useState([]);
    const [selectedDepartment, setSelectedDepartment] = useState('');
    const [date, setDate] = useState(null);
    const projectsData = useSelector(state => state.project.projects)
    const employeeData = useSelector(state => state.employee.employee)
    const shiftsData = useSelector(state => state.shift.shifts)
    const departmentsData = useSelector(state => state.department.departments)

    useEffect(() => {
        if (!projectsData) dispatch(getProjects(ProjectModel()));
        if (!departmentsData) dispatch(getDepartments());
        if (!shiftsData) dispatch(getShifts());
    }, []);

    useEffect(() => {
        dispatch(getProjects(ProjectModel(date, selectedShift, selectedDepartment)));
    }, [selectedShift, selectedDepartment, date])

    useEffect(() => {
        if (projectsData) {
            setProjects(projectsData)
        }
    }, [projectsData]);

    useEffect(() => {
        if (employeeData) {
            setCurrentEmployee(employeeData)
        }
    }, [employeeData]);

    useEffect(() => {
        if (shiftsData) {
            setShifts(shiftsData)
        }
    }, [shiftsData]);

    useEffect(() => {
        if (departmentsData) {
            setDepartments(departmentsData)
        }
    }, [departmentsData]);

    function updateEmployeeAllocation(employeeId, projectId) {
        const updateObject = updateEmployeeModel(projectId)
        dispatch(updateEmployee(employeeId, updateObject));
    }

    const handleItemClick = (employeeId) => {
        dispatch(getEmployee(employeeId))
    }

    function onDragEnd(result) {
        const { source, destination } = result;

        // dropped outside the droppable area
        if (!destination) {
            return;
        }
        const sourceId = source.droppableId;
        const destiationId = destination.droppableId;

        // if sorce and destination are same means the item is move inside same table
        if (sourceId === destiationId) {
            const swappedIndex = projects.findIndex(item => item.id === sourceId)
            const items = reorder(projects[swappedIndex].employees, source.index, destination.index);
            const newState = [...projects];
            newState[swappedIndex].employees = items;
            setProjects(newState);
        }
        // if sorce and destination are not same means the item is move outside same table
        else {
            updateEmployeeAllocation(result.draggableId, result.destination.droppableId)
            const sourceIndex = projects.findIndex(item => item.id === sourceId)
            const destinatioIndex = projects.findIndex(item => item.id === destiationId)
            const res = move(projects[sourceIndex].employees, projects[destinatioIndex].employees, source, destination);
            const newState = [...projects];
            newState[sourceIndex].employees = res[sourceId];
            newState[destinatioIndex].employees = res[destiationId];
            setProjects(newState);
        }
    }

    const onDateFilterChange = (e) => {
        setDate(e.target.value);
    }

    const onShiftFilterChange = (e) => {
        setSelectedShift(e.target.value);
    }

    const onDepartmentFilterChange = (e) => {
        setSelectedDepartment(e.target.value);
    }

    const onClearFilterClick = () => {
        setDate('');
        setSelectedDepartment('');
        setSelectedShift('')
        dispatch(getProjects(ProjectModel()));
    }

    const renderFilters = () => {
        return (
            <div>
                <MaterialDatePicker
                    onChangeEvent={onDateFilterChange}
                    value={date}
                />
                <MaterialSelector
                    onChangeEvent={onDepartmentFilterChange}
                    label='Department'
                    value={selectedDepartment}
                    options={departments.map(item => item.name)}
                />
                <MaterialSelector
                    onChangeEvent={onShiftFilterChange}
                    label='Shift'
                    value={selectedShift}
                    options={shifts}
                />
                <div className='clearButton'>
                    <MaterialButton onClickEvent={onClearFilterClick} text='Clear Filters' />
                </div>
            </div>
        )
    }

    const singleEmployeeRow = (label, itemText) => {
        return (
            <div className='employeeTableItem'>
                <MaterialTypography text={label} varient='h6' color={colors.black} />
                <MaterialTypography text={itemText} varient='h6' color={colors.black} />
            </div>
        )
    }
    const renderEmployeeDetails = () => {
        return (
            <div>
                {singleEmployeeRow('Employee No: ', currentEmployee.id)}
                {singleEmployeeRow('Name: ', currentEmployee.employeeName)}
                {singleEmployeeRow('Grade: ', currentEmployee.grade)}
                {singleEmployeeRow('Project: ', currentEmployee.projectId)}
                {singleEmployeeRow('Role: ', currentEmployee.role)}
                {singleEmployeeRow('Skill: ', currentEmployee.skill)}
            </div>
        )
    }

    return (
        <div>
            <div>
                <div className='rowDisplay'>
                    {renderFilters()}
                </div>
                <div className='rowDisplay'>
                    <DragDropContext onDragEnd={onDragEnd}>
                        {projects?.map((project, ind) => (
                            <Droppable key={ind} droppableId={`${project.id}`}>
                                {(provided, snapshot) => (
                                    <div
                                        ref={provided.innerRef}
                                        style={getListStyle(snapshot.isDraggingOver)}
                                        {...provided.droppableProps}
                                    >
                                        <p className='tableHeader'>Project: {project.id}</p>
                                        <p className='tableHeader'>Controller: {project.controller}</p>
                                        <p className='tableHeader'>Manager: {project.manager}</p>

                                        {project.employees?.map((item, index) => (
                                            <Draggable
                                                key={item.id}
                                                draggableId={item.id}
                                                index={index}
                                            >
                                                {(provided, snapshot) => (
                                                    <div
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        style={getItemStyle(
                                                            snapshot.isDragging,
                                                            provided.draggableProps.style
                                                        )}
                                                        onClick={() => handleItemClick(item.id)}
                                                    >
                                                        <div
                                                            className='listItem'
                                                        >
                                                            {item.id}
                                                        </div>
                                                    </div>
                                                )}
                                            </Draggable>
                                        ))}
                                        {provided.placeholder}
                                    </div>
                                )}
                            </Droppable>
                        ))}
                    </DragDropContext>
                </div>
                <div className='rowDisplay'>
                    {currentEmployee && renderEmployeeDetails()}
                </div>
            </div>
        </div>
    );
}

export default ProjectWiseEmployeeAllocation;