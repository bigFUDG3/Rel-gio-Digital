function updateTime() {
    const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
    const now = new Date();
    const day = now.getDay();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const { style } = document.documentElement;
    style.setProperty('--timer-day', `'${daysOfWeek[day]}'`);
    style.setProperty('--timer-hours', `'${hours}'`);
    style.setProperty('--timer-minutes', `'${minutes}'`);
    style.setProperty('--timer-seconds', `'${seconds}'`);
}

setInterval(updateTime, 1000);

function getGreeting () {
    const now = new Date();
    const hours = now.getHours();

    if (hours > 5 && hours < 12) {
        return "Olá, bom dia! que Deus abençoe sua manhã.";
    } else if (hours > 12 && hours < 18) {
        return "Olá, boa tarde! que Deus abençoe sua tarde.";
    } else if (hours > 18 && hours < 5) {
        return "Olá, boa noite! que Deus abençoe sua noite.";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const greeting = document.getElementById("greeting");
    if (greeting) {
        greeting.textContent = getGreeting();
    }
});
