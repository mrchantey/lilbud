AFRAME.registerComponent('message-logger', {
    schema: {
        type: "string",
        default: "hello world"
    }
    , init() {
        console.log(this.data);
    }
})
