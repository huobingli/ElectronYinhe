// ��¶���ͻ��˺���
export const initClient = (app) => {
    window.UpdateNavigateItems = (data) => {
        app.$eventBus.$emit("UpdateNavigateItems", data);
    }
}