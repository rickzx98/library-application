import { Subject } from "../imports";

export const clearActives = (state, source) => {
    if (source) {
        recursiveClearActives(state.data, [...source]);
    }
};
const recursiveClearActives = (subjects, paths) => {
    const idPath = paths.shift();
    let index, toClear;
    subjects.forEach((subject, key) => {
        if (subject[Subject.ID] === idPath) {
            index = key;
            toClear = subject;
        }
    });
    if (toClear) {
        subjects[index] = { ...toClear, children: toClear.children ? [...toClear.children] : undefined };
        if (paths.length > 0) {
            recursiveClearActives(subjects[index].children, paths);
        } else {
            subjects[index].active = false;
        }
    }
};