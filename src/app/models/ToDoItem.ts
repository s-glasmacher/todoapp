export class ToDoItem {
    isChecked: Boolean;
    description: string;
    id: number;

    constructor(description: string = "") {
        this.isChecked = false;
        this.description = description;
        this.id = -1;
    }
}