function showServiceDetails(idx) {
    renderer.renderServiceDetails({idx, ...apiManager.data[idx]});
}

function addService(idx) {
    renderer.renderAddService({
        idx,
        days: getAvailableDays(),
        hours: getAvailableHours(),
        discount: 6.5,
        ...apiManager.data[idx],
        total: calcTotal(apiManager.data[idx].cost, 1, 6.5),
    });
}

function getAvailableDays() {
    const weekDays = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    const date = new Date();
    const dayIdx = date.getDay();
    const day = date.getUTCDate();
    const month = months[date.getMonth()];
    return {
        Today: `${day} ${month}`,
        Tomorrow: `${day + 1} ${month}`,
        [`${weekDays[dayIdx + 2]}`]: `${day + 2} ${month}`,
        [`${weekDays[dayIdx + 3]}`]: `${day + 3} ${month}`,
    };
}

function getAvailableHours() {
    return {
        hSlot1: "8:00 - 9:00",
        hSlot2: "9:00 - 10:00",
        hSlot3: "10:00 - 11:00",
        hSlot4: "11:00 - 12:00",
        hSlot5: "12:00 - 13:00",
        hSlot6: "13:00 - 14:00",
    };
}

function addServiceToCart(event) {
    event.preventDefault();
    console.log($("form").serializeArray());
}

function calcTotal(cost, amount, discount) {
    const origin = cost * amount;
    return origin - origin * (discount / 100);
}


function colorCircle(status) {
    if (status === "pending") {
        $("#pending").removeClass("bg-gray-600");
        $("#pending").addClass("bg-blue-600");
    } else if (status === "processing") {
        $("#inProgress").addClass("bg-blue-600");
        $("#inProgress").removeClass("bg-gray-600");
        $("#pending").removeClass("bg-gray-600");
        $("#pending").addClass("bg-blue-600");
        $("#fLine").addClass("bg-blue-600");
        $("#fLine").removeClass("bg-gray-300");
    } else if (status === "shipped") {
        $("#finalIspection").addClass("bg-blue-600");
        $("#finalIspection").removeClass("bg-gray-600");
        $("#inProgress").addClass("bg-blue-600");
        $("#inProgress").removeClass("bg-gray-600");
        $("#pending").removeClass("bg-gray-600");
        $("#pending").addClass("bg-blue-600");
        $("#fLine").addClass("bg-blue-600");
        $("#fLine").removeClass("bg-gray-300");
        $("#sLine").addClass("bg-blue-600");
        $("#sLine").removeClass("bg-gray-300");
    } else if (status === 'delivered') {
        $("#delivered").addClass("bg-blue-600");
        $("#delivered").removeClass("bg-gray-600");
        $("#finalIspection").addClass("bg-blue-600");
        $("#finalIspection").removeClass("bg-gray-600");
        $("#inProgress").addClass("bg-blue-600");
        $("#inProgress").removeClass("bg-gray-600");
        $("#pending").removeClass("bg-gray-600");
        $("#pending").addClass("bg-blue-600");
        $("#fLine").addClass("bg-blue-300");
        $("#fLine").removeClass("bg-gray-300");
        $("#sLine").addClass("bg-blue-300");
        $("#sLine").removeClass("bg-gray-300");
        $("#tLine").addClass("bg-blue-300");
        $("#tLine").removeClass("bg-gray-300");
    }
}

