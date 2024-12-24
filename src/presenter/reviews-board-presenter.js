import { render, RenderPosition } from "../framework/render.js";

export default class FormBoardPresenter {
  #boardContainer = null;
  #tasksModel = null;
  #tasksBoardComponent = new TaskBoardComponent();

  constructor({ boardContainer, tasksModel }) {
    this.#boardContainer = boardContainer;
    this.#tasksModel = tasksModel;
    this.#tasksModel.addObserver(this.#handleModelChange.bind(this));
  }

  async init() {
    await this.#tasksModel.init();
    this.#clearBoard();
    this.#renderBoard();
  }

  #handleModelChange() {
    this.#clearBoard();
    this.#renderBoard();
  }

  #clearBoard() {
    this.#tasksBoardComponent.element.innerHTML = "";
  }

  #renderTask(task, container) {
    const taskComponent = new TaskComponent(task);
    render(taskComponent, container);
  }

  #renderBoard() {
    render(this.#tasksBoardComponent, this.#boardContainer);

    const tasks = this.#tasksModel.tasks;
    const tasksByStatus = tasks.reduce((map, task) => {
      if (!map[task.status]) {
        map[task.status] = [];
      }
      map[task.status].push(task);
      return map;
    }, {});

    for (const status in StatusLabel) {
      const listComponent = new TasksListComponent({
        status,
        label: StatusLabel[status],
        onTaskDrop: this.#handleTaskDrop.bind(this),
      });
      render(listComponent, this.#tasksBoardComponent.getElement());

      const tasksForStatus = tasksByStatus[status] || [];
      if (tasksForStatus.length === 0) {
        render(new EmptyTasksComponent(), listComponent.getTaskListElement());
      } else {
        tasksForStatus
          .sort((a, b) => parseInt(a.id) - parseInt(b.id))
          .forEach((task) =>
            this.#renderTask(task, listComponent.getTaskListElement())
          );
      }
    }

    const resetButtonComponent = new ResetButtonComponent();
    render(
      resetButtonComponent,
      this.#tasksBoardComponent.getElement().querySelector(".basket")
    );
    resetButtonComponent.element.addEventListener("click", () => {
      this.#tasksModel.clearBasket();
    });
  }

  async #handleTaskDrop(taskId, newStatus) {
    try {
      await this.#tasksModel.updateTaskStatus(taskId, newStatus);
    } catch (err) {
      console.error("Ошибка при обновлении статуса задачи: ", err);
    }
  }
}
