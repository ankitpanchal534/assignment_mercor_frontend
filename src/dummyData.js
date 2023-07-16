import { Group_632, Mask_Group, unsplash_MicqqGyDQ6w } from "./assets/images";



export const data = [
    {
        id: '1',
        chip: 'Low',
        head: 'Brainstorming',
        Task: "Brainstorming brings team members' diverse experience into play",
        comments: '12',
        files: '0',
        avatargrp: '',
        images: [0, 1, 2]
    },
    {
        id: '2',
        chip: 'High',
        head: 'Research',
        Task: "User research helps you to create an optimal product for users.",
        comments: '10',
        files: '3',
        avatargrp: '',
        images: [3, 1]
    },
    {
        id: '3',
        chip: 'High',
        head: 'Wireframes',
        Task: "Low fidelity wireframes include the most basic content and visuals.",
        comments: '6',
        files: '5',
        avatargrp: '',
        images: [0, 2, 3]
    }


];
export const data1 = [
    {
        id: '4',
        chip: 'Low',
        head: 'Onboarding Illustrations ',
        Task: "",
        comments: '12',
        taskImage: unsplash_MicqqGyDQ6w,
        files: '0',
        avatargrp: '',
        images: [2, 1, 0]
    },
    {
        id: '5',
        chip: 'High',
        head: 'Moodboard',
        Task: "",
        comments: '10',
        taskImage: Group_632,
        files: '3',
        avatargrp: '',
        images: [0, 2]
    },
    // {
    //     id: '6',
    //     chip: 'High',
    //     head: 'Wireframes',
    //     Task: "Low fidelity wireframes include the most basic content and visuals.",
    //     comments: '6',
    //     files: '5',
    //     avatargrp: '',
    //     images: [0, 2, 3]
    // }


];
export const data2 = [
    {
        id: '6',
        chip: 'Completed',
        head: 'Mobile App Design',
        Task: "Brainstorming brings team members' diverse experience into play",
        comments: '12',
        taskImage: Mask_Group,
        files: '0',
        avatargrp: '',
        images: [3, 0, 2]
    },
    {
        id: '7',
        chip: 'Completed',
        head: 'Design System',
        Task: "User research helps you to create an optimal product for users.",
        comments: '10',
        files: '3',
        avatargrp: '',
        images: [1, 3]
    },
    // {
    //     id: '9',
    //     chip: 'Completed',
    //     head: 'Wireframes',
    //     Task: "Low fidelity wireframes include the most basic content and visuals.",
    //     comments: '6',
    //     files: '5',
    //     avatargrp: '',
    //     images: [1]
    // }


];
export const data_for_board = {
    'toDo': {
        title: 'To Do',
        items: data,
        color: "#5030E5"
    },
    'progress': {
        title: 'On Progress',
        items: data1,
        color: "#FFA500"
    },
    'done': {
        title: 'Done',
        items: data2,
        color: "#8BC48A"
    },
};
