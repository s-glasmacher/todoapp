export class ToDoItem {
    isChecked: Boolean;
    label: string;

    constructor(label: string = "") {
        this.isChecked = false;
        this.label = label;
    }
}