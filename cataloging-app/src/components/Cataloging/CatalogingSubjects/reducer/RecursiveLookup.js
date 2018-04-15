import { Subject } from '../imports';

export const recursiveLookUp = (subjects, rootPath, children, toggled) => {
    const idPath = rootPath.shift();
    let index;
    let thisSubject;
    subjects.forEach((subject, key) => {
        if (subject[Subject.ID] === idPath) {
            thisSubject = { ...subject, children: subject.children ? [...subject.children] : [] };
            index = key;
        } else {
            subjects[key] = { ...subject, active: false };
        }
    });
    if (thisSubject && thisSubject.children && rootPath.length > 0) {
        subjects[index] = thisSubject;
        return recursiveLookUp(thisSubject.children, rootPath, children, toggled);
    }
    else {
        const newParent = { ...thisSubject, toggled, active: true };
        if (newParent && newParent.children && newParent.children.length === 0) {
            const newSubjects = [...children];
            newSubjects.forEach((sub, index) => {
                const newSub = { ...sub };
                newSub.source = newParent.source ? [...newParent.source] : [newParent[Subject.ID]];
                newSub.source.push(sub[Subject.ID]);
                newSubjects[index] = newSub;
            });
            newParent.children = newSubjects;
        }
        subjects[index] = newParent;
        return newParent;
    }
};