export const initClient = (app) => {
    window.testfunc = (data) => {
        app.$eventBus.$emit("SearchCode", data);
    }

    window.UpdateTable = (data) => {
        app.$eventBus.$emit("UpdateTable", data);
    }

    window.UpdateNavigate = (data) => {
        app.$eventBus.$emit("updateNavigate", data);
    }
}