export const initClient = (app) => {
    window.testfunc = (data) => {
        app.$eventBus.$emit("SearchCode", data);
    }

    window.UpdateTableItems = (data) => {
        app.$eventBus.$emit("UpdateTableItems", data);
    }

    window.UpdateNavigate = (data) => {
        app.$eventBus.$emit("UpdateNavigate", data);
    }

    window.UpdateTable = (data) => {
        app.$eventBus.$emit("UpdateTable", data);
    }
}