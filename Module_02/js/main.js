$(document).ready(() => {
    if (localStorage.getItem("lastVisit") !== new Date().toISOString().split("T")[0]) $("#website-statement").modal("show");
});