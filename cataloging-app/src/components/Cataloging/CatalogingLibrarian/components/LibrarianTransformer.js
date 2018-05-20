import { Librarian } from '../imports';

export const viewTransformer = (librarians, value) => {
    const filtered = librarians.filter(librarian => librarian[Librarian.ID] === value);
    return filtered && filtered[0] ? filtered[0][Librarian.NAME] : "";
};
