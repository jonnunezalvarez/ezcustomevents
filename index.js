function subscribe(topic, target = window, callback) {
    if (target && target.addEventListener === 'function') {
        target.addEventListener(topic, function (event) {
            callback(event)
        })
    }
}

function publish(topic, target = document, inputData) {
    target.dispatchEvent(new CustomEvent(topic, inputData))
}

module.exports = {
    publish, subscribe
}